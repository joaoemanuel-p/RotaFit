
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { supabase } from '@/lib/supabase';

WebBrowser.maybeCompleteAuthSession();

function getQueryParams(url: string): {
  params: Record<string, string>;
  errorCode: string | null;
} {
  const params: Record<string, string> = {};
  const [beforeHash, hash = ''] = url.split('#');
  const query = beforeHash.split('?')[1] ?? '';

  for (const part of [query, hash]) {
    for (const pair of part.split('&')) {
      if (!pair) continue;

      const [key, ...valueParts] = pair.split('=');
      const value = valueParts.join('=');

      try {
        params[decodeURIComponent(key)] = decodeURIComponent(
          value.replace(/\+/g, ' '),
        );
      } catch {
        params[key] = value;
      }
    }
  }

  return {
    params,
    errorCode:
      params.errorCode ?? params.error_code ?? params.error ?? null,
  };
}

// Deixa o Expo gerar o endereço de retorno apropriado para o ambiente.
// No Expo Go, o endereço é diferente do esquema do app instalado.
export const authRedirectUri = AuthSession.makeRedirectUri();

export async function signInWithGoogle(): Promise<void> {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: authRedirectUri,
      skipBrowserRedirect: true,
    },
  });
  console.log('RETORNO OAUTH:', authRedirectUri);
  console.log('URL GERADA PELO SUPABASE:', data.url);

  if (error) throw error;

  if (!data.url) {
    throw new Error('Não foi possível iniciar o login com o Google.');
  }

  const result = await WebBrowser.openAuthSessionAsync(
    data.url,
    authRedirectUri,
  );

  if (result.type !== 'success' || !result.url) {
    if (result.type === 'cancel' || result.type === 'dismiss') return;

    throw new Error('O login com o Google não foi concluído.');
  }

  const { params, errorCode } = getQueryParams(result.url);

  if (errorCode) {
    throw new Error(params.error_description ?? errorCode);
  }

  const accessToken = params.access_token;
  const refreshToken = params.refresh_token;

  if (!accessToken || !refreshToken) {
    throw new Error('O provedor não devolveu uma sessão válida.');
  }

  const { error: sessionError } = await supabase.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  if (sessionError) throw sessionError;
}

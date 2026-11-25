// Converte qualquer erro em uma mensagem curta e amigável para o usuário.
export function friendlyError(error: unknown): string {
  const message =
    error instanceof Error
      ? error.message
      : typeof error === 'string'
        ? error
        : typeof error === 'object' && error !== null && 'message' in error
          ? String((error as { message: unknown }).message)
          : '';

  if (/network request failed|failed to fetch|network error|timeout/i.test(message)) {
    return 'Sem conexão com a internet. Verifique a rede e tente de novo.';
  }
  if (/jwt|not authenticated|invalid refresh token/i.test(message)) {
    return 'Sua sessão expirou. Entre novamente.';
  }
  if (/row-level security|permission denied/i.test(message)) {
    return 'Você não tem permissão para fazer isso.';
  }
  return message || 'Algo deu errado. Tente novamente.';
}

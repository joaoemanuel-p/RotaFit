import { QueryClient } from '@tanstack/react-query';

// Cache compartilhado do app. Exportado para poder ser limpo ao sair da conta.
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, staleTime: 30_000 },
  },
});

# 🏃 RotaFit

Aplicativo mobile de corrida desenvolvido com React Native e Expo, utilizando GPS para registrar percursos, distância, duração e ritmo. Conta com autenticação pelo Google, integração com Spotify, histórico de atividades e interface com temas claro e escuro.

Projeto acadêmico desenvolvido no curso de Análise e Desenvolvimento de Sistemas (ADS) do IESB.

## 🎯 Objetivo

Desenvolver um aplicativo mobile para acompanhamento de corridas, permitindo registrar atividades físicas em tempo real, visualizar estatísticas e consultar o histórico de treinos.

O projeto integra recursos nativos do dispositivo, autenticação OAuth, banco de dados em nuvem e uma interface personalizada com Liquid Glass.

## 🚀 Funcionalidades

- Login com Google por meio do Supabase Auth;
- Registro de corridas utilizando GPS;
- Cálculo de distância, duração e ritmo;
- Visualização do percurso durante a corrida;
- Pausar, retomar, finalizar e descartar atividades;
- Histórico de corridas realizadas;
- Resumo individual de cada atividade;
- Estatísticas semanais de distância, tempo e quantidade de corridas;
- Integração com Spotify por OAuth 2.0 com PKCE;
- Visualização da música reproduzida;
- Controles de reprodução, pausa e troca de faixa;
- Tema claro e escuro com persistência da preferência;
- Interface com efeitos visuais Liquid Glass;
- Persistência de dados utilizando Supabase;
- Controle de acesso por Row Level Security (RLS).

## 🛠️ Tecnologias

| Tecnologia               | Utilização                          |
| ------------------------ | ----------------------------------- |
| React Native             | Desenvolvimento mobile              |
| Expo SDK 58              | Ambiente de desenvolvimento         |
| Expo Router              | Navegação e organização das telas   |
| TypeScript               | Tipagem e organização do código     |
| Supabase                 | Backend e autenticação              |
| PostgreSQL               | Banco de dados                      |
| Row Level Security (RLS) | Controle de acesso aos dados        |
| expo-location            | Captura de localização GPS          |
| OAuth 2.0 / PKCE         | Autenticação Google e Spotify       |
| TanStack Query           | Gerenciamento de dados              |
| expo-secure-store        | Armazenamento seguro                |
| expo-blur                | Efeitos de transparência e desfoque |
| expo-linear-gradient     | Gradientes da interface             |
| react-native-svg         | Desenho dos percursos               |
| Jest                     | Testes automatizados                |
| PGlite                   | Testes do banco de dados            |

## 📁 Estrutura do projeto

```text
RotaFit/
├── app/
│   ├── (app)/              # Área autenticada
│   │   ├── (tabs)/         # Início, histórico e perfil
│   │   └── run/            # Corrida e resumo
│   ├── (auth)/             # Autenticação
│   └── _layout.tsx
├── assets/                 # Ícones e imagens
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── glass/          # Componentes Liquid Glass
│   │   └── spotify/        # Componentes do Spotify
│   ├── context/            # Contextos de autenticação e Spotify
│   ├── hooks/              # Hooks personalizados
│   ├── lib/                # Configurações e integrações
│   ├── services/           # Serviços e requisições
│   ├── theme/              # Temas e identidade visual
│   ├── types/              # Tipos TypeScript
│   └── utils/              # Funções auxiliares
├── supabase/
│   ├── schema.sql          # Estrutura do banco e políticas
│   └── tests/              # Testes do banco
├── __tests__/              # Testes da

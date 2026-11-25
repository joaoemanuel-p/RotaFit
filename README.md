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

 aplicação
├── .env.example            # Exemplo de variáveis
├── .gitignore
├── app.json
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Configuração e execução

### Pré-requisitos

- Node.js 22 ou superior;
- npm;
- Expo Go ou ambiente compatível;
- Conta no Supabase;
- Conta Google para autenticação;
- Aplicativo Spotify e cadastro no Spotify for Developers.

### 1. Instalação

Clone o repositório:

```bash
git clone https://github.com/joaoemanuel-p/RotaFit.git
cd RotaFit
```

Instale as dependências:

```bash
npm ci
```

### 2. Configuração do Supabase

Crie um projeto no Supabase e execute o arquivo:

```text
supabase/schema.sql
```

O banco contém a estrutura necessária para armazenar as corridas, controlar o acesso dos usuários e calcular as estatísticas semanais.

Ative o provedor Google em Authentication → Providers e configure as credenciais do Google Cloud Console.

Adicione `rotafit://` às URLs de redirecionamento permitidas no Supabase.

### 3. Configuração do Spotify

Crie uma aplicação no [Spotify for Developers](https://developer.spotify.com/dashboard) e obtenha o Client ID.

A integração utiliza OAuth com PKCE, sem necessidade de armazenar Client Secret no aplicativo.

Cadastre a URI de redirecionamento utilizada pela integração Spotify.

### 4. Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto, utilizando `.env.example` como referência:

```env
EXPO_PUBLIC_SUPABASE_URL=https://SEU-PROJETO.supabase.co
EXPO_PUBLIC_SUPABASE_KEY=SUA-CHAVE-ANON-OU-PUBLISHABLE
EXPO_PUBLIC_SPOTIFY_CLIENT_ID=SEU-CLIENT-ID-DO-SPOTIFY
```

Não compartilhe credenciais privadas nem envie arquivos `.env` para o GitHub.

### 5. Inicialização

Inicie o aplicativo:

```bash
npx expo start
```

Abra o projeto em um dispositivo Android ou iOS utilizando o Expo Go ou ambiente compatível.

**Observação:** o projeto depende do GPS do dispositivo e não foi desenvolvido para execução no navegador.

## 🔒 Segurança e privacidade

O RotaFit utiliza autenticação pelo Google integrada ao Supabase Auth, evitando a implementação de armazenamento próprio de senhas.

A segurança dos dados é complementada por:

- Row Level Security (RLS) nas tabelas do banco;
- Controle de acesso às corridas por usuário autenticado;
- OAuth com PKCE para integração com serviços externos;
- Armazenamento seguro de informações de autenticação;
- Uso de variáveis de ambiente para configuração;
- Ausência de Client Secret do Google ou Spotify no aplicativo.

## 🎨 Interface e temas

A identidade visual possui dois modos:

- **Claro:** combinação de Milano Red e Lemon Chiffon.
- **Escuro:** identidade visual inspirada no Flamengo.

A interface utiliza Liquid Glass, com superfícies translúcidas, desfoque, brilho e bordas para compor os elementos visuais.

## 🎵 Integração com Spotify

A integração permite consultar a música que está tocando e disponibiliza controles de reprodução.

**Observação:** o controle de reprodução pela API do Spotify exige uma conta Premium e um dispositivo ativo. Contas gratuitas ainda podem consultar a música reproduzida.

## 💰 Sem custo, de ponta a ponta

O projeto foi estruturado para utilizar serviços e recursos gratuitos:

- Supabase para autenticação e banco de dados;
- Google OAuth para login;
- Spotify Web API para integração musical;
- SVG para desenhar os percursos, sem depender de serviços de mapas pagos;
- PGlite para testes do banco de dados localmente.

## 🧪 Testes

O projeto possui testes automatizados para lógica geográfica, controle de corridas e operações do banco.

| Comando             | Função                         |
| ------------------- | ------------------------------ |
| `npm test`          | Executa todos os testes        |
| `npm run test:app`  | Executa os testes da aplicação |
| `npm run test:db`   | Executa os testes do banco     |
| `npm run typecheck` | Verifica a tipagem TypeScript  |
| `npm run format`    | Formata os arquivos do projeto |

Os testes do banco utilizam PGlite, permitindo testar operações PostgreSQL sem necessidade de Docker.

A execução das suítes deve ser realizada no ambiente local para validar os resultados.

## 📌 Status do projeto

Aplicação estruturada com autenticação Google, integração Spotify, rastreamento GPS, histórico de corridas, estatísticas e banco de dados Supabase.

## 👨‍💻 Autor

**João Emanuel Pinheiro Leite**

Análise e Desenvolvimento de Sistemas — IESB.

## 🔗 Repositório

[https://github.com/joaoemanuel-p/RotaFit](https://github.com/joaoemanuel-p/RotaFit)

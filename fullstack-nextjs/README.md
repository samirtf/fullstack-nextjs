# Personagens do Senhor dos Anéis

Side project para estudar Next.js App Router com um tema que gosto. Exibe os nove membros da **Sociedade do Anel**: listagem, detalhes por personagem e perfil com login mockado. Escolhi o tema Senhor dos Anéis por ser um universo com personagens bem definidos para modelagem.

## Funcionalidades

- **Início** – Listagem em grid dos personagens (Hobbits, Homens, Mago, Elfo e Anão) com cards clicáveis.
- **Detalhes** – Página por personagem com imagem, raça, resumo e texto completo; geração estática com revalidação (ISR).
- **Perfil** – Login com dados mock, exibição e edição de nome, e-mail e avatar.
- Acessibilidade – Skip link “Pular para o conteúdo”, foco visível ao navegar por teclado, labels e estados de loading/erro.
- **Tema** – Suporte a tema claro/escuro conforme preferência do sistema.

## Decisões de Arquitetura

- Optei por Context API em vez de Redux para manter o projeto simples.
- Os dados são mockados para evitar dependência de backend nesta etapa.
- sessionStorage foi escolhido em vez de localStorage para manter a sessão apenas durante a navegação.
- O projeto prioriza simplicidade em vez de escalabilidade neste momento.
- Context separado pra preferências pra nao misturar com user; depois daria pra juntar.

## Evolução

**v1** – Listagem de personagens estática  
**v2** – Página de detalhes com SSG  
**v3** – Login mockado, preferências por usuário  
**v4** – Último personagem visitado (sessionStorage)

**Próximos passos:** Backend real, persistência em banco, filtros por personagem.

## Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun

## Instalação

```bash
npm install
```

## Scripts

| Comando                | Descrição                                |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento (porta 3000) |
| `npm run build`        | Build de produção                        |
| `npm run start`        | Servidor de produção (após `build`)      |
| `npm run lint`         | Executa o ESLint                         |
| `npm run lint:fix`     | Corrige automaticamente o ESLint         |
| `npm run format`       | Formata o código com Prettier            |
| `npm run format:check` | Verifica formatação com Prettier         |
| `npm run test`         | Executa os testes (Jest)                 |
| `npm run test:watch`   | Testes em modo watch                     |

## Execução

1. Instale as dependências: `npm install`
2. Inicie o servidor: `npm run dev`
3. Acesse [http://localhost:3000](http://localhost:3000)

Para produção:

```bash
npm run build
npm run start
```

## Estrutura do projeto

```
src/
├── app/                    # App Router (rotas e páginas)
│   ├── api/                # Route Handlers (API interna)
│   │   ├── characters/     # GET lista e GET por id
│   │   └── user/           # GET usuário padrão
│   ├── characters/[id]/    # Página de detalhes + loading + error + not-found
│   ├── perfil/             # Página de perfil (client)
│   ├── layout.tsx          # Layout raiz e navegação
│   ├── page.tsx            # Página inicial (listagem)
│   ├── providers.tsx       # UserProvider
│   └── globals.css         # Estilos globais e tema
├── components/             # Componentes reutilizáveis
│   └── CharacterCard/
├── context/                # React Context (UserContext)
├── lib/                    # Utilitários e dados
│   ├── data/               # Personagens e usuário (mock)
│   └── schemas/            # Schemas Zod (Character, User)
└── __tests__/              # Testes unitários (Jest)
```

## API interna (Route Handlers)

- `GET /api/characters` – Lista todos os personagens.
- `GET /api/characters/[id]` – Retorna um personagem por ID (404 se não existir).
- `GET /api/user` – Retorna o usuário padrão usado no perfil.
- `POST /api/auth/login` – Valida e-mail e senha contra usuários mock.

Os dados vêm de `src/lib/data` (sem banco de dados).

## Contas de teste

| Usuário | E-mail | Senha |
| ------- | ------ | ----- |
| samir | samir.admin@demo.app | Anel123! |
| frodo | frodo@condado.terra | Anel123! |

## Testes

Os testes estão em `src/__tests__/` e validam os schemas Zod (Character e User). Convenção: testes em `src/__tests__/` ou ao lado do módulo (`*.test.ts` / `*.test.tsx`).

```bash
npm run test
npm run test:watch
```

## Observações

Skip link, foco visível e ARIA estão no código. Estados vazios, loading e erro tratados nas telas.

## Sobre

Projeto desenvolvido como exercício prático para consolidar conceitos de:

- Next.js App Router
- SSG/ISR
- Context API
- Route Handlers
- Validação com Zod

Tempo estimado de desenvolvimento: 10–15 horas. Projeto simples focado em aprendizado e prática.

## Ferramentas

- **ESLint** – Regras do Next.js + Prettier.
- **Prettier** – Formatação consistente.
- **Husky + lint-staged** – Pre-commit: formatação e lint nos arquivos staged.

## Deploy

O projeto pode ser implantado em qualquer plataforma que suporte Next.js (por exemplo [Vercel](https://vercel.com)). Use `npm run build` e sirva com `npm run start` ou o comando equivalente do host.


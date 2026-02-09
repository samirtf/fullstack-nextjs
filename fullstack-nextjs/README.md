# Lista dos personagens do Senhor dos Anéis

Projeto React com Next.js. Exibe os nove membros da **Sociedade do Anel**: listagem, detalhes por personagem e perfil com login mockado. Escolhi o tema Senhor dos Anéis porque sou fã.

## Funcionalidades

- **Início** – Listagem em grid dos personagens (Hobbits, Homens, Mago, Elfo e Anão) com cards clicáveis.
- **Detalhes** – Página por personagem em `/items/[slug]` com imagem, raça, resumo e descrição; geração estática com revalidação (ISR).
- **Perfil** – Login com dados mockados no json, exibição e edição de nome, e-mail e avatar.
- Acessibilidade – Implementação básica: skip link “Pular para o conteúdo”, foco visível ao navegar por teclado, labels e estados de carregamento/erro.
- **Tema** – Tema claro.

## Decisões de Arquitetura

- **Estratégia ISR na página de detalhe**: Usei Incremental Static Regeneration (`revalidate: 60`) em vez de SSR porque os dados mudam pouco, oferece melhor performance e menor custo de servidor. Se os dados mudassem com frequência ou precisassem estar sempre atualizados, SSR seria mais indicado.
- Optei por Context API em vez de Redux para manter o projeto simples.
- Os dados são mockados para evitar dependência de backend nesta etapa.
- sessionStorage foi escolhido em vez de localStorage para manter a sessão apenas durante a navegação.
- Priorizei simplicidade em vez de escalabilidade por conta do tempo. Estou com muitas demandas no trabalho.
- Context separado pra preferências pra nao misturar com user; depois daria pra juntar.

## Evolução

**v1** – Listagem de personagens estática  
**v2** – Página de detalhes com SSG  
**v3** – Login mockado, preferências por usuário  
**v4** – Último personagem visitado (sessionStorage)

**Próximos passos:** Backend real, persistência em banco, filtros por personagem. Adicionaria essas funcionalidades, mas já é domingo e não vai dar tempo.

## Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun

## Instalação

```bash
npm install
```

## Scripts

`npm run dev`          - Rodar desenvolvimento (porta 3000)
`npm run build`        - Buildar
`npm run start`        - Rodar após buildar
`npm run lint`         - Roda o ESLint
`npm run lint:fix`     - Roda o ESLint e corrige automaticamente
`npm run format`       - Formata o código com Prettier
`npm run format:check` - Checa a formatação com Prettier
`npm run test`         - Roda os testes com Jest
`npm run test:watch`   - Testes em modo watch

## Execução

1. Instalar as dependências: `npm install`
2. Rodar o servidor: `npm run dev`
3. Acesse no navegador [http://localhost:3000](http://localhost:3000)

Para produção:

```bash
npm run build
npm run start
```

## Estrutura do projeto

O projeto está organizado dentro da pasta `src`. A separação é simples e segue o fluxo principal da aplicação. Utiliza **Pages Router** do Next.js.

Resumo do que tem em cada parte:

* **pages/**
  Onde ficam as páginas e rotas do Next.js (Pages Router).

  * `index.tsx`: página inicial com listagem (SSG via `getStaticProps`)
  * `items/[slug].tsx`: tela de detalhes do item/personagem (ISR via `getStaticPaths` + `getStaticProps` + `revalidate`)
  * `login.tsx`: página de login
  * `perfil.tsx`: página do usuário
  * `api/`: endpoints da API (characters, user, auth)
  * `_app.tsx`: layout base com navegação e providers

* **components/**
  Componentes de interface reutilizáveis (ex: cards de personagem).

* **context/**
  Contextos React para estado global, como informações do usuário.

* **lib/**
  Código de apoio: dados mockados, validações com Zod e utilidades.

* ****tests**/**
  Testes unitários do projeto.

A estrutura é intencionalmente simples, já que o objetivo do projeto é demonstrar os conceitos principais sem adicionar complexidade desnecessária.


## API interna (Pages Router API Routes)

- `GET /api/characters` – Lista todos os personagens.
- `GET /api/characters/[slug]` – Retorna um personagem por slug (404 se não existir).
- `GET /api/user` – Retorna o usuário padrão usado no perfil.
- `POST /api/auth/login` – Valida e-mail e senha contra usuários mock.

Os dados vêm de `src/lib/data` (sem banco de dados).

## Contas de teste

Usuário, E-mail, Senha
samir, samir.admin@condado.com.br, 1234567
frodo, frodo@condado.com.br, 1234567

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

- Next.js Pages Router
- SSG (`getStaticProps` na home) e ISR (`getStaticPaths` + `getStaticProps` + `revalidate` na página de detalhe)
- Context API
- API Routes (Pages Router)
- Validação com Zod

Tempo estimado de desenvolvimento: 10–15 horas. Projeto simples focado em aprendizado e prática.

## Ferramentas

- **ESLint** – Regras do Next.js + Prettier.
- **Prettier** – Formatação consistente.
- **Husky + lint-staged** – Pre-commit: formatação e lint nos arquivos staged.

## Deploy

O projeto pode ser implantado em qualquer plataforma que suporte Next.js (por exemplo [Vercel](https://vercel.com)). Use `npm run build` e sirva com `npm run start` ou o comando equivalente do host.


# Lista dos personagens do Senhor dos Anéis

Projeto em React com Next.js mostrando os nove da Sociedade do Anel: listagem, página de cada personagem e perfil com login mockado. Escolhi o tema porque sou fã.

## Como rodar

Requer Node 18+. Na raiz do projeto:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Para produção: `npm run build` e depois `npm run start`.

## O que tem

A home lista os personagens em grid (cards clicáveis). Cada um tem página em `/items/[slug]` com imagem, raça, resumo e descrição — essa página usa ISR (`revalidate: 60`). Tem login com dados mockados em JSON, perfil onde dá pra editar nome, e-mail e avatar, e um mínimo de acessibilidade (skip link, foco ao navegar por teclado, labels e estados de loading/erro). Tema claro.

## Por que fiz assim

Usei ISR na página de detalhe em vez de SSR porque os dados mudam pouco — melhor performance e menos custo. Se mudasse direto, SSR faria mais sentido. Context API em vez de Redux pra manter simples. Dados mockados pra não depender de backend. sessionStorage pra sessão só enquanto navega. Context de preferências separado do de user pra não misturar; depois daria pra unificar. Priorizei simplicidade; estou com muitas demandas no trabalho.

## Evolução e próximos passos

**v1** – Listagem estática  
**v2** – Detalhes com SSG  
**v3** – Login mockado e preferências por usuário  
**v4** – Último personagem visitado (sessionStorage)

Próximos passos: backend de verdade, banco, filtros. Adicionaria isso quando tiver tempo — na última vez já era domingo e não deu.

## Contas de teste

| Usuário | E-mail | Senha   |
|---------|--------|---------|
| samir   | samir.admin@condado.com.br | 1234567 |
| frodo   | frodo@condado.com.br        | 1234567 |

## Testes e ferramentas

Testes em `src/__tests__/` (schemas Zod e um componente). Rodar: `npm run test` ou `npm run test:watch`. Tem ESLint + Prettier e Husky com lint-staged no pre-commit.

## Estrutura e API

Tudo em `src/`: **pages/** (rotas e API), **components/**, **context/** (user e preferências), **lib/** (dados mockados, Zod, storage). Pages Router.

API interna: `GET /api/characters`, `GET /api/characters/[slug]`, `GET /api/user`, `POST /api/auth/login`. Dados em `src/lib/data`, sem banco.

Deploy: qualquer host Next.js (ex. Vercel). `npm run build` e servir com `npm run start`.

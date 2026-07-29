# ROADMAP

## v0 — Atual (este projeto)
Landing page one-page, autoridade + captação via WhatsApp/Instagram.

## W-Migração — Next.js/TypeScript/Tailwind (aprovada por exceção, ver DECISIONS.md D-19)
Corre em paralelo às fases abaixo, coexistindo com `site/` até o gate final. Onda decomposta em `docs/TASKS.md`. Escopo cortado: `(auth)`, `services/cms.ts`, `services/mail.ts`, API routes, Shadcn completo, suíte E2E completa — nada disso tem função real neste projeto (1 página, sem backend/login/CMS/e-mail).

## v1 — Conteúdo real
- Reativar a seção Depoimentos com depoimentos reais de clientes (removida temporariamente, ver DECISIONS.md D-16)
- Nº de clientes atendidos (ainda não fornecido)
- Adicionar Google Analytics / Meta Pixel para medir cliques nos CTAs
- Registrar domínio próprio

## v2 — Autoridade de conteúdo
- Seção/blog com artigos simples (ex: "Como não cair na malha fina", "MEI vs ME: qual escolher")
- Isso melhora SEO e reforça domínio técnico organicamente

## v3 — Automação de captação
- Formulário ou chatbot qualificando leads antes de cair no WhatsApp
- Integração com CRM simples (ex: planilha automatizada ou ferramenta gratuita)

Cada fase só deve começar quando a anterior estiver validada — não adiantar complexidade sem necessidade (princípio de arquitetura deste projeto).

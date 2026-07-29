# CHANGELOG

## v0.10.3 — 2026-07-28
- **Paridade visual do `web/` com `site/` completada:** hero volta a ter as 3 colunas originais (foto do leão com selo da logo, texto, medalhão de Ciências Contábeis) em vez da versão simplificada de 2 colunas do primeiro port — `web/app/page.tsx`
- Cards de "Serviços" recriados com o design real do `site/` (fundo navy com padrão diamantado, borda superior em gradiente dourado→navy, ícone e link em dourado-claro) em vez do cartão claro genérico usado no primeiro port
- Medalhão "Ciências Contábeis" recriado com o mesmo efeito em camadas do `site/` (glow radial, anéis concêntricos, preenchimento com gradiente dourado e símbolo com drop-shadow)
- **Barra de progresso de rolagem** adicionada no topo da página (`web/app/components/ScrollProgress.tsx`), paridade com `site/` (D-12)
- Utilitário `.bg-diamond` (padrão diamantado sutil sobre fundo navy) adicionado em `web/app/globals.css`, reaproveitando o mesmo `--diamond-pattern` do `site/css/style.css`

## v0.10.2 — 2026-07-28
- **Responsividade mobile do `web/`:** menu do header vira hamburger abaixo do breakpoint `md`, com dropdown acessível (`aria-expanded`, fecha ao clicar num link) — `web/app/components/Header.tsx`; espaçamento vertical das seções reduzido em telas pequenas (`py-16 sm:py-24`)
- **Botão flutuante de WhatsApp com pulso** (paridade com `site/` — docs/DECISIONS.md D-18): anel pulsante via `@keyframes whatsapp-ring` em `web/app/globals.css`, respeitando `prefers-reduced-motion`
- **Bug corrigido:** o botão de WhatsApp tinha as classes `fixed` e `relative` juntas (mesma propriedade CSS `position`) — `relative` vencia na cascata e tirava o botão do posicionamento fixo, fazendo-o cair para a esquerda dentro do fluxo normal da página em vez de ficar fixo no canto inferior direito. Removida a classe `relative` redundante (`fixed` já cria contexto de posicionamento para o anel filho) — `web/app/components/WhatsappFloat.tsx`
- **Botão "voltar ao topo"** adicionado, empilhado acima do botão de WhatsApp (`web/app/components/BackToTop.tsx`)
- Verificado visualmente via Playwright headless em 1280px e 375px: menu mobile abre/fecha, seções empilham em coluna única sem overflow horizontal, botão de WhatsApp pulsando no canto correto

## v0.10.1 — 2026-07-28
- **W0/W1 da migração implementados:** `web/` criado com `create-next-app` (App Router, TypeScript, Tailwind CSS v4, sem `src/`), rodando em paralelo a `site/` sem alterá-lo — docs/DECISIONS.md D-19
- As 9 seções reais do `site/index.html` (Header, Hero, Sobre, Diferenciais, Serviços, Banner IR, Contato, Footer, botão flutuante de WhatsApp) portadas para `web/app/page.tsx` como página única, com texto, links de WhatsApp/Instagram, CRC e logos reais — sem mock
- Paleta oficial (navy/dourado/off-white) e fonte Montserrat configuradas como tokens do Tailwind em `web/app/globals.css`; assets (`logo-*.png`, `foto-helen.jpg`, `caduceu-contabil.svg`, `favicon.png`) copiados para `web/public/assets`
- Escopo cortado mantido conforme D-19: nenhum grupo `(auth)`, `services/cms.ts`, `services/mail.ts`, API route, Shadcn ou suíte de testes foi criado
- `npx tsc --noEmit` rodou sem erros

## v0.10.0 — 2026-07-28
- **Migração para Next.js/TypeScript/Tailwind aprovada por exceção** (revisa D-01): usuário pediu a árvore completa enviada (App Router, TS, Tailwind, Shadcn, testes, CI/CD); veredito técnico apontou que o gatilho documentado em D-01/ARCHITECTURE.md para trocar de stack ("blog, área do cliente ou automação") ainda não foi atingido — usuário confirmou que quer migrar mesmo assim, com estratégia de coexistência — docs/DECISIONS.md D-19
- **Plano em ondas registrado** (W0 esqueleto → W1 componentização/Tailwind → W2 build de produção/export → W3 corte com gate humano) — docs/TASKS.md, docs/ROADMAP.md (W-Migração)
- **Escopo cortado explicitamente** da árvore recebida: `(auth)`, `services/cms.ts`, `services/mail.ts`, API routes, Shadcn completo, suíte E2E completa — nenhum tem função real neste projeto (1 página, sem backend/login/CMS/e-mail)
- **Limpeza de doc obsoleto:** `docs/ARCHITECTURE.md` — seção "Hospedagem (opções)" (Netlify/Vercel/GitHub Pages como alternativas em aberto) substituída por "Hospedagem (decidido)", já que o GitHub Pages via Actions foi escolhido e publicado há tempo; essa lista estava desatualizada desde a decisão real de hospedagem
- `agents/frontend-engineer.md` (Felipe) atualizado para cobrir as duas stacks em coexistência (`site/` e `web/`), com o mesmo corte de escopo registrado acima

## v0.9.0 — 2026-07-27
- **Risco de compliance corrigido:** card "Especialização em IR" prometia "sem erros" (afirmação que pode esbarrar nas normas de publicidade do CFC/CRC) — texto reescrito — docs/DECISIONS.md D-18
- **Limpeza de peso morto:** fonte "Alex Brush" removida do import do Google Fonts, não era usada em nenhum lugar
- **Favicon próprio** gerado a partir do caduceu contábil sobre fundo navy da marca
- **SEO/compartilhamento:** `og:image`, `og:locale`, Twitter Card e dados estruturados (JSON-LD `AccountingService`) adicionados
- **Responsivo:** hero de 3 colunas corrigido na faixa 769-1024px (empilha mais cedo, evitando aperto em tablets/notebooks pequenos)
- **Acessibilidade:** skip link "Pular para o conteúdo", `<main id="conteudo">`, `scroll-margin-top` nas âncoras do menu (corrige header sticky cobrindo o topo da seção)
- **UX:** scrollspy destaca no menu a seção visível durante a rolagem
- **Performance:** preload da imagem do hero (LCP) e lazy-load nas imagens abaixo da dobra
- **Acabamento premium:** header com efeito "vidro fosco" e mais compacto ao rolar; pulso sutil no botão flutuante de WhatsApp — docs/DECISIONS.md D-18
- **Bug corrigido (regressão):** opacidade do monograma de fundo do CTA final estava em `0.9` em vez do `0.14` documentado desde a v0.5.0 — a logo fantasma aparecia quase opaca, colidindo visualmente com o título "Vamos cuidar da sua contabilidade juntos?" no mobile. Encontrado via print enviado pelo usuário — docs/DECISIONS.md D-18
- **Símbolo "Ciências Contábeis" vetorizado:** `caduceu-contabil.png` (148x171px, serrilhado em telas retina) traçado como `caduceu-contabil.svg` — nítido em qualquer resolução, substitui o PNG no medalhão do hero e no favicon — docs/DECISIONS.md D-18

## v0.5.0 — 2026-07-26
- **Logo real da marca** aplicada no lugar do texto/monograma estilizado: header e footer (fundo navy) usam `logo-dourado.png`, selo do hero usa `logo-dourado.png` em miniatura, monograma de fundo do CTA final usa `logo-branco.png`. As 3 versões recebidas (dourada, branca, navy) tiveram o selo "AI-Generated" cravado nos pixels removido e o excesso de margem transparente recortado antes de usar (arquivos ~1420x410px, eram 1536x1024). `logo-azul.png` guardada como reserva para fundo claro, não usada ainda — docs/DECISIONS.md D-17, ver `site/assets/LEIA-ME.md`
- **Seção Depoimentos removida** (temporário): conteúdo e os 2 links de menu (header + footer) tirados do `index.html`; CSS de `.testimonial-card`/`.stars` mantido, reservado para reativar — docs/DECISIONS.md D-16. `docs/SPEC.md`, `docs/TASKS.md` e `docs/ROADMAP.md` atualizados
- **Limpeza final de travessões** (regra D-15): corrigidos os 2 casos que ainda restavam em texto visível — `<title>` da página e o card "Atendimento direto" nos Diferenciais. Confirmado que não sobrou nenhuma outra ocorrência fora de comentários HTML e da citação exceptuada (`<cite>— Helen Beatriz</cite>`)
- Ajuste fino pós-implementação: opacidade do monograma de fundo do CTA final recalibrada (de 0.35 para 0.14) depois de checar que `logo-branco.png` não é semi-transparente — é opaca e quase branca, então precisava de uma opacidade bem mais baixa pra manter o efeito sutil original

## v0.4.2 — 2026-07-25
- Nova regra de estilo: proibido travessão ligando frases no texto do site — docs/DECISIONS.md D-15
- Regra adicionada às responsabilidades do Ricardo (orchestrator.md), da Maria (content-copywriter.md) e ao checklist da Camila (brand-qa.md)

## v0.4.1 — 2026-07-25
- Instagram real confirmado e atualizado: @contadora.helenbeatriz (era um placeholder @bia_tmotta, extraído por engano da legenda da imagem de campanha) — 2 ocorrências em site/index.html + docs/SPEC.md + agents/brand-qa.md
- WhatsApp conferido: 5541999639108 já batia com o número real (41999639108 + código do país 55) — nenhuma mudança necessária

## v0.4.0 — 2026-07-25
- Foto real de leão (preto e branco, Unsplash License) integrada ao hero via hotlink — docs/DECISIONS.md D-11
- Elevação de UX/UI: barra de progresso de rolagem, botão flutuante de WhatsApp, underline animado no menu, hover states elaborados nos cards, zoom sutil de entrada no hero, stagger animation nos cards — docs/DECISIONS.md D-12
- Acessibilidade reforçada: regra global `prefers-reduced-motion`, foco visível para navegação por teclado
- Juliana (Designer Visual) expandida para UX/UI Designer; novo agente Diego (Growth & Analytics)
- Checklist da Camila (QA) ganhou critérios de acessibilidade (WCAG AA, teclado, reduced motion)
- `docs/TASKS.md`, `docs/AGENTS.md`, `README.md` atualizados

## v0.3.0 — 2026-07-25
- Adicionados 3 agentes: Rafael (TI/Infraestrutura), Fernanda (Especialista Contábil), Juliana (Designer Visual) — docs/DECISIONS.md D-09
- Fluxo de delegação do Ricardo atualizado: Maria → Fernanda → Juliana → Felipe → Camila → Rafael → Bruno
- Todos os 8 agentes ganharam seção "Nível de excelência" com linguagem de especialista sênior/elite — docs/DECISIONS.md D-10
- `docs/AGENTS.md` e `README.md` atualizados com o time completo

## v0.2.2 — 2026-07-25
- Agentes ganharam nomes próprios: Ricardo (chefe/orquestrador), Felipe (site), Maria (redatora), Camila (revisão), Bruno (publicação) — docs/DECISIONS.md D-08

## v0.2.1 — 2026-07-25
- Agentes renomeados para nomes comuns: Coordenador, Desenvolvedor do Site, Redator, Revisor de Qualidade, Publicador (docs/DECISIONS.md D-07)

## v0.2.0 — 2026-07-25
- Adicionado time de agentes (`agents/`): orchestrator, frontend-engineer, content-copywriter, brand-qa, deploy-ops
- Criado `docs/AGENTS.md` explicando o time e por que foi reduzido do padrão de 9 papéis
- Registrada decisão D-06 em `docs/DECISIONS.md`

## v0.1.0 — 2026-07-25
- Criação inicial do projeto
- Documentação estruturada completa (SPEC, SCOPE, ARCHITECTURE, ROADMAP, TASKS, DECISIONS)
- Landing page completa: header, hero, sobre, diferenciais, serviços, banner IR, depoimentos, contato, footer
- CSS com identidade visual navy + dourado + tipografia script
- JS: menu mobile, scroll suave, ano dinâmico no footer
- Conteúdo com placeholders sinalizados (fotos, CRC, depoimentos) — ver TASKS.md

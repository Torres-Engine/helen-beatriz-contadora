# TASKS

## Concluído (v0 → v0.4)
- [x] Estrutura do projeto e documentação
- [x] index.html com todas as 9 seções da SPEC
- [x] CSS com identidade visual (navy + dourado + script font)
- [x] JS (menu mobile, scroll suave, ano dinâmico)
- [x] Textos de todas as seções (com placeholders sinalizados)
- [x] Time de 9 agentes com nomes próprios (Ricardo, Maria, Fernanda, Juliana, Felipe, Camila, Rafael, Diego, Bruno)
- [x] Foto real de leão (preto e branco, licença livre) no hero
- [x] Microinterações de nível UX/UI: barra de progresso de rolagem, botão flutuante de WhatsApp, hover states elaborados, stagger animation nos cards, zoom sutil no hero

## Concluído (v0.4 → v0.5)
- [x] Foto do leão auto-hospedada em `site/assets/leao-hero.jpg` (182KB, era hotlink da Unsplash) — ver DECISIONS.md D-13
- [x] Corrigido fade-in dos cards (`.reveal`) que deixava texto branco/dourado-claro ilegível sobre fundo claro durante a transição — animação agora só desliza (`transform`), sem variar opacidade
- [x] `.eyebrow` sobre fundo claro (Sobre/Diferenciais/Serviços/Depoimentos) trocado para `--gold-dark`, corrigindo falha de contraste AA (~2.4:1 → ~5.5-6:1)

## Concluído (v0.5 → v0.6)
- [x] Foto profissional da Helen Beatriz adicionada em `site/assets/foto-helen.jpg` (900x1117, 105KB) — marca d'água de geração por IA removida antes de salvar

## Concluído (v0.6 → v0.7)
- [x] Paleta oficial da marca aplicada (Navy `#13273d`, Off-white `#ececed`, Preto `#000000`, Dourado `#dbae72`) — substitui a paleta placeholder da decisão D-04. Ver DECISIONS.md D-14
- [x] Número de registro no CRC → `CRC PR-082924/O-5` (2 ocorrências: Sobre + Footer)
- [x] Anos de experiência → "5 anos" na seção Sobre
- [x] Pós-graduação em Reforma Tributária adicionada à seção Sobre

## Concluído (v0.7 → v0.8)
- [x] Logo real da marca (3 versões: dourada, branca, navy) aplicada no header, footer, selo do hero e monograma do CTA final — selo "AI-Generated" removido e margem recortada antes de usar. Ver DECISIONS.md D-17
- [x] Seção Depoimentos removida (com os 3 placeholders fictícios) até haver depoimentos reais — ver DECISIONS.md D-16
- [x] Travessões ligando frases removidos do texto visível do site (título da página, card "Atendimento direto") — ver DECISIONS.md D-15

## Concluído (v0.8 → v0.9)
- [x] Texto de risco de compliance corrigido: card "Especialização em IR" prometia "sem erros", troca por texto que não garante ausência de erro — ver DECISIONS.md D-18
- [x] Fonte "Alex Brush" removida do import do Google Fonts (não era usada em nenhum lugar do CSS/HTML — peso de carregamento morto)
- [x] Meta tags `og:image`, `og:locale` e Twitter Card adicionadas (preview correto ao compartilhar o link no WhatsApp/redes sociais) — `og:url`/`og:image` ainda com caminho relativo, trocar por URL absoluta quando o domínio for definido
- [x] Favicon próprio gerado (`assets/favicon.png`, caduceu contábil sobre fundo navy) e referenciado no `<head>`
- [x] Hero de 3 colunas corrigido na faixa 769-1024px (tablets/notebooks pequenos): breakpoint de empilhamento adiantado de 768px para 1024px só para o hero
- [x] `scroll-margin-top` adicionado às seções âncora do menu — antes o header sticky cobria o topo da seção ao clicar em um link do menu
- [x] Link "Pular para o conteúdo" (skip link) adicionado para navegação por teclado/leitor de tela; conteúdo principal envolvido em `<main id="conteudo">`
- [x] Scrollspy: item do menu correspondente à seção visível fica destacado durante a rolagem
- [x] Performance: `rel=preload` na imagem do hero (LCP) e `loading="lazy"` nas imagens abaixo da dobra (foto da Helen, monograma do CTA final)
- [x] Dados estruturados (JSON-LD, `AccountingService`) adicionados para SEO/rich snippets — `url` vazio até o domínio ser definido
- [x] Header ganhou efeito "vidro fosco" (frosted glass) e fica mais compacto ao rolar; botão flutuante de WhatsApp ganhou pulso sutil de atenção (respeitando `prefers-reduced-motion`) — ver DECISIONS.md D-18
- [x] Bug de regressão corrigido: opacidade do monograma de fundo do CTA final estava em `0.9` em vez de `0.14` (documentado desde v0.5.0), fazendo a logo fantasma colidir com o título no mobile — encontrado via print do usuário
- [x] Símbolo "Ciências Contábeis" vetorizado: `caduceu-contabil.png` (148x171px, serrilhado em telas retina) traçado como `caduceu-contabil.svg` (curvas suaves, nítido em qualquer resolução) — substitui o PNG no medalhão do hero e na geração do favicon

## Migração Next.js/TS/Tailwind (aprovada por exceção — ver DECISIONS.md D-19)
Estratégia de coexistência: `web/` roda em paralelo, `site/` continua publicado até o gate final. Ver `docs/ROADMAP.md` (W-Migração).

- [ ] W0 — Esqueleto vertical: `web/` criado (Next.js App Router + TypeScript + Tailwind), 1 página real com o conteúdo atual portado (não mock), rodando local (`npm run dev`), sem tocar `site/`. **Gate:** builda sem erro de tipo (`tsc --noEmit` limpo) e renderiza as 9 seções da SPEC.
- [ ] W1 — Componentização: seções viram componentes (`Header`, `Hero`, `Sobre`, `Diferenciais`, `Servicos`, `BannerIR`, `Contato`, `Footer`), design tokens de `site/css/style.css` portados para `tailwind.config` (cores, fontes), microinterações (scrollspy, reveal, WhatsApp flutuante) reimplementadas. **Gate:** paridade visual com `site/` em telas 375/768/1440px, `prefers-reduced-motion` preservado.
- [ ] W2 — Build de produção: `next build` com `output: 'export'` gera estático compatível com GitHub Pages; novo workflow de deploy (ou variante do `deploy.yml`) apontando para a saída do Next.js. **Gate:** build de produção roda em ambiente limpo, artefato exportado abre localmente sem 404 de asset.
- [ ] W3 — Corte: `web/` publicado no lugar de `site/`, DNS/Pages settings atualizados, `site/` arquivado (não apagado) por segurança. **Gate humano:** aprovação explícita do usuário após conferir o site novo no ar, antes do corte.
- [ ] Felipe: atualizar `agents/frontend-engineer.md` para cobrir as duas stacks durante a coexistência (feito nesta rodada — ver arquivo)

## Pendente — bloqueia publicação
- [ ] Nº de clientes atendidos → ainda não há placeholder explícito no código para isso; adicionar à seção Sobre/Diferenciais quando o dado for confirmado
- [ ] Depoimentos reais de clientes → reativar a seção quando houver (ver ROADMAP.md v1)
- [ ] Fernanda: validar conformidade de todo o conteúdo tributário/contábil com as normas de publicidade do CFC antes do lançamento (incluindo a nova menção à Reforma Tributária e o texto revisado do card de IR)

## Pendente — não bloqueia, mas recomendado
- [ ] Comprimir imagens para `.webp` antes de publicar
- [ ] Escolher e configurar hospedagem (ver ARCHITECTURE.md)
- [ ] Configurar domínio próprio (e então trocar `og:url`/`og:image`/JSON-LD `url` para absolutos)
- [ ] Diego: configurar Google Analytics/Meta Pixel para medir conversão dos CTAs
- [ ] Rafael: rodar auditoria de performance/compatibilidade cross-browser antes do lançamento final

## Como encontrar os placeholders no código
Busque por `<!-- TODO` no `index.html` — cada um está comentado explicando o que precisa entrar ali.

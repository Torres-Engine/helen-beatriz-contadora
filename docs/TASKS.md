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

## Pendente — bloqueia publicação
- [ ] Nº de clientes atendidos → ainda não há placeholder explícito no código para isso; adicionar à seção Sobre/Diferenciais quando o dado for confirmado
- [ ] Depoimentos reais de clientes → reativar a seção quando houver (ver ROADMAP.md v1)
- [ ] Fernanda: validar conformidade de todo o conteúdo tributário/contábil com as normas de publicidade do CFC antes do lançamento (incluindo a nova menção à Reforma Tributária)

## Pendente — não bloqueia, mas recomendado
- [ ] Favicon próprio → `site/assets/favicon.png`
- [ ] Comprimir imagens para `.webp` antes de publicar
- [ ] Escolher e configurar hospedagem (ver ARCHITECTURE.md)
- [ ] Configurar domínio próprio
- [ ] Diego: configurar Google Analytics/Meta Pixel para medir conversão dos CTAs
- [ ] Rafael: rodar auditoria de performance/compatibilidade cross-browser antes do lançamento final

## Como encontrar os placeholders no código
Busque por `<!-- TODO` no `index.html` — cada um está comentado explicando o que precisa entrar ali.

# CHANGELOG

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

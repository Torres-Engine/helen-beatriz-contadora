# AGENTS — Time de agentes do projeto

## Por que esse time e não o padrão de 9 papéis

O padrão geral (CEO AI, Product Manager, Solution Architect, Backend Engineer, Frontend Engineer, Database Engineer, QA Engineer, Security Engineer, DevOps Engineer, Technical Writer) é pensado para produtos com backend, banco de dados e múltiplas rotas. Este projeto é uma landing page estática de uma página, sem servidor e sem banco (docs/ARCHITECTURE.md) — usar o time completo seria complexidade sem benefício, o mesmo raciocínio de D-01. Em vez disso, o time foi montado com base no que uma página institucional de contabilidade de nível UX/UI realmente precisa: fluxo de conversão bem pensado, visual sofisticado, conteúdo tecnicamente correto, código limpo, qualidade técnica, medição de resultado e publicação bem feita.

Time com nomes reais, adaptado ao que o projeto realmente precisa — todos operando em nível de excelência máximo (docs/DECISIONS.md D-10):

| Nome | Papel | O que faz | Substitui/cobre do padrão | Arquivo |
|---|---|---|---|---|
| **Ricardo** | Chefe / Orquestrador | Decide quem faz o quê e mantém o time organizado | CEO AI | `agents/orchestrator.md` |
| **Maria** | Redatora | Escreve e revisa os textos do site | Product Manager + Technical Writer (parte de conteúdo) | `agents/content-copywriter.md` |
| **Fernanda** | Especialista Contábil | Valida se o conteúdo sobre IR/MEI/tributação está correto e em conformidade com as normas de publicidade do CFC | (não existia no padrão — específico do domínio contábil) | `agents/accounting-expert.md` |
| **Juliana** | UX/UI Designer | Pensa o fluxo do usuário (UX) e a direção visual/microinterações (UI) antes da implementação | (não existia no padrão — normalmente parte do Product Designer) | `agents/visual-designer.md` |
| **Felipe** | Desenvolvedor do Site | Mexe no HTML/CSS/JS | Frontend Engineer | `agents/frontend-engineer.md` |
| **Camila** | Revisora de Qualidade | Confere visual, links, responsividade e acessibilidade (WCAG AA) antes de publicar | QA Engineer + Security Engineer (nível básico, sem backend não há superfície de ataque relevante) | `agents/brand-qa.md` |
| **Rafael** | TI / Infraestrutura | Audita performance, segurança e compatibilidade cross-browser | DevOps Engineer (parte técnica/infra) | `agents/it-support.md` |
| **Diego** | Growth & Analytics | Mede conversão (cliques em WhatsApp/Instagram), cuida do SEO técnico, propõe otimizações baseadas em dado | (não existia no padrão — cobre a lacuna de "isso está funcionando?") | `agents/growth-analytics.md` |
| **Bruno** | Publicador | Coloca o site no ar e cuida da hospedagem | DevOps Engineer (parte de publicação) | `agents/deploy-ops.md` |

Ricardo é o chefe: qualquer pedido que não seja claramente de uma área só, ou que misture mais de uma, passa por ele primeiro.

(Os nomes dos arquivos ficaram com termos técnicos descritivos — o que importa para se referir ao agente numa conversa é o nome próprio.)

Ainda não há Database Engineer nem Backend Engineer porque o site não tem banco de dados nem servidor de aplicação — se isso mudar (ver ROADMAP v3), aí sim caberia.

## Como usar

Cada arquivo em `agents/` tem: objetivo, nível de excelência, quando usar, responsabilidades, limites, entregáveis e um "prompt especializado" pronto para colar no início de uma conversa (com o Claude Code, com um subagente, ou com qualquer assistente de IA) para assumir aquele papel.

Fluxo recomendado para pedidos que envolvem mais de uma área:
```
conteúdo (Maria) → validação técnica/conformidade (Fernanda) → UX/UI (Juliana) → implementação (Felipe) → revisão (Camila) → auditoria técnica (Rafael) → medição/otimização (Diego) → publicação (Bruno)
```

Para pedidos ambíguos ou que misturam áreas, chame primeiro o Ricardo (`orchestrator.md`) — ele decide o que delegar.

## Quando expandir o time
Só ao entrar em fases futuras do `docs/ROADMAP.md` que justifiquem: ex. v2 (blog) pode justificar um agente de SEO/conteúdo recorrente dedicado (hoje coberto parcialmente pelo Diego); v3 (CRM/automação) pode justificar um Backend Engineer/Database Engineer dedicados. Não adicionar agentes antecipadamente.

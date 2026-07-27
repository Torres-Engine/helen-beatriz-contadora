# Helen Beatriz Contadora — Landing Page (R0)

Site institucional (uma página) para a contadora Helen Beatriz, construído para transmitir **autoridade e domínio técnico** em contabilidade e Imposto de Renda.

## Estrutura do projeto

```
Helen Beatriz Contadora R0/
├── README.md              ← este arquivo
├── docs/                   ← documentação do projeto
│   ├── SPEC.md             ← especificação estruturada (conteúdo, seções, requisitos)
│   ├── PROJECT_SCOPE.md    ← objetivo, entregáveis, fora de escopo
│   ├── ARCHITECTURE.md     ← stack técnica e por quê
│   ├── ROADMAP.md          ← evolução futura (v0 → v1 → v2)
│   ├── TASKS.md            ← pendências (o que VOCÊ precisa fazer antes de publicar)
│   ├── DECISIONS.md        ← decisões técnicas e de design (ADRs)
│   ├── AGENTS.md           ← time de agentes do projeto e como usá-los
│   └── CHANGELOG.md        ← histórico de versões
├── agents/                 ← definição de cada agente (objetivo, limites, prompt especializado)
│   ├── orchestrator.md         → Ricardo (Chefe/Orquestrador)
│   ├── content-copywriter.md   → Maria (Redatora)
│   ├── accounting-expert.md    → Fernanda (Especialista Contábil)
│   ├── visual-designer.md      → Juliana (UX/UI Designer)
│   ├── frontend-engineer.md    → Felipe (Desenvolvedor do Site)
│   ├── brand-qa.md             → Camila (Revisora de Qualidade)
│   ├── it-support.md           → Rafael (TI/Infraestrutura)
│   ├── growth-analytics.md     → Diego (Growth & Analytics)
│   └── deploy-ops.md           → Bruno (Publicador)
└── site/                   ← o site em si (é isso que vai para o ar)
    ├── index.html
    ├── css/style.css
    ├── js/main.js
    └── assets/
        └── LEIA-ME.md      ← quais imagens você precisa adicionar
```

O time de agentes (`agents/`) tem 9 papéis com nomes próprios (Ricardo é o chefe), adaptado ao que um site estático de nível UX/UI realmente precisa — ver `docs/AGENTS.md` e as decisões D-06 a D-10 em `docs/DECISIONS.md`.

## Como visualizar o site agora

Abra `site/index.html` direto no navegador (duplo clique). Não precisa de servidor, build, nem instalação.

## Como publicar (quando estiver pronto)

Qualquer um destes serve, gratuitamente, para um site estático como este:

1. **Netlify** (mais simples): arraste a pasta `site/` em https://app.netlify.com/drop
2. **Vercel**: `vercel deploy` dentro da pasta `site/`
3. **GitHub Pages**: subir a pasta `site/` para um repositório e ativar Pages

Detalhes de custo/trade-off em `docs/ARCHITECTURE.md`.

## Antes de publicar — pendências obrigatórias

O conteúdo abaixo está com **placeholders** (marcados no código com comentários `<!-- TODO -->`) porque não foram fornecidos ainda:

- Foto profissional da Helen Beatriz (seção "Sobre")
- Foto do leão: hoje o hero usa uma foto real (leão preto e branco, licença livre da Unsplash) via link direto — funciona bem para visualizar, mas antes de publicar de verdade recomenda-se baixar e hospedar localmente (ver `site/assets/LEIA-ME.md`)
- Número de registro no CRC
- Anos de experiência / número de clientes atendidos (usados na seção de autoridade)
- Depoimentos reais de clientes (hoje são 3 exemplos fictícios)

Lista completa e priorizada em `docs/TASKS.md`.

## Identidade visual usada

Extraída da peça de campanha "Imposto de Renda 2025" que você enviou: fundo azul-marinho escuro com padrão diamantado, logotipo em fonte manuscrita ("Helen Beatriz"), subtítulo "CONTADORA" em caixa alta espaçada, tipografia de destaque em negrito, contato via WhatsApp e Instagram. Adicionei um dourado suave como cor de destaque (não estava na imagem original) para reforçar a sensação de autoridade/premium — decisão registrada em `docs/DECISIONS.md`.

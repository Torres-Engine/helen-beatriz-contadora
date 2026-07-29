# ARCHITECTURE

## Stack escolhida
HTML5 + CSS3 puro + JavaScript vanilla. Sem framework, sem build step.

> **Em migração (ver DECISIONS.md D-19):** aprovada por exceção explícita do usuário uma migração para Next.js (App Router) + TypeScript + Tailwind CSS, em pasta paralela `web/`, com `site/` (esta stack) continuando no ar até o gate de paridade passar. Ver `docs/ROADMAP.md` (wave W-Migração) para o plano e `docs/TASKS.md` para o estado atual. Esta seção descreve a stack **atual em produção** (`site/`); não reescrever até o corte acontecer — nesse momento, todo o conteúdo abaixo passa a descrever `web/` e esta nota é removida.

## Por quê (análise de trade-off)

| Critério | React/Next.js | HTML/CSS/JS puro (escolhido) |
|---|---|---|
| Complexidade | Alta (build, deps, deploy configurado) | Mínima |
| Custo de hospedagem | Igual (ambos estáticos aqui) | R$ 0 (Netlify/Vercel/GitHub Pages grátis) |
| Performance | Boa, mas com overhead de bundle | Ótima — carrega instantâneo |
| Manutenção futura | Exige conhecimento de JS framework | Qualquer freelancer edita direto |
| Escalabilidade necessária | Alta (não é o caso aqui) | Suficiente para 1 página institucional |

Para uma página institucional de um profissional autônomo, sem lógica de aplicação, sem estado complexo e sem necessidade de milhares de componentes reutilizáveis, um framework é custo sem benefício. Se no futuro entrar blog, área do cliente ou automações (ver ROADMAP v2), reavaliar para um gerador estático (Astro/Next.js) — não antes disso.

## Estrutura de arquivos
```
site/
├── index.html      # toda a página, seções em ordem (ver SPEC.md #5)
├── css/style.css   # design tokens (CSS variables) + estilos
├── js/main.js      # menu mobile, scroll suave, ano dinâmico, fade-in
└── assets/         # imagens (fornecidas pelo cliente)
```

## Dependências externas
- Google Fonts (CDN): fonte script para o logotipo + fonte sans-serif para o corpo
- Font Awesome (CDN, cdnjs): ícones de WhatsApp/Instagram/serviços

Ambas são só carregadas via `<link>`/`<script>` — sem instalação, sem npm.

## Hospedagem (decidido)
**GitHub Pages**, via GitHub Actions (`.github/workflows/deploy.yml`: checkout → configure-pages → upload-pages-artifact apontando para `./site` → deploy-pages). Escolhido em vez do Netlify Drop/Vercel porque o repositório já ia para o GitHub de qualquer forma (versionamento do time de agentes) e o deploy fica gratuito e automático a cada push, sem passo manual. Deploy via Actions em vez da convenção nativa `/docs`-folder do Pages porque este repositório já usa `docs/` para documentação interna do projeto — usar a convenção nativa colidiria os dois.

Domínio próprio (ex: `helenbeatrizcontadora.com.br`) pode ser apontado para o GitHub Pages depois (ver TASKS.md, pendente).

## Performance
Sem frameworks pesados, imagens devem ser comprimidas (recomendado: converter fotos para `.webp`, máx. 200KB cada) antes de colocar em `assets/`.

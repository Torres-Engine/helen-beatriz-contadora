# ARCHITECTURE

## Stack escolhida
HTML5 + CSS3 puro + JavaScript vanilla. Sem framework, sem build step.

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

## Hospedagem (opções, todas gratuitas para este caso)
1. **Netlify Drop** — arrastar a pasta `site/`, fica no ar em segundos. Ideal para quem não usa terminal.
2. **Vercel** — `vercel deploy` dentro de `site/`. Ideal se já usa a ferramenta.
3. **GitHub Pages** — grátis, mas exige repositório Git.

Domínio próprio (ex: `helenbeatrizcontadora.com.br`) pode ser apontado para qualquer uma das três opções depois.

## Performance
Sem frameworks pesados, imagens devem ser comprimidas (recomendado: converter fotos para `.webp`, máx. 200KB cada) antes de colocar em `assets/`.

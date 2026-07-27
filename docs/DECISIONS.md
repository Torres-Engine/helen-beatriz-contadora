# DECISIONS (ADRs resumidos)

### D-01 — Site estático, sem framework
**Contexto:** página institucional de 1 rota, sem lógica de aplicação.
**Decisão:** HTML/CSS/JS puro, sem React/Next.js/build step.
**Motivo:** menor custo, menor complexidade, mesma performance final, qualquer pessoa consegue editar depois. Ver ARCHITECTURE.md.

### D-02 — Sem formulário de contato próprio
**Contexto:** usuário confirmou que WhatsApp + Instagram já são canal suficiente.
**Decisão:** todos os CTAs apontam para `wa.me` e Instagram, nada de backend de formulário.
**Motivo:** elimina necessidade de servidor de e-mail/backend só para receber mensagens.

### D-03 — Banner de Imposto de Renda sem data fixa
**Contexto:** a peça de campanha original tem prazo "17/03 a 31/05" (safra 2025). O site é para durar além de uma safra.
**Decisão:** o banner de urgência do IR usa texto evergreen ("todos os anos...") em vez de datas fixas.
**Motivo:** evita que o site fique com informação errada/expirada fora da época de declaração. Se quiser reativar uma campanha sazonal com data específica, adicionar como seção extra temporária, não no core da página.

### D-04 — Paleta estendida com dourado
**Contexto:** a imagem de referência usa só azul-marinho, branco e preto.
**Decisão:** adicionar um dourado suave (`#c9a24b`) como cor de destaque em CTAs e ícones.
**Motivo:** reforça a sensação de "premium/autoridade" pedida explicitamente pelo usuário, sem fugir da identidade original (a base navy/branco foi mantida 100%).

### D-05 — Hero sem depender de foto externa
**Contexto:** não há arquivo de imagem do leão em alta resolução disponível — só a imagem de referência da campanha (JPG de baixa resolução, não adequado para produção).
**Decisão:** o hero usa o padrão diamantado + monograma "HB" em fonte script como visual até o cliente fornecer a foto real do leão em alta resolução.
**Motivo:** evita depender de link externo (hotlink) para uma imagem de terceiro sem licença clara, e evita usar uma imagem de baixa resolução em produção. O CSS já está preparado para trocar por `assets/leao-hero.jpg` assim que o arquivo existir (ver `site/assets/LEIA-ME.md`).

### D-06 — Time de agentes reduzido (5 papéis, não os 9 padrão)
**Contexto:** solicitado um "time de agentes" para o projeto.
**Decisão:** criar 5 agentes (Coordenador, Desenvolvedor do Site, Redator, Revisor de Qualidade, Publicador) em vez do time padrão de 9 (que inclui Backend/Database/Security Engineer dedicados).
**Motivo:** o projeto não tem backend nem banco de dados — manter os papéis padrão geraria agentes sem função real. Ver `docs/AGENTS.md` para o mapeamento completo e critério de quando expandir.

### D-07 — Nomes comuns para os agentes
**Contexto:** os agentes tinham nomes técnicos em inglês (orchestrator, frontend-engineer, content-copywriter, brand-qa, deploy-ops).
**Decisão:** renomear para nomes comuns em português, de acordo com a atividade: Coordenador, Desenvolvedor do Site, Redator, Revisor de Qualidade, Publicador. Os nomes dos arquivos em `agents/` continuam com os termos técnicos (evita renomear/apagar arquivos já salvos na pasta do usuário).
**Motivo:** pedido explícito do usuário — nomes mais simples e diretos, sem jargão de engenharia.

### D-08 — Nomes próprios + chefe orquestrador
**Contexto:** usuário pediu nomes reais de pessoa (ex: Maria, Felipe) e um chefe que orquestra tudo.
**Decisão:** cada agente ganhou um nome próprio mantendo o papel entre parênteses: Ricardo (Chefe/Orquestrador), Felipe (Desenvolvedor do Site), Maria (Redatora), Camila (Revisora de Qualidade), Bruno (Publicador). Ricardo é o ponto de entrada único para pedidos ambíguos ou que misturam áreas.
**Motivo:** pedido explícito do usuário — facilita se referir a cada agente numa conversa ("chama o Felipe", "pede pro Ricardo decidir").

### D-09 — Agentes de TI, Contábil e Design adicionados
**Contexto:** usuário identificou 3 lacunas: ninguém cuidava de infraestrutura/segurança técnica, ninguém validava o conteúdo contábil/tributário do ponto de vista técnico e de conformidade, e ninguém cuidava da direção visual antes da implementação.
**Decisão:** adicionar Rafael (TI/Infraestrutura — performance, segurança, compatibilidade), Fernanda (Especialista Contábil — valida termos técnicos e conformidade com normas de publicidade do CFC) e Juliana (Designer Visual — direção de design antes do Felipe implementar). Fluxo de delegação do Ricardo atualizado para: Maria → Fernanda → Juliana → Felipe → Camila → Rafael → Bruno.
**Motivo:** pedido explícito do usuário. Mantém o princípio de D-06 (só adicionar papel que tem função real): TI cobre uma lacuna técnica que Bruno (focado em hospedagem) não cobria, Fernanda cobre uma lacuna de compliance específica da profissão contábil que Maria (foco em copy/tom de voz) não cobre, e Juliana separa decisão de design da implementação de código.

### D-10 — Nível de excelência elevado em todos os agentes
**Contexto:** usuário pediu para "elevar o QI de todos os agentes em 10000" — ou seja, tratá-los como especialistas de elite, não genéricos.
**Decisão:** cada um dos 8 agentes ganhou uma seção "Nível de excelência" e linguagem de especialista sênior/referência de mercado no prompt especializado (ex: "engenheiro front-end de elite", "contadora sênior... atualizada com a legislação").
**Motivo:** pedido explícito do usuário — eleva o padrão de qualidade esperado de cada entrega, sem mudar responsabilidades/limites já definidos.

### D-11 — Foto do leão via hotlink Unsplash (revisa D-05)
**Contexto:** usuário pediu para achar uma foto real de leão em alta resolução na internet. O ambiente usado para montar este projeto não tem acesso de rede irrestrito para baixar arquivos binários (só busca/leitura de páginas) — não foi possível baixar o arquivo e salvar localmente em `site/assets/`.
**Decisão:** usar a foto "a black and white photo of a lion" (Bro Takes Photos, Unsplash License — uso comercial livre, sem atribuição obrigatória) direto da CDN da Unsplash via `background-image` no CSS, com overlay de gradiente para legibilidade e fallback para o padrão diamantado caso o link pare de responder.
**Motivo:** resolve a pendência visual imediatamente, com foto real e licenciada. Fica registrado como débito técnico (`docs/TASKS.md`) baixar/otimizar/auto-hospedar essa imagem antes do lançamento em produção, para não depender de um link externo — ver `site/assets/LEIA-ME.md` para o passo a passo.

### D-13 — Foto do leão auto-hospedada (revisa D-11)
**Contexto:** o hotlink da Unsplash (D-11) funcionava em testes diretos, mas depende de um domínio externo que bloqueadores de anúncio/privacidade e algumas redes corporativas costumam bloquear — na prática, o usuário viu a área do hero em branco/azul vazio, sem a foto do leão.
**Decisão:** baixar a imagem (mesma foto, licença Unsplash de uso comercial livre) e salvá-la em `site/assets/leao-hero.jpg` (182KB, otimizada), trocando o `url()` no CSS do hotlink para o caminho local.
**Motivo:** elimina a dependência de um domínio externo para um elemento visual central do site (resolve o débito técnico já registrado em D-11/TASKS.md), e corrige a falha real observada pelo usuário.

### D-12 — Elevação para nível UX/UI + reestruturação do time
**Contexto:** usuário disse explicitamente "não quero site simples, quero page nível UX e UI", e pediu visual mais sofisticado + animações/microinterações.
**Decisão:** adicionar ao site: barra de progresso de rolagem, botão flutuante de WhatsApp (aparece após o hero), microinterações em cards (elevação, ícone animado, seta que desliza no hover), underline animado no menu, zoom sutil de entrada no hero, e stagger animation nos cards ao rolar. Todas as animações respeitam `prefers-reduced-motion` (acessibilidade). No time, a Juliana passou de "Designer Visual" (só UI) para "UX/UI Designer" (UX + UI), e entrou o Diego (Growth & Analytics) para medir se as mudanças de UX realmente convertem melhor: sem isso, "nível UX" vira só opinião.
**Motivo:** pedido explícito do usuário. Mantém a stack vanilla (D-01): toda a sofisticação foi feita com CSS/JS puro, sem bibliotecas de animação, para não adicionar dependências/peso desnecessários.

### D-15 — Proibido travessão ligando frases no texto do site
**Contexto:** usuário pediu explicitamente para o Ricardo passar a conferir isso: "não quero mais aqueles travessões no site entre as palavras".
**Decisão:** nenhum texto visível do site pode usar travessão ("—" ou " - ") ligando duas partes de uma frase. Regra adicionada às responsabilidades do Ricardo (conferir antes de aprovar), da Maria (nunca escrever assim) e ao checklist da Camila (barrar na revisão final). Travessão em contexto diferente (ex: citação com autor, como em `<cite>— Helen Beatriz</cite>`) não é o alvo da regra, mas o time deve preferir alternativas quando possível.
**Motivo:** pedido explícito do usuário, sobre preferência de estilo de escrita.

### D-14 — Paleta oficial da marca + dados reais recebidos (revisa D-04)
**Contexto:** D-04 registrou uma paleta "inventada" como placeholder (`#101b2d`/`#16253d` navy + `#c9a24b` dourado) porque a peça de campanha original só trazia azul-marinho, branco e preto, sem um dourado definido. O usuário agora enviou a paleta oficial da marca e dados reais (CRC, anos de atuação, credencial) que substituem placeholders documentados em TASKS.md.
**Decisão:**
- Paleta placeholder substituída pela paleta oficial: Navy `#13273d`, Off-white `#ececed`, Preto `#000000`, Dourado `#dbae72`. `--gold-light` (`#e1bd8b`) e `--gold-dark` (`#725a3b`) recalculados a partir do novo dourado, mantendo o mesmo contraste AA (~5.5:1 sobre off-white, ~6.5:1 sobre branco) já validado para `.eyebrow` e outros textos sobre fundo claro. `--navy-800`/`--navy-700` recalculados proporcionalmente ao novo Navy, preservando a mesma hierarquia visual de profundidade já existente (header, cards, hero). Todos os `rgba()`/hex hardcoded que dependiam dos valores antigos (sombras, overlays, bordas) foram atualizados junto; sombras de elevação padronizadas em preto puro (`rgba(0,0,0,...)`), consistente com "Preto" agora ser uma cor oficial da marca.
- CRC placeholder (`[000000/O-0]`) substituído por `PR-082924/O-5` (Sobre + Footer).
- Anos de experiência placeholder (`[X] anos`) substituído por `5 anos`.
- Adicionada menção à pós-graduação em Reforma Tributária na seção Sobre, próxima ao início do parágrafo: diferencial forte dado o momento atual da área.
**Motivo:** dados reais fornecidos pelo cliente substituem placeholders/decisões provisórias anteriores. Nº de clientes atendidos e depoimentos reais continuam pendentes (ver TASKS.md): não foram fornecidos nesta rodada.

### D-16 — Seção Depoimentos removida (temporário)
**Contexto:** a seção usava 3 depoimentos fictícios como placeholder (ver TASKS.md) porque ainda não havia depoimentos reais de clientes.
**Decisão:** remover a seção `#depoimentos` inteira do `index.html` (conteúdo + os 2 links de menu "Depoimentos", no header e no footer). O CSS de `.testimonial-card`/`.stars` foi mantido no `style.css` (com um comentário marcando como reservado), para reativar rapidamente quando houver depoimentos reais.
**Motivo:** pedido explícito do usuário: preferiu não publicar depoimentos fictícios em vez de manter placeholders visíveis no site no ar. Reativar em fase futura (ver ROADMAP.md v1) assim que houver depoimentos reais de clientes.

### D-17 — Logo real da marca substitui o texto do brand
**Contexto:** o header, footer, selo do hero e monograma do CTA final usavam texto/monograma estilizado ("Helen Beatriz" em fonte script + "CONTADORA" + iniciais "H B") como placeholder, porque não havia um arquivo de logo real.
**Decisão:** o usuário forneceu a logo oficial em 3 versões (dourada, branca/"fantasma", navy — todas PNG 1536x1024 com fundo transparente). Antes de usar, removido o selo "AI-Generated" cravado nos pixels de cada uma e recortado o excesso de margem transparente (arquivos finais ~1420x410px). Aplicação:
- Header e footer (fundo navy): `<img>` com `logo-dourado.png` no lugar do bloco de texto `.brand__name`/`.brand__tag` — mais contraste que a versão branca sobre navy.
- Selo do hero (`.hero__badge`, sobre a foto do leão): trocado "H B" por `logo-dourado.png` em miniatura dentro do mesmo selo/pill.
- Monograma de fundo do CTA final (`.hero__monogram--small`): trocado "H B" por `logo-branco.png` em tamanho grande — a versão "quase fantasma" combina bem com o efeito de textura sutil de fundo que esse elemento sempre teve.
- `logo-azul.png` (navy sobre transparente) guardada como reserva para um futuro contexto de fundo claro (ver `site/assets/LEIA-ME.md`) — não usada em nenhum lugar do site ainda.
**Motivo:** pedido explícito do usuário, decisão de UX/UI (Juliana) antes da implementação (Felipe). A troca no selo do hero e no monograma do CTA final não foi visualmente conferida em navegador real (sem ferramenta de screenshot disponível nesta sessão) — usuário avisado para conferir e pedir reversão se não ficar bom.

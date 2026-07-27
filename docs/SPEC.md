# SPEC — Especificação Estruturada do Projeto

Landing page institucional para Helen Beatriz Contadora.

## 1. Objetivo

Criar uma página única (one-page) que posicione Helen Beatriz como **autoridade técnica** em contabilidade e Imposto de Renda, convertendo visitantes em contatos via WhatsApp/Instagram.

## 2. Público-alvo

| Segmento | Necessidade | Gatilho de conversão |
|---|---|---|
| Pessoa física | Declarar IR sem erro, não cair na malha fina | Urgência de prazo + segurança |
| Pequeno empresário / MEI | Abrir empresa, manter contabilidade em dia | Praticidade + redução de risco |
| Empresa já constituída | Consultoria tributária, folha de pagamento | Economia tributária + expertise |

## 3. Proposta de valor

"Domínio técnico e segurança para a sua vida fiscal e empresarial" — Helen resolve o que o cliente não tem tempo, conhecimento ou paciência para resolver sozinho, sem jargão e sem letra miúda.

## 4. Identidade visual (extraída da peça de campanha enviada)

| Elemento | Valor |
|---|---|
| Cor primária | Azul-marinho escuro (`#101b2d` / `#16253d`) |
| Cor de destaque (adicionada) | Dourado suave (`#c9a24b`) |
| Cor neutra | Branco / cinza claro |
| Fundo | Padrão diamantado sutil sobre azul-marinho |
| Logotipo | "Helen Beatriz" em fonte manuscrita/script |
| Subtítulo | "CONTADORA" — caixa alta, letras espaçadas |
| Tipografia de destaque | Sans-serif bold (headlines) |
| Tom de voz | Direto, técnico, confiante — sem ser arrogante |

## 5. Estrutura de seções (nesta ordem)

1. **Header/Nav** — logotipo + menu + CTA "Fale no WhatsApp" (sticky)
2. **Hero** — headline de autoridade + subheadline + CTA duplo (WhatsApp / Ver serviços) + coluna de Ciências Contábeis
3. **Sobre** — bio, credenciais (CRC, anos de experiência, pós-graduação), citação de posicionamento
4. **Diferenciais** — 6 cartões de autoridade (especialização, atendimento direto, atualização legal, sigilo, PF+PJ, prazo)
5. **Serviços** — 6 cartões (IR PF, abertura de empresa/MEI, contabilidade mensal PJ, consultoria tributária, folha/eSocial, regularização/malha fina), cada um com CTA de WhatsApp com mensagem pré-preenchida
6. **Banner de urgência (IR)** — evergreen, sem data fixa (ver Decisão D-03)
7. **Contato final** — CTA grande, WhatsApp + Instagram
8. **Footer** — logotipo, nav, redes sociais, CRC, copyright com ano dinâmico

Seção "Depoimentos" removida temporariamente (ver DECISIONS.md D-16) — reativar quando houver depoimentos reais de clientes (ver ROADMAP.md v1).

## 6. Requisitos funcionais

- Botões de WhatsApp abrem `wa.me` com número já preenchido e mensagem contextual por serviço
- Botão de Instagram abre `instagram.com/contadora.helenbeatriz`
- Menu mobile funcional (hamburger) abaixo de 768px
- Rolagem suave para âncoras internas
- Ano do copyright atualizado automaticamente via JS

## 7. Requisitos não funcionais

| Requisito | Critério |
|---|---|
| Performance | Sem frameworks pesados; carregar em <1s em 4G |
| Responsividade | Mobile-first, breakpoints em 480px / 768px / 1024px |
| Acessibilidade | Contraste AA, `alt` em imagens, HTML semântico, foco visível em navegação por teclado |
| SEO básico | `<title>`, meta description, headings hierárquicos (h1 único), Open Graph tags |
| Manutenibilidade | HTML/CSS/JS puros, sem build step — qualquer pessoa edita direto |

## 8. Fora de escopo (nesta versão)

- Formulário de contato próprio (decisão do cliente: só WhatsApp/Instagram)
- Blog / área de artigos
- Área logada do cliente
- Integração com CRM ou automações de captação

## 9. Métrica de sucesso

Cliques nos botões de WhatsApp/Instagram (a instrumentar futuramente com Google Analytics/Meta Pixel — ver ROADMAP).

## 10. Placeholders pendentes (ver TASKS.md)

Anos de experiência, número do CRC, foto da Helen, foto do leão em alta resolução, depoimentos reais.

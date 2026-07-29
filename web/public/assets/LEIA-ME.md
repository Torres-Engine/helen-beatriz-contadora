# Imagens

| Arquivo | Onde aparece | Status |
|---|---|---|
| `leao-hero.jpg` | Fundo do hero (topo do site) | ✅ Resolvido — auto-hospedada localmente |
| `foto-helen.jpg` | Seção "Sobre" | ✅ Resolvido |
| `logo-dourado.png` | Header, footer, selo do hero | ✅ Resolvido — logo oficial |
| `logo-branco.png` | Monograma de fundo do CTA final | ✅ Resolvido — logo oficial |
| `logo-azul.png` | Reserva para fundo claro (não usada ainda) | ✅ Pronta, aguardando contexto de uso |
| `favicon.png` | Aba do navegador | ✅ Resolvido — gerado a partir do caduceu contábil vetorizado sobre fundo navy (512x512) |
| `caduceu-contabil.svg` | Medalhão "Ciências Contábeis" no hero | ✅ Resolvido — versão vetorizada do PNG original, ver seção abaixo |
| `caduceu-contabil.png` | Não usado mais no site (mantido como fonte original) | Arquivo de referência — a versão em uso agora é o `.svg` |

## Logo oficial (3 versões — ver DECISIONS.md D-17)

A logo real da marca ("Helen Beatriz / contadora" em fonte script) veio em 3 versões, todas em PNG com fundo transparente, 1536x1024 originalmente. Antes de usar, o selo "AI-Generated" cravado nos pixels (canto superior direito) foi apagado e a margem transparente excedente foi recortada nas 3 (arquivos finais bem menores, ~1420x410px em média, fundo continua transparente).

- **`logo-dourado.png`** (dourado sobre transparente): usada no header, footer e selo do hero — mais contraste sobre fundo navy que a versão branca.
- **`logo-branco.png`** (bem clara/quase fantasma): usada como monograma de fundo do CTA final, onde o efeito "ghost" é justamente o objetivo (textura sutil atrás do título).
- **`logo-azul.png`** (navy sobre transparente): **reserva, não usada em nenhum lugar do site ainda**. Guardada para qualquer contexto de fundo claro que apareça no futuro (ex: material impresso, assinatura de e-mail, uma seção clara nova). Se um dia o site precisar de uma logo sobre fundo branco/off-white, é essa que deve ser usada — as versões dourada e branca não têm contraste suficiente sobre fundo claro.

## Foto do leão — auto-hospedada (ver DECISIONS.md D-13)

A foto real de leão em preto e branco (licença que permite uso comercial livre, sem atribuição obrigatória) está salva localmente em `site/assets/leao-hero.jpg` (182KB, otimizada), referenciada em `site/css/style.css` na regra `.hero__visual`. Não depende mais de hotlink externo — resolve o débito técnico registrado em D-11 (a versão anterior via CDN da Unsplash falhava para usuários com bloqueador de anúncios/privacidade).

- Foto: "a black and white photo of a lion" — Bro Takes Photos (@brotakesphotos)
- Licença: [Unsplash License](https://unsplash.com/license) (uso comercial livre)
- Página original: https://unsplash.com/photos/O6khX6-XozY

Se preferir trocar pela foto real do leão da própria campanha da Helen (assim que tiver uma versão em alta resolução), é só substituir o arquivo `site/assets/leao-hero.jpg` — o CSS não precisa mudar.

## Favicon
Resolvido — `favicon.png` (512x512px) gerado a partir de `caduceu-contabil.svg` (versão vetorizada) centralizado sobre um fundo navy sólido (`#13273d`), mesma paleta oficial da marca. Referenciado em `index.html` via `<link rel="icon">`.

## Símbolo "Ciências Contábeis" vetorizado (ver DECISIONS.md D-18)
O `caduceu-contabil.png` original (148x171px, contorno com 1 bit de transparência, sem antialiasing) ficava visivelmente serrilhado em telas de alta densidade (retina/celulares modernos), já que era exibido a 88px de largura mas precisava de nitidez em telas com pixel ratio 2x-3x. Foi vetorizado (traçado como SVG de curvas suaves a partir do PNG original) e o resultado, `caduceu-contabil.svg`, substituiu o PNG tanto no medalhão do hero (`index.html`) quanto na geração do favicon — fica nítido em qualquer resolução/zoom, sem perda de qualidade. O PNG original foi mantido na pasta como referência, mas não é mais referenciado em nenhum lugar do código.

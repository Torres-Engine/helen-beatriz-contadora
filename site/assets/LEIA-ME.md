# Imagens

| Arquivo | Onde aparece | Status |
|---|---|---|
| `leao-hero.jpg` | Fundo do hero (topo do site) | ✅ Resolvido — auto-hospedada localmente |
| `foto-helen.jpg` | Seção "Sobre" | ✅ Resolvido |
| `logo-dourado.png` | Header, footer, selo do hero | ✅ Resolvido — logo oficial |
| `logo-branco.png` | Monograma de fundo do CTA final | ✅ Resolvido — logo oficial |
| `logo-azul.png` | Reserva para fundo claro (não usada ainda) | ✅ Pronta, aguardando contexto de uso |
| `favicon.png` | Aba do navegador | ⏳ Pendente |

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
Ainda pendente — quando tiver:
- `favicon.png`: 512x512px (quadrado).

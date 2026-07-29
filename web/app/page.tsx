import Image from "next/image";
import Header from "./components/Header";
import WhatsappFloat from "./components/WhatsappFloat";
import BackToTop from "./components/BackToTop";

const WHATSAPP_BASE = "https://wa.me/5541999639108";
const wa = (text: string) => `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;

const diferenciais = [
  {
    icon: "fa-solid fa-file-invoice-dollar",
    title: "Especialização em IR",
    text: "Anos dedicados a declarações de Imposto de Renda, com atenção redobrada a cada detalhe e foco em identificar toda restituição a que você tem direito.",
  },
  {
    icon: "fa-solid fa-comments",
    title: "Atendimento direto",
    text: "Você fala direto com a contadora responsável pelo seu caso, sem intermediários.",
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Atualização constante",
    text: "Acompanhamento de cada mudança na legislação para proteger seu CPF e seu CNPJ.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Sigilo e segurança",
    text: "Seus dados e documentos tratados com confidencialidade total.",
  },
  {
    icon: "fa-solid fa-building",
    title: "Pessoa física e jurídica",
    text: "Estrutura completa para pessoa física e para empresas de todos os portes.",
  },
  {
    icon: "fa-regular fa-clock",
    title: "Prazo é prioridade",
    text: "Organização que evita multas, pendências e dor de cabeça de última hora.",
  },
];

const servicos = [
  {
    icon: "fa-solid fa-file-invoice-dollar",
    title: "Imposto de Renda Pessoa Física",
    text: "Declaração completa, revisão de malha fina e restituição otimizada.",
    wa: wa("Olá, Helen! Quero saber mais sobre Imposto de Renda Pessoa Física."),
  },
  {
    icon: "fa-solid fa-building-circle-check",
    title: "Abertura de Empresa / MEI",
    text: "CNPJ, enquadramento tributário ideal e registro completo nos órgãos.",
    wa: wa("Olá, Helen! Quero abrir uma empresa/MEI."),
  },
  {
    icon: "fa-solid fa-file-signature",
    title: "Contabilidade Mensal PJ",
    text: "Escrituração, obrigações fiscais e guias sempre em dia.",
    wa: wa("Olá, Helen! Quero saber sobre contabilidade mensal para minha empresa."),
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Consultoria Tributária",
    text: "Planejamento estratégico para reduzir carga tributária dentro da lei.",
    wa: wa("Olá, Helen! Quero uma consultoria tributária."),
  },
  {
    icon: "fa-solid fa-users",
    title: "Folha de Pagamento e eSocial",
    text: "Admissões, rescisões, encargos e obrigações trabalhistas em dia.",
    wa: wa("Olá, Helen! Quero saber sobre folha de pagamento e eSocial."),
  },
  {
    icon: "fa-solid fa-triangle-exclamation",
    title: "Regularização e Malha Fina",
    text: "Resolução de pendências e regularização junto à Receita Federal.",
    wa: wa("Olá, Helen! Estou com uma pendência na Receita Federal."),
  },
];

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* ===================== HERO ===================== */}
        <section
          className="relative overflow-hidden bg-navy-900 py-16 text-off-white sm:py-24"
          id="topo"
        >
          <div className="mx-auto grid max-w-[1160px] gap-12 px-6 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[2px] text-gold">
                Contabilidade com autoridade
              </p>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl">
                Domínio técnico e segurança para a sua vida fiscal e empresarial.
              </h1>
              <p className="mb-8 max-w-xl text-lg text-off-white/85">
                Helen Beatriz é contadora especializada em Imposto de Renda, abertura de
                empresas e gestão contábil para pessoas físicas e jurídicas. Decisões
                seguras começam com quem domina o assunto.
              </p>

              <div className="mb-6 flex flex-wrap gap-4">
                <a
                  className="flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-light to-gold px-7 py-3.5 font-bold text-navy-900 transition-transform hover:-translate-y-0.5"
                  target="_blank"
                  rel="noopener"
                  href={wa("Olá, Helen! Vi seu site e gostaria de falar sobre contabilidade.")}
                >
                  <i className="fa-brands fa-whatsapp" /> Falar com a Helen agora
                </a>
                <a
                  className="flex items-center gap-2 rounded-full border-2 border-white px-7 py-3.5 font-bold text-white transition-colors hover:bg-white hover:text-navy-900"
                  href="#servicos"
                >
                  Ver serviços
                </a>
              </div>

              <p className="text-sm text-off-white/70">
                Atendimento personalizado &middot; Sigilo total &middot; Atualização
                constante na legislação
              </p>
            </div>

            <aside className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <p className="text-sm font-bold uppercase tracking-[2px] text-gold">
                Ciências Contábeis
              </p>
              <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-gold/40 bg-navy-800">
                <Image
                  src="/assets/caduceu-contabil.svg"
                  alt="Símbolo internacional das Ciências Contábeis"
                  width={72}
                  height={72}
                />
              </div>
              <span className="h-px w-16 bg-white/20" aria-hidden="true" />
              <p className="italic text-off-white/80">
                &ldquo;A contabilidade é a linguagem dos negócios.&rdquo;
              </p>
            </aside>
          </div>
        </section>

        {/* ===================== SOBRE ===================== */}
        <section className="py-16 sm:py-24" id="sobre">
          <div className="mx-auto grid max-w-[1160px] items-center gap-12 px-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/assets/foto-helen.jpg"
                alt="Helen Beatriz, contadora"
                width={600}
                height={720}
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[2px] text-gold-dark">
                Sobre
              </p>
              <h2 className="mb-6 text-3xl font-extrabold sm:text-4xl">
                Quem cuida da sua contabilidade importa.
              </h2>
              <p className="mb-4 text-navy-700">
                Com <strong>5 anos</strong> de atuação e pós-graduação em{" "}
                <strong>Reforma Tributária</strong>, Helen Beatriz construiu sua carreira
                ajudando pessoas físicas e empresas a tomarem decisões financeiras e
                tributárias com clareza e segurança. Registrada no{" "}
                <strong>CRC PR-082924/O-5</strong>, Helen combina domínio técnico da
                legislação fiscal brasileira com um atendimento próximo, direto e sem
                jargões desnecessários.
              </p>
              <p className="mb-6 text-navy-700">
                Seu compromisso é simples: transformar obrigações contábeis em vantagem
                estratégica para quem confia no seu trabalho.
              </p>
              <blockquote className="border-l-4 border-gold pl-5 italic text-navy-900">
                &ldquo;Contabilidade não é burocracia. É estratégia.&rdquo;
                <cite className="mt-2 block text-sm not-italic text-navy-700">
                  — Helen Beatriz
                </cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ===================== DIFERENCIAIS ===================== */}
        <section className="bg-off-white py-16 sm:py-24" id="diferenciais">
          <div className="mx-auto max-w-[1160px] px-6">
            <p className="mb-3 text-center text-sm font-bold uppercase tracking-[2px] text-gold-dark">
              Diferenciais
            </p>
            <h2 className="mx-auto mb-14 max-w-xl text-center text-3xl font-extrabold sm:text-4xl">
              Por que clientes confiam no trabalho da Helen
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {diferenciais.map((d) => (
                <article
                  key={d.title}
                  className="rounded-xl bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <i className={`${d.icon} mb-4 block text-3xl text-gold`} />
                  <h3 className="mb-2 text-lg font-bold">{d.title}</h3>
                  <p className="text-sm text-navy-700">{d.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== SERVIÇOS ===================== */}
        <section className="py-16 sm:py-24" id="servicos">
          <div className="mx-auto max-w-[1160px] px-6">
            <p className="mb-3 text-center text-sm font-bold uppercase tracking-[2px] text-gold-dark">
              Serviços
            </p>
            <h2 className="mx-auto mb-14 max-w-xl text-center text-3xl font-extrabold sm:text-4xl">
              Contabilidade completa para PF e PJ
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicos.map((s) => (
                <article
                  key={s.title}
                  className="flex flex-col rounded-xl border border-navy-900/10 p-8 transition-shadow hover:shadow-lg"
                >
                  <i className={`${s.icon} mb-4 text-2xl text-navy-900`} />
                  <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
                  <p className="mb-5 flex-1 text-sm text-navy-700">{s.text}</p>
                  <a
                    target="_blank"
                    rel="noopener"
                    href={s.wa}
                    className="inline-flex items-center gap-2 text-sm font-bold text-gold-dark transition-transform hover:translate-x-1"
                  >
                    Saber mais <i className="fa-solid fa-arrow-right" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== BANNER IR (evergreen — ver DECISIONS.md D-03) ===================== */}
        <section className="bg-navy-800 py-16 text-off-white">
          <div className="mx-auto flex max-w-[1160px] flex-col items-center gap-8 px-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl">
                Imposto de Renda: prazo é prazo.
              </h2>
              <p className="max-w-xl text-off-white/85">
                Todos os anos, milhares de pessoas perdem o prazo, caem na malha fina ou
                pagam mais imposto do que deveriam por falta de orientação. Fale agora com
                quem acompanha os prazos de perto.
              </p>
            </div>
            <a
              className="flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-br from-gold-light to-gold px-7 py-3.5 font-bold text-navy-900 transition-transform hover:-translate-y-0.5"
              target="_blank"
              rel="noopener"
              href={wa("Olá, Helen! Quero verificar meu prazo do Imposto de Renda.")}
            >
              <i className="fa-brands fa-whatsapp" /> Verificar meu prazo
            </a>
          </div>
        </section>

        {/* ===================== CONTATO FINAL ===================== */}
        <section className="relative overflow-hidden bg-navy-900 py-16 text-center text-off-white sm:py-24" id="contato">
          <div className="mx-auto max-w-[720px] px-6">
            <Image
              className="mx-auto mb-6 h-10 w-auto opacity-[0.14]"
              src="/assets/logo-branco.png"
              alt=""
              aria-hidden="true"
              width={200}
              height={58}
            />
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
              Vamos cuidar da sua contabilidade juntos?
            </h2>
            <p className="mb-8 text-off-white/85">
              Fale agora mesmo com a Helen Beatriz e tire suas dúvidas sem compromisso.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                className="flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-light to-gold px-7 py-3.5 font-bold text-navy-900 transition-transform hover:-translate-y-0.5"
                target="_blank"
                rel="noopener"
                href={wa("Olá, Helen! Vi seu site e gostaria de falar sobre contabilidade.")}
              >
                <i className="fa-brands fa-whatsapp" /> (41) 9.9963-9108
              </a>
              <a
                className="flex items-center gap-2 rounded-full border-2 border-white px-7 py-3.5 font-bold text-white transition-colors hover:bg-white hover:text-navy-900"
                target="_blank"
                rel="noopener"
                href="https://instagram.com/contadora.helenbeatriz"
              >
                <i className="fa-brands fa-instagram" /> @contadora.helenbeatriz
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-navy-900 text-off-white">
        <div className="mx-auto flex max-w-[1160px] flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
          <Image
            src="/assets/logo-dourado.png"
            alt="Helen Beatriz Contadora"
            width={140}
            height={40}
            className="h-9 w-auto"
          />

          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <a
              target="_blank"
              rel="noopener"
              href="https://wa.me/5541999639108"
              aria-label="WhatsApp"
              className="text-lg transition-colors hover:text-gold"
            >
              <i className="fa-brands fa-whatsapp" />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://instagram.com/contadora.helenbeatriz"
              aria-label="Instagram"
              className="text-lg transition-colors hover:text-gold"
            >
              <i className="fa-brands fa-instagram" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-off-white/60">
          <p>
            CRC PR-082924/O-5 &middot; &copy; {new Date().getFullYear()} Helen Beatriz
            Contadora. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <WhatsappFloat />
      <BackToTop />
    </>
  );
}

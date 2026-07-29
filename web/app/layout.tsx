import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Helen Beatriz | Contadora, Autoridade em Imposto de Renda e Contabilidade",
  description:
    "Helen Beatriz, contadora especializada em Imposto de Renda, abertura de empresas, contabilidade mensal e consultoria tributária para pessoas físicas e jurídicas.",
  openGraph: {
    title: "Helen Beatriz | Contadora",
    description: "Domínio técnico e segurança para a sua vida fiscal e empresarial.",
    type: "website",
    images: ["/assets/logo-dourado.png"],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Helen Beatriz | Contadora",
    description: "Domínio técnico e segurança para a sua vida fiscal e empresarial.",
    images: ["/assets/logo-dourado.png"],
  },
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "Helen Beatriz Contadora",
              description:
                "Contadora especializada em Imposto de Renda, abertura de empresas, contabilidade mensal e consultoria tributária para pessoas físicas e jurídicas.",
              image: "/assets/logo-dourado.png",
              telephone: "+5541999639108",
              url: "",
              sameAs: ["https://instagram.com/contadora.helenbeatriz"],
              areaServed: "BR",
            }),
          }}
        />
      </head>
      <body className="font-sans bg-white text-navy-900">{children}</body>
    </html>
  );
}

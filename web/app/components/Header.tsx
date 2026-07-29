"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP_HEADER_LINK =
  "https://wa.me/5541999639108?text=Ol%C3%A1%2C%20Helen!%20Vi%20seu%20site%20e%20gostaria%20de%20falar%20sobre%20contabilidade.";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] bg-navy-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between gap-4 px-6 py-4">
        <a href="#topo" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/assets/logo-dourado.png"
            alt="Helen Beatriz Contadora"
            width={160}
            height={46}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium text-off-white">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden h-9 w-9 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white hover:text-navy-900 sm:flex"
            target="_blank"
            rel="noopener"
            href="https://instagram.com/contadora.helenbeatriz"
            aria-label="Instagram da Helen Beatriz Contadora"
          >
            <i className="fa-brands fa-instagram" />
          </a>
          <a
            className="hidden items-center gap-2 rounded-full bg-gradient-to-br from-gold-light to-gold px-5 py-2 text-sm font-bold text-navy-900 transition-transform hover:-translate-y-0.5 sm:flex"
            target="_blank"
            rel="noopener"
            href={WHATSAPP_HEADER_LINK}
          >
            <i className="fa-brands fa-whatsapp" /> Fale no WhatsApp
          </a>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-navy-900 transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6 text-off-white">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-base font-medium transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2 flex gap-3">
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white"
              target="_blank"
              rel="noopener"
              href="https://instagram.com/contadora.helenbeatriz"
              aria-label="Instagram da Helen Beatriz Contadora"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-gold-light to-gold px-5 py-2.5 text-sm font-bold text-navy-900"
              target="_blank"
              rel="noopener"
              href={WHATSAPP_HEADER_LINK}
            >
              <i className="fa-brands fa-whatsapp" /> Fale no WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

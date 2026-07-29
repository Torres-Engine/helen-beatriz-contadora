"use client";

import { useEffect, useState } from "react";

export default function WhatsappFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      className={`fixed right-6 bottom-6 z-[150] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      href="https://wa.me/5541999639108?text=Ol%C3%A1%2C%20Helen!%20Vi%20seu%20site%20e%20gostaria%20de%20falar%20sobre%20contabilidade."
    >
      <i className="fa-brands fa-whatsapp relative z-10" />
      {visible && (
        <span
          aria-hidden="true"
          className="absolute inset-[-6px] rounded-full border-2 border-[#25D366] animate-whatsapp-ring"
        />
      )}
    </a>
  );
}

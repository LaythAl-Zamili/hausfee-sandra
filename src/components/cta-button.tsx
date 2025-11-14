import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function CTAButton() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center md:hidden">
      <div className="pointer-events-auto rounded-full bg-white/95 px-3 py-2 shadow-lg backdrop-blur">
        <div className="flex items-center gap-3 text-[var(--brand)]">
          {/* Call button */}
          <Link
            href="tel:01639512158"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand)] text-white"
          >
            <Phone className="h-4 w-4" />
          </Link>

          {/* WhatsApp button */}
          <a
            href="https://wa.me/491639512158"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white"
          >
            <MessageCircle className="h-4 w-4" />
          </a>

          <span className="text-xs font-semibold text-neutral-700">
            Anruf oder WhatsApp
          </span>
        </div>
      </div>
    </div>
  );
}

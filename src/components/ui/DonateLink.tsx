import type { AnchorHTMLAttributes, ReactNode } from "react";
import { siteConfig } from "@/config/site";

type DonateLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode };

/** Every donation CTA routes through the configurable `siteConfig.donationUrl`. */
export function DonateLink({ children, ...rest }: DonateLinkProps) {
  const external = /^https?:\/\//.test(siteConfig.donationUrl);
  return (
    <a
      href={siteConfig.donationUrl}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}

const paths: Record<string, string> = {
  facebook: "M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v9h4v-9h3l1-4h-4V9c0-.6.4-1 1-1z",
  twitter: "M4 4l7.2 9.6L4.3 20H6l6-5.6 4.2 5.6H20l-7.6-10.1L18.9 4h-1.7l-5.5 5.1L8 4H4z",
  instagram:
    "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm0 2a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H7zm5 3.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM17.3 5.7a1 1 0 110 2 1 1 0 010-2z",
  linkedin:
    "M5 3a2 2 0 110 4 2 2 0 010-4zM3 9h4v12H3V9zm6 0h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9V9z",
  youtube:
    "M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15V9l5.2 3L10 15z",
};

export function SocialIcon({ name, className = "h-3.5 w-3.5" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d={paths[name] ?? ""} fillRule="evenodd" />
    </svg>
  );
}

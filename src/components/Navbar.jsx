import { useState, useEffect } from "react";
import { useLang } from "../context/LangContext";
import doveLogo from "../assets/doveLogo.png";

export default function Navbar() {
  const { lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links =
    lang === "en"
      ? [
          { label: "Gallery", href: "#gallery" },
          { label: "What We Teach", href: "#teach" },
          { label: "Find Us", href: "#map" },
          { label: "Contact", href: "#contact" },
        ]
      : [
          { label: "갤러리", href: "#gallery" },
          { label: "성경강연회 순서", href: "#teach" },
          { label: "오시는 길", href: "#map" },
          { label: "문의", href: "#contact" },
        ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(26,93,200,0.1)" : "none",
        transition: "all 0.35s ease",
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          color: scrolled ? "var(--navy)" : "#fff",
          textDecoration: "none",
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: "1.25rem",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          transition: "color 0.3s",
        }}
      >
        <img
          src={doveLogo}
          alt="SVBC Logo"
          style={{ height: "36px", width: "auto" }}
        />
        {lang === "en"
          ? "SOUTHERN VIRGINIA BAPTIST CHURCH"
          : "SOUTHERN VIRGINIA BAPTIST CHURCH"}
      </a>

      {/* Desktop links */}
      <div
        style={{ display: "flex", alignItems: "center", gap: "32px" }}
        className="nav-desktop"
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: scrolled ? "var(--text-soft)" : "rgba(255,255,255,0.85)",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
              letterSpacing: "0.06em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.color = scrolled ? "var(--blue)" : "#fff")
            }
            onMouseLeave={(e) =>
              (e.target.style.color = scrolled
                ? "var(--text-soft)"
                : "rgba(255,255,255,0.85)")
            }
          >
            {l.label}
          </a>
        ))}

        <button
          onClick={toggle}
          style={{
            background: scrolled ? "var(--chip-bg)" : "rgba(255,255,255,0.15)",
            border: scrolled
              ? "1px solid var(--chip-border)"
              : "1px solid rgba(255,255,255,0.3)",
            borderRadius: "20px",
            color: scrolled ? "var(--blue)" : "#fff",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8rem",
            fontWeight: "600",
            padding: "6px 18px",
            cursor: "pointer",
            transition: "all 0.25s",
            letterSpacing: "0.04em",
          }}
        >
          {lang === "en" ? "한국어" : "English"}
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-hamburger"
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: scrolled ? "var(--navy)" : "#fff",
          fontSize: "1.4rem",
          cursor: "pointer",
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            background: "rgba(255,255,255,0.98)",
            padding: "16px 40px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            borderBottom: "1px solid var(--border)",
            backdropFilter: "blur(16px)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--text-soft)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              toggle();
              setMenuOpen(false);
            }}
            style={{
              background: "var(--chip-bg)",
              border: "1px solid var(--chip-border)",
              borderRadius: "20px",
              color: "var(--blue)",
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "0.9rem",
              fontWeight: "600",
              padding: "8px 20px",
              cursor: "pointer",
              alignSelf: "flex-start",
            }}
          >
            {lang === "en" ? "한국어" : "English"}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

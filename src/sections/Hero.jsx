import { useLang } from "../context/LangContext";
import { text } from "../content";

export default function Hero() {
  const { lang } = useLang();
  const t = text[lang];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #071840, #0d2e6e, #1a5dc8, #0d3b8e, #071840)",
        backgroundSize: "300% 300%",
        animation: "gradientShift 12s ease infinite",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Decorative grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(168,200,248,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(168,200,248,0.05) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Animated orbs */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "-8%",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(74,144,217,0.25) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          animation: "orbFloat 9s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(26,93,200,0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          animation: "orbFloat2 11s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "20%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(100,160,240,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          animation: "orbFloat 13s ease-in-out infinite 2s",
        }}
      />

      {/* Floating chips — hidden on mobile */}
      <div
        className="hero-chip"
        style={chip("#e8f0fe", "#1a5dc8", "top:18%", "left:5%")}
      >
        {lang === "en"
          ? "What is life after death?"
          : "죽음 이후엔 무엇이 있을까?"}
      </div>
      <div
        className="hero-chip"
        style={chip("#fff", "#4a90d9", "top:30%", "right:5%")}
      >
        {lang === "en"
          ? "Scientific evidence in the Bible"
          : "성경 속 과학적 증거"}
      </div>
      <div
        className="hero-chip"
        style={chip(
          "rgba(255,255,255,0.1)",
          "rgba(255,255,255,0.8)",
          "bottom:28%",
          "left:4%",
          true,
        )}
      >
        {lang === "en" ? "Why learn the Bible?" : "왜 성경을 배우는가?"}
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding:
            "clamp(80px,12vw,120px) clamp(16px,5vw,32px) clamp(40px,8vw,80px)",
          maxWidth: "860px",
          width: "100%",
          animation: "fadeUp 0.9s ease both",
        }}
      >
        {/* Date — no box, plain text */}
        <div style={{ marginBottom: "28px" }}>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(200,220,255,0.7)",
              margin: "0 0 6px",
            }}
          >
            {lang === "en" ? "Bible Seminar" : "성경강연회"}
          </p>
          <p
            style={{
              fontFamily: "'DIN Pro', 'Barlow', 'Arial Narrow', sans-serif",
              fontSize: "clamp(1.6rem, 5vw, 2.6rem)",
              fontWeight: 500,
              letterSpacing: "0.06em",
              color: "#fff",
              margin: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            03.10 – 03.15.2026,
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.2rem",
              fontWeight: 500,
              color: "rgba(168,200,248,0.8)",
              margin: "6px 0 0",
              letterSpacing: "-0.04em",
            }}
          >
            {lang === "en" ? "Mon – Sat · 7:00 PM" : "월 – 토 · 오후 7:00"}
          </p>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'DNFForgedBlade', Georgia, serif",
            fontSize: "clamp(2rem, 6vw, 4.2rem)",
            fontWeight: 400,
            color: "#fff",
            lineHeight: 1.1,
            margin: "0 0 20px",
            letterSpacing: "-0.01em",
          }}
        >
          {lang === "en" ? (
            <>
              We Invite You to the
              <br />
              <em style={{ color: "#a8c8f8" }}>Bible Seminar</em>
              <br />
              for Your Soul
            </>
          ) : (
            <>
              남버지니아침례교회
              <br />
              <em style={{ color: "#a8c8f8" }}>성경강연회</em>에<br />
              당신을 초대합니다
            </>
          )}
        </h1>

        {/* Thin rule */}
        <div
          style={{
            width: "48px",
            height: "1px",
            background: "rgba(168,200,248,0.5)",
            margin: "24px auto",
          }}
        />

        {/* Subtext */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            color: "rgba(200,220,255,0.8)",
            lineHeight: 1.75,
            maxWidth: "520px",
            margin: "0 auto 40px",
          }}
        >
          {t.heroIntro}
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          <a
            href="#teach"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#fff",
              color: "var(--blue)",
              textDecoration: "none",
              padding: "13px 32px",
              borderRadius: "40px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.88rem",
              letterSpacing: "0.06em",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
            }}
          >
            {t.heroBtn1}
            <span style={{ fontSize: "0.9rem" }}>↗</span>
          </a>

          <a
            href="https://www.youtube.com/@jbchsva"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              textDecoration: "none",
              padding: "13px 32px",
              borderRadius: "40px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.88rem",
              letterSpacing: "0.06em",
              border: "1px solid rgba(255,255,255,0.25)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              e.currentTarget.style.transform = "";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            {t.heroBtn2}
          </a>
        </div>

        {/* YouTube video preview */}
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              background: "#000",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/533-II9cXVA?rel=0"
              title="Bible Seminar Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
          <div
            style={{
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ color: "#ff4444", fontSize: "0.75rem" }}>▶</span>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.06em",
              }}
            >
              {lang === "en"
                ? "Last Bible Seminar — Watch video"
                : "지난 성경강연회 영상 보기"}
            </span>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          style={{
            marginTop: "48px",
            color: "rgba(168,200,248,0.5)",
            fontSize: "1.2rem",
            animation: "bounce 2s ease infinite",
          }}
        >
          ↓
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-24px) scale(1.04); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(18px) scale(0.97); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50%       { transform: translateY(7px); opacity: 0.9; }
        }
        @media (max-width: 768px) {
          .hero-chip { display: none !important; }
        }
        @media (max-width: 480px) {
          #hero .cta-row { flex-direction: column; align-items: stretch; }
        }
      `}</style>
    </section>
  );
}

function chip(bg, color, top_or_bottom, side, dark = false) {
  const pos = top_or_bottom.startsWith("top")
    ? { top: top_or_bottom.split(":")[1] }
    : { bottom: top_or_bottom.split(":")[1] };
  const sideKey = side.startsWith("left") ? "left" : "right";
  return {
    position: "absolute",
    ...pos,
    [sideKey]: side.split(":")[1],
    background: bg,
    color: color,
    border: dark
      ? "1px solid rgba(255,255,255,0.15)"
      : "1px solid rgba(26,93,200,0.12)",
    borderRadius: "30px",
    padding: "7px 18px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.78rem",
    fontWeight: 500,
    letterSpacing: "0.06em",
    backdropFilter: "blur(8px)",
    animation: "fadeUp 1.2s ease both",
    animationDelay: "0.4s",
    zIndex: 3,
  };
}

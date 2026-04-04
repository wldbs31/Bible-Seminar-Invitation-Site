import { useLang } from "../context/LangContext";
import { text } from "../content";

// Placeholder image names per day
const dayImages = [
  "teach-day1.jpg",
  "teach-day2.jpg",
  "teach-day3.jpg",
  "teach-day4.jpg",
  "teach-day5.jpg",
  "teach-day6.jpg",
];

const dayAccents = [
  "#1a5dc8",
  "#2e6fd4",
  "#4a7fd8",
  "#1a5dc8",
  "#2e6fd4",
  "#4a7fd8",
];

export default function WhatWeTeach() {
  const { lang } = useLang();
  const t = text[lang];

  return (
    <section
      id="teach"
      style={{
        background: "var(--cream)",
        padding: "110px 40px",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ marginBottom: "64px" }}>
          <p style={labelSt}>Bible Seminar</p>
          <h2 style={headSt}>
            {lang === "en" ? (
              <>
                <em style={{ color: "var(--blue-mid)" }}>What We</em> Teach
              </>
            ) : (
              <>
                <em style={{ color: "var(--blue-mid)" }}>성경강연회</em> 순서
              </>
            )}
          </h2>
          <div
            style={{
              width: "48px",
              height: "1px",
              background: "var(--blue-mid)",
              marginTop: "16px",
              opacity: 0.4,
            }}
          />
          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "0.95rem",
              color: "var(--text-soft)",
              lineHeight: 1.75,
              marginTop: "16px",
              maxWidth: "560px",
              whiteSpace: "pre-line",
            }}
          >
            {t.teachIntro}
          </p>
        </div>

        {/* Timeline — vertical line + alternating cards */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "var(--border)",
              transform: "translateX(-50%)",
            }}
          />

          {t.days.map((d, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: isLeft ? "row" : "row-reverse",
                  alignItems: "flex-start",
                  gap: "0",
                  marginBottom: "40px",
                  position: "relative",
                }}
              >
                {/* Card half */}
                <div
                  style={{
                    width: "calc(50% - 28px)",
                    padding: isLeft ? "0 32px 0 0" : "0 0 0 32px",
                  }}
                >
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "18px",
                      border: "1px solid var(--border)",
                      overflow: "hidden",
                      boxShadow: "0 2px 12px rgba(26,93,200,0.06)",
                      transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 16px 40px rgba(26,93,200,0.13)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.boxShadow =
                        "0 2px 12px rgba(26,93,200,0.06)";
                    }}
                  >
                    {/* Image area */}
                    <div
                      style={{
                        aspectRatio: "16/9",
                        overflow: "hidden",
                        background: "linear-gradient(135deg,#e8f0fe,#c8dafc)",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}${dayImages[i]}`}
                        alt={d.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />

                      {/* Day badge */}
                      <div
                        style={{
                          position: "absolute",
                          top: "12px",
                          [isLeft ? "right" : "left"]: "12px",
                          background: dayAccents[i],
                          color: "#fff",
                          borderRadius: "20px",
                          padding: "4px 14px",
                          fontFamily: "'DM Sans',sans-serif",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          boxShadow: "0 2px 8px rgba(26,93,200,0.3)",
                        }}
                      >
                        {d.day}
                      </div>
                    </div>

                    {/* Text */}
                    <div style={{ padding: "20px 22px 22px" }}>
                      <h3
                        style={{
                          fontFamily:
                            "'DNFForgedBlade', 'Hahmlet', Georgia,serif",
                          fontSize: "1.05rem",
                          fontWeight: 400,
                          color: "var(--navy)",
                          margin: "0 0 8px",
                          lineHeight: 1.35,
                        }}
                      >
                        {d.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'DM Sans',sans-serif",
                          fontSize: "0.83rem",
                          color: "var(--text-soft)",
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {d.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "52px",
                    transform: "translateX(-50%)",
                    width: "14px",
                    height: "14px",
                    background: dayAccents[i],
                    borderRadius: "50%",
                    border: "3px solid var(--cream)",
                    boxShadow: `0 0 0 2px ${dayAccents[i]}55`,
                    zIndex: 2,
                  }}
                />

                {/* Empty half */}
                <div style={{ width: "calc(50% - 28px)" }} />
              </div>
            );
          })}
        </div>

        {/* YouTube row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            background: "var(--cream)",
            borderRadius: "18px",
            padding: "28px 36px",
            border: "1px solid var(--border)",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'DNFForgedBlade', 'Hahmlet', Georgia,serif",
                fontSize: "1.2rem",
                color: "var(--navy)",
                margin: "0 0 4px",
              }}
            >
              {lang === "en"
                ? "Watch our Seminar online"
                : "유튜브에서 전도집회 영상 보기"}
            </p>
            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                margin: 0,
              }}
            >
              {lang === "en"
                ? "Full sermons available on YouTube"
                : "전체 전도집회를 유튜브에서 시청하실 수 있습니다"}
            </p>
          </div>
          <a
            href="https://www.youtube.com/@jbchsva"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#ff0000",
              color: "#fff",
              textDecoration: "none",
              padding: "11px 28px",
              borderRadius: "40px",
              fontFamily: "'DM Sans',sans-serif",
              fontWeight: 600,
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#cc0000";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ff0000";
              e.currentTarget.style.transform = "";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            {t.galleryYoutube} ↗
          </a>
        </div>
      </div>

      <style>{`
        @media(max-width:700px){
          #teach > div > div > div[style*="display:flex"] {
            flex-direction: column !important;
          }
          #teach > div > div > div > div:first-child {
            width: 100% !important;
            padding: 0 !important;
          }
          #teach > div > div > div > div:last-child { display:none; }
          #teach [style*="left:50%"][style*="width:14px"] { left: 12px !important; }
          #teach [style*="left:calc(50%"] { display:none; }
        }
      `}</style>
    </section>
  );
}

const labelSt = {
  fontFamily: "'DM Sans',sans-serif",
  fontSize: "0.72rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--blue-mid)",
  margin: "0 0 10px",
  fontWeight: 600,
};
const headSt = {
  fontFamily: "'DNFForgedBlade', 'Hahmlet', Georgia,serif",
  fontSize: "clamp(2rem,4vw,3rem)",
  fontWeight: 400,
  color: "var(--navy)",
  margin: 0,
  lineHeight: 1.1,
};

import { useState } from "react";
import { useLang } from "../context/LangContext";
import { text } from "../content";
import { useReveal } from "../hooks/useReveal";

export default function Gallery() {
  const { lang } = useLang();
  const t = text[lang];
  const [tab, setTab] = useState("main");
  const ref = useReveal();

  const mainPhotos = [1, 2, 3, 4, 5, 6];
  const elemPhotos = [1, 2, 3, 4];
  const photos = tab === "main" ? mainPhotos : elemPhotos;

  return (
    <section
      id="gallery"
      style={{
        background: "var(--white)",
        padding: "110px 40px",
      }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        {/* Section label */}
        <div ref={ref} className="reveal" style={{ marginBottom: "52px" }}>
          <p style={labelSt}>Gallery</p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <h2 style={headSt}>
              {lang === "en" ? (
                <>
                  <em style={{ color: "var(--blue-mid)" }}>Bible Seminar</em>
                  <br />
                  Gallery
                </>
              ) : (
                <>
                  <em style={{ color: "var(--blue-mid)" }}>성경강연회</em>
                  <br />
                  갤러리
                </>
              )}
            </h2>
            {/* Tabs as chips */}
            <div
              ref={ref}
              className="reveal"
              style={{ display: "flex", gap: "8px" }}
            >
              {[
                { key: "main", label: t.galleryTab1 },
                { key: "elem", label: t.galleryTab2 },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  style={{
                    padding: "9px 22px",
                    borderRadius: "30px",
                    cursor: "pointer",
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    transition: "all 0.2s",
                    background: tab === key ? "var(--blue)" : "var(--chip-bg)",
                    border:
                      tab === key
                        ? "1px solid var(--blue)"
                        : "1px solid var(--chip-border)",
                    color: tab === key ? "#fff" : "var(--blue)",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div
            style={{
              width: "48px",
              height: "1px",
              background: "var(--blue-mid)",
              marginTop: "20px",
              opacity: 0.4,
            }}
          />
        </div>

        {/* Description chip */}
        <div
          ref={ref}
          className="reveal"
          style={{
            display: "inline-flex",
            alignItems: "flex-start",
            gap: "10px",
            background: "var(--blue-light)",
            borderRadius: "14px",
            padding: "14px 20px",
            marginBottom: "40px",
            border: "1px solid var(--chip-border)",
            maxWidth: "680px",
          }}
        >
          <span
            style={{ color: "var(--blue)", fontSize: "1rem", marginTop: "1px" }}
          >
            ℹ
          </span>
          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "0.88rem",
              color: "var(--text-soft)",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {tab === "main" ? t.galleryDesc1 : t.galleryDesc2}
          </p>
        </div>

        {/* Photo grid */}
        <div
          ref={ref}
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns:
              tab === "main" ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          {photos.map((_, i) => (
            <div
              key={i}
              style={{
                aspectRatio: tab === "main" ? "4/3" : "3/2",
                background: "linear-gradient(135deg, #e8f0fe 0%, #d0e4f8 100%)",
                borderRadius: "14px",
                overflow: "hidden",
                position: "relative",
                border: "1px solid var(--border)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(26,93,200,0.14)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}${tab}-${i + 1}.jpg`}
                alt={`Photo ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:640px){
          #gallery [style*="gridTemplateColumns: repeat(3"]{grid-template-columns:repeat(2,1fr)!important;}
          #gallery [style*="gridTemplateColumns: repeat(2"]{grid-template-columns:1fr!important;}
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
  margin: "0 0 12px",
  fontWeight: 600,
};
const headSt = {
  fontFamily: "'DNFForgedBlade',Georgia,serif",
  fontSize: "clamp(2rem,4vw,3rem)",
  fontWeight: 400,
  color: "var(--navy)",
  margin: 0,
  lineHeight: 1.1,
};

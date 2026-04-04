import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLang } from "../context/LangContext";
import { text } from "../content";

export default function Contact() {
  const { lang } = useLang();
  const t = text[lang];
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const [vals, setVals] = useState({ name: "", email: "", msg: "" });

  function handleSubmit(e) {
    if (e) e.preventDefault();
    if (!vals.name || !vals.email || !vals.msg) return;
    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        {
          user_name: vals.name,
          user_email: vals.email,
          message: vals.msg,
        },
        import.meta.env.VITE_EMAILJS_KEY,
      )
      .then((res) => {
        setStatus("success");
      })
      .catch((err) => {
        setStatus("error");
      });
  }

  return (
    <section
      id="contact"
      style={{
        background: "var(--cream)",
        padding: "110px 40px 72px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ marginBottom: "52px" }}>
          <p style={labelSt}>Get In Touch</p>
          <h2 style={headSt}>
            {lang === "en" ? (
              <>
                <em style={{ color: "var(--blue-mid)" }}>Contact</em> Us
              </>
            ) : (
              <>
                <em>문의</em>하기
              </>
            )}
          </h2>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "var(--blue-mid)",
              marginTop: "16px",
              opacity: 0.4,
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "56px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: info */}
          <div>
            <p
              style={{
                fontFamily: "'DNFForgedBlade', 'Hahmlet', Georgia,serif",
                fontSize: "1.3rem",
                color: "var(--navy)",
                margin: "0 0 28px",
                lineHeight: 1.3,
              }}
            >
              {lang === "en"
                ? "Please send an email if you have any questions or would like to get in touch with us"
                : "문의 사항이 있다면 여기로 보내주세요"}
            </p>

            {[
              {
                icon: "🕊",
                label: lang === "en" ? "Church" : "교회",
                value:
                  lang === "en"
                    ? "Southern Virginia Baptist Church"
                    : "남버지니아침례교회",
              },
              {
                icon: "📞",
                label: lang === "en" ? "Phone" : "전화",
                value: t.phone,
                href: "tel:+17578499500",
              },
              {
                icon: "✉",
                label: lang === "en" ? "Email" : "이메일",
                value: t.email,
                href: "mailto:jbchsva@gmail.com",
              },
              {
                icon: "▶",
                label: "YouTube",
                value: "@jbchsva",
                href: "https://www.youtube.com/@jbchsva",
              },
            ].map(({ icon, label, value, href }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  gap: "14px",
                  marginBottom: "18px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    background: "var(--white)",
                    border: "1px solid var(--chip-border)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    flexShrink: 0,
                    color: "var(--blue)",
                  }}
                >
                  {icon}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: "0.7rem",
                      color: "var(--text-muted)",
                      margin: "0 0 2px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: "0.9rem",
                        color: "var(--text-soft)",
                        textDecoration: "none",
                      }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: "0.9rem",
                        color: "var(--text-soft)",
                        margin: 0,
                      }}
                    >
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right: form */}
          <div
            style={{
              background: "var(--white)",
              borderRadius: "20px",
              border: "1px solid var(--border)",
              padding: "36px",
              boxShadow: "0 4px 24px rgba(26,93,200,0.06)",
            }}
          >
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>
                  🕊
                </div>
                <p
                  style={{
                    fontFamily: "'DNFForgedBlade', 'Hahmlet', Georgia,serif",
                    fontSize: "1.2rem",
                    color: "var(--navy)",
                    marginBottom: "8px",
                  }}
                >
                  {t.contactSuccess}
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div>
                  <label style={labelFieldSt}>{t.contactName}</label>
                  <input
                    name="user_name"
                    type="text"
                    placeholder={lang === "en" ? "Your name" : "이름"}
                    required
                    value={vals.name}
                    onChange={(e) => setVals({ ...vals, name: e.target.value })}
                    style={inp}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--blue)";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(26,93,200,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div>
                  <label style={labelFieldSt}>{t.contactEmail}</label>
                  <input
                    name="user_email"
                    type="email"
                    placeholder={
                      lang === "en" ? "your@email.com" : "이메일 주소"
                    }
                    value={vals.email}
                    onChange={(e) =>
                      setVals({ ...vals, email: e.target.value })
                    }
                    required
                    style={inp}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--blue)";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(26,93,200,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div>
                  <label style={labelFieldSt}>{t.contactMsg}</label>
                  <textarea
                    name="message"
                    placeholder={
                      lang === "en"
                        ? "How can we help you?"
                        : "메시지를 입력하세요"
                    }
                    value={vals.msg}
                    onChange={(e) => setVals({ ...vals, msg: e.target.value })}
                    required
                    rows={5}
                    style={{ ...inp, resize: "vertical" }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--blue)";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(26,93,200,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--border)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                {status === "error" && (
                  <p
                    style={{
                      color: "#e53e3e",
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: "0.85rem",
                      margin: 0,
                    }}
                  >
                    {t.contactError}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    background:
                      status === "sending"
                        ? "var(--text-muted)"
                        : "var(--blue)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "40px",
                    padding: "13px",
                    fontFamily: "'DM Sans',sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    letterSpacing: "0.08em",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    transition: "all 0.2s",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 14px rgba(26,93,200,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "sending") {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(26,93,200,0.4)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow =
                      "0 4px 14px rgba(26,93,200,0.3)";
                  }}
                >
                  {status === "sending"
                    ? lang === "en"
                      ? "Sending..."
                      : "전송 중..."
                    : t.contactSend}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            marginTop: "64px",
            paddingTop: "28px",
            textAlign: "center",
            color: "var(--text-muted)",
            fontFamily: "'DM Sans',sans-serif",
            fontSize: "0.8rem",
            letterSpacing: "0.08em",
          }}
        >
          🕊 &nbsp;
          {lang === "en"
            ? "© 2026 Southern Virginia Baptist Church · LIFE WORD MISSION USA"
            : "© 2026 남버지니아침례교회 · 미주생명의말씀선교회"}
        </div>
      </div>

      <style>{`
        @media(max-width:640px){
          .contact-grid{grid-template-columns:1fr !important;}
        }
      `}</style>
    </section>
  );
}

/* ── Style constants (outside component so they're not recreated on render) ── */
const inp = {
  width: "100%",
  background: "var(--cream)",
  border: "1px solid var(--border)",
  borderRadius: "12px",
  color: "var(--text)",
  fontFamily: "'DM Sans',sans-serif",
  fontSize: "0.9rem",
  padding: "13px 16px",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const labelFieldSt = {
  fontFamily: "'DM Sans',sans-serif",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  display: "block",
  marginBottom: "6px",
};

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

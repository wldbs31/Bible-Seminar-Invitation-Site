import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext";
import "./Envelope.css";

export default function Envelope() {
  const [opened, setOpened] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const { lang, toggle } = useLang();
  const navigate = useNavigate();

  function handleOpen() {
    if (!opened) {
      setOpened(true);
    } else {
      setLeaving(true);
      setTimeout(() => navigate("/home"), 800);
    }
  }

  function selectLang(l) {
    if (lang !== l) toggle();
  }

  return (
    <div className={`env-screen${leaving ? " leaving" : ""}`}>
      <div className="env-center">
        <p className="env-above-text">
          {lang === "en"
            ? "You have received an invitation"
            : "초대장이 도착했습니다"}
        </p>

        <div
          className={`envelope-wrap${opened ? " opened" : ""}`}
          onClick={handleOpen}
        >
          <div className="envelope-body">
            <div className="env-bottom-center" />
            <div className="env-bottom-left" />
            <div className="env-bottom-right" />

            {/* Letter inside */}
            <div className={`letter${opened ? " letter-rise" : ""}`}>
              <div className="letter-divider" />
              <p className="letter-church">
                {lang === "en"
                  ? "Southern Virginia\nBaptist Church"
                  : "남버지니아\n침례교회"}
              </p>
              <div className="letter-divider" />
              <p className="letter-invite">
                {lang === "en" ? "Click to enter →" : "클릭해주세요 →"}
              </p>
            </div>

            {/* Flap */}
            <div className="env-flap" />
          </div>
        </div>

        <p className="env-hint">
          {opened
            ? lang === "en"
              ? "Welcome!"
              : "이 곳에 오신 당신을 환영합니다"
            : lang === "en"
              ? "You selected English. Click the envelope to open"
              : "한국어를 선택하셨습니다. 봉투를 클릭하여 열어보세요"}
        </p>

        {/* Language selector */}
        <div className="lang-selector">
          <button
            className={`lang-btn${lang === "en" ? " active" : ""}`}
            onClick={() => selectLang("en")}
          >
            English
          </button>
          <button
            className={`lang-btn${lang === "kr" ? " active" : ""}`}
            onClick={() => selectLang("kr")}
          >
            한국어
          </button>
        </div>
      </div>
    </div>
  );
}

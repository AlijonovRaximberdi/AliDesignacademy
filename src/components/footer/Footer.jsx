import React from "react";
import "./Footer.css";
import "./Footer1.css";


function Footer() {
  return (
    <div className="foot-section">
      <img className="logo" src="./image-Photoroom.png" alt="logo" />
      <h3>📞 +998-95-111-75-66</h3>

      <div className="social-icons">
        <a
          href="https://www.facebook.com/alidizaynakademiyasi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./facebook.png" alt="Facebook" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCMLe0FkXsjl747BVipSSaXw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./youtube.png" alt="YouTube" />
        </a>
        <a
          href="https://www.instagram.com/ali_dizayn_akademiyasi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./instagram.png" alt="Instagram" />
        </a>
        <a
          href="https://t.me/ali_dizayn_akademiyasi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./telegram.png" alt="Telegram" />
        </a>
      </div>
      {/* Dasturchi ismi */}
      <div className="developer-name">
        <h5>©"Ali dizayn akademiyasi" 2025</h5>
        <p>
          Developed by{" "}
          <a href="https://t.me/AlijonovRaximberdi">Alijonov Raximberdi</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;

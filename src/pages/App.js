import { useEffect } from "react";
import "../css/App.css";

function App() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  const ANDROID_CONDITIONAL = /android/i.test(userAgent);
  const IOS_CONDITIONAL =
    /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

  useEffect(() => {
    window.location.href = "myapp://";
  }, []);

  return (
    <div className="App">
      <h1 className="title">
        Escanea el código QR o presiónalo para descargar la app
      </h1>
      <div className="content">
        {IOS_CONDITIONAL && (
          <div className="qr-container">
            <a href="https://apps.apple.com/cl/app/fedecamaras/id6670324965">
              <img
                src="/img/qr-appstore.png"
                rel="nofollow"
                alt="qr code"
                width="250px"
              />
            </a>
          </div>
        )}
        {ANDROID_CONDITIONAL && (
          <div className="qr-container">
            <a href="https://play.google.com/store/apps/details?id=org.ve.fedecamaras.asamblea&pcampaignid=web_share">
              <img
                src="/img/qr-playstore.png"
                rel="nofollow"
                alt="qr code"
                width="250px"
              />
            </a>
          </div>
        )}
        <footer className="footer">
          <img
            className="footer-image"
            src="/img/background.png"
            rel="nofollow"
            alt="qr code"
          />
        </footer>
      </div>
    </div>
  );
}

export default App;

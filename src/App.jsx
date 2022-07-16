import qrCodeImg from "../src/assets/images/image-qr-code.png";

function App() {
  return (
    <div className="card">
      <img className="card__img" src={qrCodeImg} alt="" />
      <div className="card__text">
        <h1 className="card__text--title">
          Improve your front-end skills by building projects
        </h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;

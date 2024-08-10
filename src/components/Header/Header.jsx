import { useState, useEffect } from "react";
import headerImg from "../../assets/images/header-img1.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Header.css";

const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Fullstack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Team Player",
  ];
  const [text, setText] = useState("");
  // delta will determine how fast each letter will come after the first one is typed
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // Time between transition between each word
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  });

  return (
    <div className="header" id="header">
      <div className="welcome-banner">
        <span className="tagline">Welcome to my Portfolio</span>

      <div className="header-content" >
        <TrackVisibility once>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__fadeIn" : ""}
            >
              <h1>
                {`Hi I'm Jovanna, `}
                <span className="wrap">{text}</span>
              </h1>
            </div>
          )}
        </TrackVisibility>
        </div>
      </div>
      <div className="header-img">
        <img src={headerImg} alt="Header Img" />
      </div>
    </div>
  );
};

export default Header;

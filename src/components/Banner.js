import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle ,Clipboard} from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import coderAnimation from '../assets/img/coderAnimation.json';
import Lottie from "lottie-react";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Mobile Developer", "Web Developer", "Full Stack Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
 const handleConnectClick = () => {
    const email = 'turkes2214@gmail.com'; 
    navigator.clipboard.writeText(email);
    console.log('Mail adresi kopyalandı!');
    
    setShowCopiedMessage(true);

    setTimeout(() => {
      setShowCopiedMessage(false);
    }, 2000);
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Cengiz`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Hello World! 👋 I'm Cengizhan Mehmet Türkeş, a passionate developer with expertise in Flutter, .NET, and React JS. Let's create something amazing together! 🚀</p>
                  <button onClick={handleConnectClick}>Let’s Connect <Clipboard size={25} onClick={handleConnectClick} /></button>

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <Lottie animationData={coderAnimation} />

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {showCopiedMessage && (
        <div className="copied-message-container">
          <div className="copied-message">
            E-mail copied to clipboard!
          </div>
        </div>
      )}
    </section>
  )
}

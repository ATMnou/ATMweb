// import "./Home.css";
import { useEffect, useState } from "react";

import error404 from "../media/notfoundghost.gif";

function Home() {
  let codes = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "apple",
    "sed",
    "do",
  ];
  const [uid, setUid] = useState(null);
  const [countdown, setCountdown] = useState(5);
  const [showContent, setShowContent] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setUid(urlParams.get("uid"));
    console.log(uid);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 1) {
        setCountdown(countdown - 1);
      } else {
        setShowContent(true);
        if (uid != null) {
          setVerifyCode(IdtoCode(uid));
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  function IdtoCode(ar) {
    let codetxt = "";
    for (let i = 0; i < ar.length; i++) {
      if (i != ar.length - 1) {
        codetxt += codes[ar[i]] + " ";
      } else {
        codetxt += codes[ar[i]];
      }
    }
    return codetxt;
  }
  // let verifycode = IdtoCode(uid);

  return (
    <section className="home__container">
      {uid ? (
        <div>
          {showContent ? (
            <p>{verifyCode}</p>
          ) : (
            <h2>{countdown}초 후에 내용을 표시합니다...</h2>
          )}
        </div>
      ) : (
        <div>
          <h1>어이쿠!</h1>
          <h3>잘못된 접근이에요!</h3>
          <h4>그대신 여기 귀여운 귀신좀 보세요.</h4>
          <img src={error404} width="100%"></img>
        </div>
      )}
    </section>
  );
}
export default Home;

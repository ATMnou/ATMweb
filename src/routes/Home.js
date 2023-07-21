import "./Home.css";
import icon from "./atmicon.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home__container">
      <h3>이런 봇이 있으면 어떨까요...</h3>
      <p>
        ...가장 무례한데 별 기능 다 있고, 거기에다 로블록스 인증을 곁들이고,
        GPT까지 있는 그런 봇 말이에요.
      </p>
      <hr />
      <img src={icon} width="40%"></img>
      <br />
      <br />
      <div className="center">
        <Link className="btn btn-primary" role="button" to="/">
          에틈봇 초대하기
        </Link>{" "}
        <Link className="btn btn-secondary" role="button" to="/">
          에틈봇 가이드
        </Link>{" "}
        <Link className="btn btn-success" role="button" to="/">
          에틈봇 후원하기
        </Link>{" "}
      </div>
      <hr />
      <h3>에틈봇의 쩌는 기능</h3>
      <ul>
        <li>
          <strong>로블록스 인증</strong>: 게임을 참여하거나, 설명을 바꾸는
          것으로 간편하게 인증!
        </li>
        <li>
          <strong>유저 검색</strong>: 간편한 명령어로 유저를 빠르게 검색하세요!
        </li>
        <li>
          <strong>계산 기능</strong>: 괄호, 제곱, 팩토리얼 등 다양한 기능을
          지원하는 계산 기능!
        </li>
        <li>
          <strong>소인수분해</strong>: 근데 이게 쓸모가 있나요?
        </li>
        <li>
          <strong>애교 기능</strong>: 높은 확률로 당신이 까일거에요!
        </li>
        <li>
          <strong>채팅 데이터 분석</strong>: 사람들이 뭐에 관심이 많은지
          알아보세요!
        </li>
        <li>
          <strong>채팅 청소</strong>: 채팅 상태가 너무 더럽나요? 청소하세요!
        </li>
      </ul>
      <hr />
      <h3>에틈봇을 만드는데 사용한 기술</h3>
      <ul>
        <li>
          <strong>Node.js</strong>: 메인 언어
        </li>
        <li>
          <strong>Python</strong>: 채팅 데이터 분석 용도
        </li>
        <li>
          <strong>Discord.js</strong>: 디스코드 봇 API
        </li>
        <li>
          <strong>json-server</strong>: (교체 예정)
        </li>
        <li>
          <strong>MySQL</strong>: 로블록스 인증 데이터베이스
        </li>
        <li>
          <strong>React</strong>: 웹사이트
        </li>
      </ul>
    </section>
  );
}
export default Home;

import "./Notfound.css";
import { Link } from "react-router-dom";

function notfound() {
  return (
    <div className="ghost">
      <div className="about__container">
        <h2>귀신을 만났습니다!</h2>
        <p>
          귀신이 화면을 번쩍하게 하고 있어요!
          <br />
          귀신이 당신을 덮치기 전에 도망가세요!
        </p>
        <Link className="btn btn-primary" role="button" to="/">
          도망가기
        </Link>
      </div>
    </div>
  );
}
export default notfound;

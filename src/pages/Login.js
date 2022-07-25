import { useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

//api 호출 예제.
const Login = () => {
  async function getData() {
    const rawRes = await fetch(
      "https://v5hdg0fow7.execute-api.ap-northeast-2.amazonaws.com/Dev/pockets/test"
    );
    const jsonRes = await rawRes.json();
    return console.log(jsonRes);
  }

  //로그인 정보 처리
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  //로그인 정보 처리 끝

  //   네비게이션 호출
  const navigate = useNavigate();
  // 네비게이션 호출 끝

  // 로그인 조건 처리
  const idInput = useRef();
  const passwordInput = useRef();

  const handleLogin = () => {
    if (id.length < 3) {
      idInput.current.focus();
      return;
    }

    if (password.length < 3) {
      passwordInput.current.focus();
      return;
    }
    alert("로그인 성공");
    navigate("/communitylist");
  };
  // 로그인 조건 처리 끝

  return (
    <div className="Login">
      <div className="intro">
        <h4>AdHunter</h4>
        <div>adhunter 로그인 페이지 입니다. 오신 것을 환영합니다</div>
      </div>
      <div className="login_input">
        <input
          ref={idInput}
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <input
          ref={passwordInput}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={handleLogin}>로그인하기</button>
        <button
          onClick={() => {
            navigate("/signUp");
          }}
        >
          회원가입하기
        </button>
      </div>
    </div>
  );
};
export default Login;

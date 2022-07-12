import { useState, useRef, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CommunityDispatchContext } from "./../App";

const Community_Create = () => {
  const date = new Date().getTime();
  //    네비게이션
  const navigate = useNavigate();

  // 미 입력시 알림
  const nameRef = useRef();
  // 입력 정보 처리
  const [state, setState] = useState({
    community_name: "",
    community_picture: "",
    community_allow: "",
  });

  const { onCreate } = useContext(CommunityDispatchContext);
  const handleChangeState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (state.community_name < 1) {
      nameRef.current.focus();
      return;
    }
    onCreate(
      date,
      state.community_name,
      state.community_allow,
      state.community_picture
    );
    alert("저장성공");
    navigate("/communityHome", { replace: true });
  };

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <p>여기는 커뮤니티 생성 페이지입니다.</p>
      <section>
        <h4>커뮤니티 이름</h4>
        <div>
          <input
            placeholder="당신의 커뮤니티 이름은 무엇인가요?"
            ref={nameRef}
            name="community_name"
            value={state.community_name}
            onChange={handleChangeState}
          />
        </div>
      </section>
      <section>
        <h4>커뮤니티 사진 등록</h4>
        <div>
          <input
            name="community_picture"
            value={state.community_picture}
            onChange={handleChangeState}
          />
        </div>
      </section>
      <section>
        <div>
          <h4>커뮤니티 등록을 위한 결제 허용 여부</h4>
          <input
            name="community_allow"
            value={state.community_allow}
            onChange={handleChangeState}
          />
        </div>
      </section>
      <div>
        <button onClick={handleSubmit}>작성완료</button>
      </div>
    </div>
  );
};

export default Community_Create;

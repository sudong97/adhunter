import React, { useState, useRef, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { CommunityDispatchContext } from "./../App";

const CommunityEditor = ({ originData, isEdit }) => {
  const date = new Date().getTime();
  //    네비게이션
  const navigate = useNavigate();

  // 미 입력시 알림
  const nameRef = useRef();
  // 입력 정보 처리

  const [state, setState] = useState({
    community_name: "",
    community_picture: "",
    community_allow: "허용",
  });

  const { onCreate_comu, onEdit_comu, onRemove_comu } = useContext(
    CommunityDispatchContext
  );
  const handleChangeState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (state.community_name < 1) {
      nameRef.current.focus();
      return;
    }
    if (
      window.confirm(
        isEdit
          ? "커뮤니티를 수정하시겠습니까?"
          : "새로운 커뮤니티를 생성하시겠습니까?"
      )
    ) {
      if (isEdit) {
        onEdit_comu(
          originData.id,
          date,
          state.community_name,
          state.community_allow,
          state.community_picture
        );
      } else {
        onCreate_comu(
          date,
          state.community_name,
          state.community_allow,
          state.community_picture
        );
      }
    }
    navigate("/communityHome", { replace: true });
  };

  useEffect(() => {
    if (isEdit) {
      setState({
        community_name: originData.community_name,
        community_allow: originData.community_allow,
        community_picture: originData.community_picture,
      });
    }
  }, [isEdit, originData]);

  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove_comu(originData.id);
      navigate("/CommunityHome", { replace: true });
    }
  };

  return (
    <div className="CommunityEditor">
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        {isEdit ? "수정취소" : "뒤로가기"}
      </button>
      <button onClick={handleRemove}>삭제하기</button>
      <p>
        {" "}
        {isEdit
          ? "여기는 커뮤니티 수정 페이지 입니다"
          : "여기는 커뮤니티 생성 페이지입니다"}
      </p>
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
          <h4>커뮤니티 결제 허용 여부</h4>
          <select
            name="community_allow"
            value={state.community_allow}
            onChange={handleChangeState}
          >
            <option value={"허용"}>허용</option>
            <option value={"거부"}>거부</option>
          </select>
        </div>
      </section>
      <div>
        <button onClick={handleSubmit}>
          {" "}
          {isEdit ? "수정완료" : "작성완료"}
        </button>
      </div>
    </div>
  );
};

export default CommunityEditor;

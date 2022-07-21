import { useNavigate } from "react-router-dom";
import React, { useState, useRef, useContext, useEffect } from "react";

import { ChallengeDispatchContext } from "./../App";
import { useParams } from "react-router-dom";

const ChallengeEditor = ({ originData2, isEdit }) => {
  const date = new Date().getTime();
  const navigate = useNavigate();
  const nameRef = useRef();
  const { communityNumber } = useParams();

  const [state, setState] = useState({
    Challenge_name: "",
    Challenge_mode: "보물찾기",
  });

  const { onCreate_ch, onEdit_ch, onRemove_ch } = useContext(
    ChallengeDispatchContext
  );

  const handleChangeState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (state.Challenge_name < 1) {
      nameRef.current.focus();
      return;
    }
    if (
      window.confirm(
        isEdit
          ? "챌린지를 수정하시겠습니까?"
          : "새로운 챌린지를 생성하시겠습니까?"
      )
    ) {
      if (isEdit) {
        onEdit_ch(
          originData2.id,
          originData2.id2,
          date,
          state.Challenge_name,
          state.Challenge_mode
        );
      } else {
        onCreate_ch(
          parseInt(communityNumber),
          date,
          state.Challenge_name,
          state.Challenge_mode
        );
      }
    }
    navigate("/CommunityHome", { replace: true });
  };

  useEffect(() => {
    if (isEdit) {
      setState({
        Challenge_name: originData2.ch_name,
        Challenge_mode: originData2.ch_mode,
      });
    }
  }, [isEdit, originData2]);

  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove_ch(originData2.id2);
      navigate("/CommunityHome", { replace: true });
    }
  };

  return (
    <div>
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
          ? "여기는 챌린지 수정 페이지 입니다"
          : "여기는 챌린지 생성 페이지입니다"}
      </p>
      <section>
        <h4>챌린지 이름</h4>
        <div>
          <input
            placeholder="개설하고자 하는 챌린지 이름은 무엇인가요?"
            ref={nameRef}
            name="Challenge_name"
            value={state.Challenge_name}
            onChange={handleChangeState}
          />
        </div>
      </section>
      <section>
        <div>
          <h4>챌린지 모드 설정</h4>
          <select
            name="Challenge_mode"
            value={state.Challenge_mode}
            onChange={handleChangeState}
          >
            <option value={"보물찾기"}>보물찾기</option>
            <option value={"집중모드"}>집중모드</option>
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

export default ChallengeEditor;

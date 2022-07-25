import React, { useState, useRef, useContext, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { ChallengeDispatchContext } from "./../App";
function ChallengeEditor({ secData, isEdit }) {
  console.log("secdata");
  console.log(secData);

  const navigate = useNavigate();
  const nameRef = useRef();
  const { communityNumber } = useParams();
  const [state2, setState2] = useState({
    challenge_name: "",
    challenge_mode: "보물찾기",
  });
  const date2 = new Date().getTime();

  const { onCreate_ch, onEdit_ch, onRemove_ch } = useContext(
    ChallengeDispatchContext
  );
  const handleChangestate2 = (e) => {
    setState2({ ...state2, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (state2.challenge_name < 1) {
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
          secData.id,
          secData.id2,
          date2,
          state2.challenge_name,
          state2.challenge_mode
        );
      } else {
        onCreate_ch(
          communityNumber,
          date2,
          state2.challenge_name,
          state2.challenge_mode
        );
      }
    }
    navigate("/communitylist", { replace: true });
  };

  //이전 입력값 불러오기
  useEffect(() => {
    if (isEdit) {
      setState2({
        challenge_name: secData.challenge_name,
        challenge_mode: secData.challenge_mode,
      });
    }
  }, [isEdit, secData]);
  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove_ch(secData.id2);
      navigate("/communitylist", { replace: true });
    }
  };

  return (
    <div>
      <h2>챌린지 생성 페이지</h2>
      <section>
        <h4>1. 챌린지 이름</h4>
        <div className="input_box">
          <input
            placeholder="당신의 챌린지 이름은 무엇인가요?"
            ref={nameRef}
            name="challenge_name"
            value={state2.challenge_name}
            onChange={handleChangestate2}
          />
        </div>
      </section>

      <section>
        <div>
          <h4>2. 챌린지 모드</h4>
          <select
            name="challenge_mode"
            value={state2.challenge_mode}
            onChange={handleChangestate2}
          >
            <option value={"보물찾기"}>보물찾기</option>
            <option value={"집중모드"}>집중모드</option>
          </select>
        </div>
      </section>
      <div className="control_box">
        <div>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            {isEdit ? "수정취소" : "취소하기"}
          </button>
          {isEdit && <button onClick={handleRemove}>삭제하기</button>}
        </div>
        <button onClick={handleSubmit}>
          {" "}
          {isEdit ? "수정완료" : "작성완료"}
        </button>
      </div>
    </div>
  );
}

export default ChallengeEditor;

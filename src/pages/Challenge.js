import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommunityHome from "./CommuityHome";
import { ChallengeStateContext } from "../App";

const Challenge = () => {
  const ChallengeInfo = useContext(ChallengeStateContext);
  //특정 챌린지에 접속하도록 하는 것
  const { challengeNumber } = useParams();
  const navigate = useNavigate();

  const goEdit = () => {
    navigate(`/Edit_Ch/${challengeNumber}`);
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
      <p>{challengeNumber}번 챌린지 상세페이지</p>
      <div>
        <button onClick={goEdit}>커뮤니티 정보 수정하기</button>
      </div>
    </div>
  );
};

export default Challenge;

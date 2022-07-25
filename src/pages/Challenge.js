import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import ChallengeList from "../components/ChallengeList";
import { ChallengeStateContext } from "../App";

function Challenge() {
  const { challengeNumber } = useParams();
  console.log(challengeNumber);
  const navigate = useNavigate();
  const challengelist = useContext(ChallengeStateContext);
  return (
    <div>
      <Header />
      <div>Challenge 상세 페이지</div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <button
        onClick={() => {
          navigate(`/challenge_edit/${challengeNumber}`);
        }}
      >
        챌린지 수정하기
      </button>
    </div>
  );
}

export default Challenge;

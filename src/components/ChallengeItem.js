import React from "react";
import { useNavigate } from "react-router-dom";

function ChallengeItem({ id2, challenge_name, challenge_mode }) {
  const navigate = useNavigate();
  const goDetail_comu = () => {
    navigate(`/challenge/${id2}`);
  };

  return (
    <div className="ChallengeItem" onClick={goDetail_comu}>
      <div>챌린지 이름 : {challenge_name}</div>
      <div>챌린지 모드 : {challenge_mode}</div>
    </div>
  );
}

export default ChallengeItem;

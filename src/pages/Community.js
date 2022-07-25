import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import ChallengeList from "../components/ChallengeList";
import { ChallengeStateContext } from "../App";

function Community() {
  const { communityNumber } = useParams();
  console.log(communityNumber);
  const navigate = useNavigate();
  const challengelist = useContext(ChallengeStateContext);
  return (
    <div>
      <Header />
      <div>Community</div>

      <h4>챌린지 리스트</h4>
      <ChallengeList challengelist={challengelist} />
      <button
        onClick={() => {
          navigate(`/community_edit/${communityNumber}`);
        }}
      >
        커뮤니티 수정하기
      </button>
      <button
        onClick={() => {
          navigate(`/challenge_create/${communityNumber}`);
        }}
      >
        챌린지 생성하기
      </button>
    </div>
  );
}

export default Community;

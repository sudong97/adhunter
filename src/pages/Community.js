import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";

function Community() {
  const { communityNumber } = useParams();
  console.log(communityNumber);
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div>Community</div>
      <button
        onClick={() => {
          navigate(`/community_edit/${communityNumber}`);
        }}
      >
        커뮤니티 수정하기
      </button>
      <button>챌린지 생성하기</button>
    </div>
  );
}

export default Community;

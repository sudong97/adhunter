import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommunityHome from "./CommuityHome";
import { ChallengeStateContext, CommunityStateContext } from "../App";

import ChallengeList from "../components/ChallengeList";
const Community = () => {
  const communityInfo = useContext(CommunityStateContext);
  //특정 커뮤니티에 접속하도록 하는 것
  const { communityNumber } = useParams();

  const navigate = useNavigate();
  const goEdit = () => {
    navigate(`/edit_comu/${communityNumber}`);
  };

  //챌린지 리스트 불러오기
  const challengeList = useContext(ChallengeStateContext);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate("/CommunityHome");
          }}
        >
          커뮤니티 Home으로 돌아가기
        </button>
      </div>
      <p>여기는 커뮤니티{communityNumber} 의 상세 페이지입니다.</p>
      <button
        onClick={() => {
          navigate(`/challenge_Create/${communityNumber}`);
        }}
      >
        챌린지 생성하기
      </button>
      <p>커뮤니티에 소속된 챌린지들 list</p>
      <ChallengeList challengeList={challengeList} />
      <div>
        <button onClick={goEdit}>커뮤니티 정보 수정하기</button>
      </div>
    </div>
  );
};

export default Community;

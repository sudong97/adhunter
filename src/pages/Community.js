import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommunityHome from "./CommuityHome";
import { CommunityStateContext } from "../App";

const Community = () => {
  const communityInfo = useContext(CommunityStateContext);
  //특정 커뮤니티에 접속하도록 하는 것
  const { communityNumber } = useParams();

  const navigate = useNavigate();
  const goEdit = () => {
    navigate(`/edit_comu/${communityNumber}`);
  };
  const dummyChallenge = [
    {
      ch_id: 1,
      ch_name: "과일먹기",
      ch_mode: "보물찾기",
    },
    {
      ch_id: 2,
      ch_name: "과일먹기",
      ch_mode: "보물찾기",
    },
    {
      ch_id: 3,
      ch_name: "과일먹기",
      ch_mode: "보물찾기",
    },
  ];
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
      <p>
        여기는 커뮤니티{communityNumber}{" "}
        {communityInfo[communityNumber].community_name}의 상세 페이지입니다.
      </p>
      <button onClick={() => {}}>챌린지 생성하기</button>
      <p>커뮤니티에 소속된 챌린지들 list</p>
      <div>
        <button onClick={goEdit}>커뮤니티 정보 수정하기</button>
      </div>
    </div>
  );
};

export default Community;

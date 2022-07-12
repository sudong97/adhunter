import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommunityHome from "./CommuityHome";
import { CommunityStateContext } from "../App";

const Community = () => {
  //특정 커뮤니티에 접속하도록 하는 것
  const { communityNumber } = useParams();
  console.log(communityNumber);
  const navigate = useNavigate();
  const goEdit = () => {
    navigate(`/edit_comu/${communityNumber}`);
  };
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
      <p>여기는 커뮤니티{communityNumber} 상세 페이지입니다.</p>
      <div>
        <button onClick={goEdit}>커뮤니티 정보 수정하기</button>
      </div>
    </div>
  );
};

export default Community;

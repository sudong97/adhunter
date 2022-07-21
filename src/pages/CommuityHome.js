import { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CommunityStateContext } from "../App";

import CommunityList from "../components/CommunityList";

const CommunityHome = () => {
  const communityList = useContext(CommunityStateContext);
  const navigate = useNavigate();
  console.log(communityList);
  return (
    <div>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        로그아웃
      </button>
      <div>여기는 커뮤니티 list 페이지 입니다.</div>
      <div>
        <h4>커뮤니티 리스트</h4>
      </div>
      <div>
        <CommunityList communityList={communityList} />
      </div>
      <button
        onClick={() => {
          navigate("/community_create");
        }}
      >
        커뮤니티 생성하기
      </button>
    </div>
  );
};

export default CommunityHome;

import { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import React from "react";
import { CommunityStateContext } from "../App";

import Header from "../components/Header/Header";
import CommunityList_List from "../components/CommunityList_List";

function Community_List() {
  const communityList = useContext(CommunityStateContext);
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());

  return (
    <div>
      <Header />
      <div>
        <CommunityList_List communitylist={communityList} />
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/community_create", { replace: true });
          }}
        >
          커뮤니티 추가하기
        </button>
      </div>
    </div>
  );
}

export default Community_List;

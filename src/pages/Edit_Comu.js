import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";

import CommunityEditor from "../components/CommunityEditor";
import { CommunityDispatchContext, CommunityStateContext } from "./../App";

const Edit_Comu = () => {
  const navigate = useNavigate();
  const { communityNumber } = useParams();

  const communityList = useContext(CommunityStateContext);

  const [originData, setOriginData] = useState();

  useEffect(() => {
    if (communityList.length >= 1) {
      const targetCommunity = communityList.find(
        (it) => parseInt(it.id) === parseInt(communityNumber)
      );

      if (targetCommunity) {
      }
      setOriginData(targetCommunity);
    } else {
      navigate("/CommunityHome", { replace: true });
    }
  }, [communityNumber, communityList]);

  return (
    <div>
      {originData && <CommunityEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit_Comu;

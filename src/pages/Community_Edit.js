import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CommunityStateContext } from "../App";
import CommunityEditor from "../components/CommunityEditor";

const Community_Edit = () => {
  const navigate = useNavigate;
  const { communityNumber } = useParams();
  const [originData, setOriginData] = useState();

  const communityList = useContext(CommunityStateContext);

  useEffect(() => {
    if (communityList.length >= 1) {
      const targetCommunity = communityList.find(
        (it) => parseInt(it.id) === parseInt(communityNumber)
      );

      if (targetCommunity) {
        setOriginData(targetCommunity);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [communityList, communityNumber]);

  return (
    <div>
      <h2>communityEdit</h2>
      {originData && <CommunityEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Community_Edit;

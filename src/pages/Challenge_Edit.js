import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CommunityStateContext } from "../App";
import { ChallengeStateContext } from "../App";
import ChallengeEditor from "../components/ChallengeEditor";

const Challenge_Edit = () => {
  const navigate = useNavigate;
  const { challengeNumber } = useParams();

  const [secData, setSecData] = useState();

  const challengeList = useContext(ChallengeStateContext);

  useEffect(() => {
    if (challengeList.length >= 1) {
      const targetChallenge = challengeList.find(
        (it) => parseInt(it.id2) === parseInt(challengeNumber)
      );

      if (targetChallenge) {
        setSecData(targetChallenge);
      } else {
        navigate("/", { replace: true });
      }
      console.log(targetChallenge);
    }
  }, [challengeList, challengeNumber]);
  console.log("origin");
  console.log(secData);

  return (
    <div>{secData && <ChallengeEditor isEdit={true} secData={secData} />}</div>
  );
};

export default Challenge_Edit;

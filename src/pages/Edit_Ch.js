import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";

import { ChallengeStateContext } from "../App";
import ChallengeEditor from "../components/ChallengeEidtor";

const Edit_Ch = () => {
  const navigate = useNavigate();
  const { challengeNumber } = useParams();
  const challengeList = useContext(ChallengeStateContext);

  const [originData2, setOriginData2] = useState();

  useEffect(() => {
    if (challengeList.length >= 1) {
      const targetChallenge = challengeList.find(
        (it) => parseInt(it.id2) === parseInt(challengeNumber)
      );

      if (targetChallenge) {
      }
      setOriginData2(targetChallenge);
    } else {
      navigate(`/Challenge/${challengeNumber}`, { replace: true });
    }
  }, [challengeNumber, challengeList]);
  return (
    <div>
      {originData2 && (
        <ChallengeEditor isEdit={true} originData2={originData2} />
      )}
    </div>
  );
};

export default Edit_Ch;

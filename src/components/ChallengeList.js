import ChallengeItem from "./ChallengeItem";
import { useNavigate, useParams } from "react-router-dom";

const ChallengeList = ({ challengeList }) => {
  console.log(challengeList);
  const { communityNumber } = useParams();
  //해당 커뮤니티에만 속하는 챌린지로 필터하는 함수
  const filteredChallenge = challengeList.filter(
    (e) => parseInt(e.id) === parseInt(communityNumber)
  );

  return (
    <div className="ChallengeList">
      {filteredChallenge.map((it) => (
        <ChallengeItem key={it.id2} {...it} />
      ))}
    </div>
  );

  challengeList.defaultProps = {
    challengeList: [],
  };
};

export default ChallengeList;

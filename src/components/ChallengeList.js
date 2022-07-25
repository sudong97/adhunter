import React from "react";
import { useParams } from "react-router";
import ChallengeItem from "./ChallengeItem";

function ChallengeList({ challengelist }) {
  const { communityNumber } = useParams();
  const filteredChallenge = challengelist.filter(
    (e) => parseInt(e.id) === parseInt(communityNumber)
  );
  return (
    <div className="CommunityList">
      {filteredChallenge.map((it) => (
        <ChallengeItem key={it.id2} {...it} />
      ))}
    </div>
  );

  challengelist.defaultProps = {
    challengelist: [],
  };
}

export default ChallengeList;

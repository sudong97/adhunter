import { useNavigate } from "react-router-dom";

const ChallengeItem = ({ id2, ch_name, ch_mode }) => {
  const navigate = useNavigate();
  const goDetail_ch = () => {
    navigate(`/Challenge/${id2}`);
  };
  return (
    <div className="ChallengeItem" onClick={goDetail_ch}>
      <div>챌린지 이름 : {ch_name}</div>
      <div>챌린지 모드 선택 : {ch_mode}</div>
    </div>
  );
};

export default ChallengeItem;

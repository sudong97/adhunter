import { useNavigate } from "react-router-dom";

const CommunityItem = ({
  id,
  community_name,
  community_picture,
  community_allow,
}) => {
  const navigate = useNavigate();
  const goDetail_comu = () => {
    navigate(`/communityHome/${id}`);
  };
  return (
    <div className="CommunityItem" onClick={goDetail_comu}>
      <div>
        <img
          src={process.env.PUBLIC_URL + `assets/${community_picture}.jpeg`}
        />
      </div>
      <div>커뮤니티 이름 : {community_name}</div>
      <div>커뮤니티 결제 허용 : {community_allow}</div>
    </div>
  );
};

export default CommunityItem;

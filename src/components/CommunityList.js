import CommunityItem from "./CommunityItem";

const CommunityList = ({ communityList }) => {
  return (
    <div className="CommunityList">
      {communityList.map((it) => (
        <CommunityItem key={it.id} {...it} />
      ))}
    </div>
  );

  CommunityList.defaultProps = {
    communityList: [],
  };
};

export default CommunityList;

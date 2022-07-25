import React from "react";
import CommunityList_Item from "./CommunityList_Item";

function CommunityList_List({ communitylist }) {
  return (
    <div className="CommunityList">
      {communitylist.map((it) => (
        <CommunityList_Item key={it.id} {...it} />
      ))}
    </div>
  );

  CommunityList_List.defaultProps = {
    communitylist: [],
  };
}

export default CommunityList_List;

import { useState, useRef, useContext } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import ChallengeEditor from "../components/ChallengeEidtor";
import { CommunityDispatchContext } from "../App";

const Community_Create = () => {
  const { communityNumber } = useParams();
  console.log(parseInt(communityNumber));
  const date = new Date().getTime();
  //    네비게이션
  const navigate = useNavigate();

  // 미 입력시 알림
  const nameRef = useRef();
  // 입력 정보 처리
  const [state, setState] = useState({
    community_name: "",
    community_picture: "",
    community_allow: "허용",
  });

  const { onCreate_comu } = useContext(CommunityDispatchContext);
  const handleChangeState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (state.community_name < 1) {
      nameRef.current.focus();
      return;
    }
    onCreate_comu(
      date,
      state.community_name,
      state.community_allow,
      state.community_picture
    );
    alert("저장성공");
    navigate("/communityHome", { replace: true });
  };

  return (
    <div>
      <ChallengeEditor />
    </div>
  );
};

export default Community_Create;

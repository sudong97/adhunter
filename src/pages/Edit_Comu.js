import { useNavigate, useParams } from "react-router-dom";

const Edit_Comu = () => {
  const { communityNumber } = useParams();
  const navigate = useNavigate();
  console.log(communityNumber);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate(-1);
            return;
          }}
        >
          수정 취소
        </button>
      </div>
      <div>여기는 커뮤니티{communityNumber} 수정 페이지 입니다.</div>
    </div>
  );
};

export default Edit_Comu;

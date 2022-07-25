import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <div>여기는 회원가입 하는 페이지입니다.</div>
    </div>
  );
};

export default SignUp;

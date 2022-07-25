import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <Link to="/communitylist">Adhunter</Link>
      <div className="LogOut">
        <button
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}

export default Header;

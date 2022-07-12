import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import React, { useReducer, useRef } from "react";

import Login from "./pages/Login";
import CommunityHome from "./pages/CommuityHome";
import Community_Create from "./pages/Community_Create";
import SignUp from "./pages/SignUp";
import Community from "./pages/Community";
import Edit_Comu from "./pages/Edit_Comu";

const dummyData = [
  {
    id: 1,
    community_name: "지수그룹",
    community_picture: "kakao",
    community_allow: "허용",
    create_date: 1657593537749,
  },
  {
    id: 2,
    community_name: "수연그룹",
    community_picture: "naver",
    community_allow: "허용",
    create_date: 1657593537750,
  },
  {
    id: 3,
    community_name: "지원그룹",
    community_picture: "uahan",
    community_allow: "허용",
    create_date: 1657593537751,
  },
];

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [...state, newItem];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const CommunityStateContext = React.createContext();
export const CommunityDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);
  //CREATE
  const onCreate = (
    date,
    community_name,
    community_allow,
    community_picture
  ) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        community_name,
        community_picture,
        community_allow,
      },
    });
    dataId.current += 1;
  };
  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  //EDIT
  const onEdit = (
    targetId,
    date,
    community_name,
    community_allow,
    community_picture
  ) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        community_name,
        community_allow,
        community_picture,
      },
    });
  };

  return (
    <CommunityStateContext.Provider value={data}>
      <CommunityDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/communityhome" element={<CommunityHome />} />
              <Route
                path="/communityhome/:communityNumber"
                element={<Community />}
              />
              <Route path="/community_create" element={<Community_Create />} />
              <Route
                path="/edit_comu/:communityNumber"
                element={<Edit_Comu />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </CommunityDispatchContext.Provider>
    </CommunityStateContext.Provider>
  );
}

export default App;

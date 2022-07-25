import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import React, { useReducer, useRef } from "react";
import "./App.css";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CommunityList from "./pages/CommunityList";
import Community from "./pages/Community";
import Community_Create from "./pages/Community_Create";
import Community_Edit from "./pages/Community_Edit";

//community reducer
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

const dummyData = [
  {
    id: 1,
    community_name: "지수그룹",
    community_allow: "허용",
    community_picture: "kakao",
  },
  {
    id: 2,
    community_name: "지호그룹",
    community_allow: "허용",
    community_picture: "naver",
  },
];
const App = () => {
  //community reducer
  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId = useRef(3);
  //CREATE
  const onCreate_comu = (
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
  const onRemove_comu = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  //EDIT
  const onEdit_comu = (
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
      <CommunityDispatchContext.Provider
        value={{
          onCreate_comu,
          onEdit_comu,
          onRemove_comu,
        }}
      >
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/communitylist" element={<CommunityList />} />
              <Route
                path="/community/:communityNumber"
                element={<Community />}
              />
              <Route path="/community_create" element={<Community_Create />} />
              <Route
                path="/community_edit/:communityNumber"
                element={<Community_Edit />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </CommunityDispatchContext.Provider>
    </CommunityStateContext.Provider>
  );
};

export default App;

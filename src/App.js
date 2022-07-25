import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import React, { useReducer, useRef } from "react";
import "./App.css";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CommunityList from "./pages/CommunityList";
import Community from "./pages/Community";
import Community_Create from "./pages/Community_Create";
import Community_Edit from "./pages/Community_Edit";
import Challenge_Create from "./pages/Challenge_Create";
import Challenge_Edit from "./pages/Challenge_Edit";
import Challenge from "./pages/Challenge";

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
//chanllenge reducer
const reducer2 = (state2, action2) => {
  let newState2 = [];
  switch (action2.type) {
    case "INIT": {
      return action2.data2;
    }
    case "CREATE": {
      console.log("hihi2");
      const newItem2 = {
        ...action2.data2,
      };
      newState2 = [...state2, newItem2];
      break;
    }
    case "REMOVE": {
      console.log("hihi");
      console.log(action2);
      newState2 = state2.filter(
        (it) => parseInt(it.id2) !== parseInt(action2.targetId2)
      );
      break;
    }
    case "EDIT": {
      console.log("hihi3");
      newState2 = state2.map((it) =>
        it.id2 === action2.data2.id2 ? { ...action2.data2 } : it
      );
      break;
    }
    default:
      return state2;
  }
  return newState2;
};
export const CommunityStateContext = React.createContext();
export const ChallengeStateContext = React.createContext();
export const CommunityDispatchContext = React.createContext();
export const ChallengeDispatchContext = React.createContext();

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

  //challenge reducer
  const [data2, dispatch2] = useReducer(reducer2, []);
  const dataId2 = useRef(0);
  //create
  const onCreate_ch = (id, date2, challenge_name, challenge_mode) => {
    dispatch2({
      type: "CREATE",
      data2: {
        id: id,
        id2: dataId2.current,
        date2: new Date(date2).getTime(),
        challenge_name,
        challenge_mode,
      },
    });
    dataId2.current += 1;
  };
  //REMOVE
  const onRemove_ch = (targetId2) => {
    dispatch({ type: "REMOVE", targetId2 });
  };
  //EDIT
  const onEdit_ch = (
    targetId,
    targetId2,
    date2,
    challenge_name,
    challenge_mode
  ) => {
    dispatch2({
      type: "EDIT",
      data2: {
        id: targetId,
        id2: targetId2,
        date2: new Date(date2).getTime(),
        challenge_name,
        challenge_mode,
      },
    });
  };
  return (
    <CommunityStateContext.Provider value={data}>
      <ChallengeStateContext.Provider value={data2}>
        <CommunityDispatchContext.Provider
          value={{
            onCreate_comu,
            onEdit_comu,
            onRemove_comu,
          }}
        >
          <ChallengeDispatchContext.Provider
            value={{ onCreate_ch, onEdit_ch, onRemove_ch }}
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
                  <Route
                    path="/community_create"
                    element={<Community_Create />}
                  />
                  <Route
                    path="/community_edit/:communityNumber"
                    element={<Community_Edit />}
                  />
                  <Route
                    path="/challenge_create/:communityNumber"
                    element={<Challenge_Create />}
                  />
                  <Route
                    path="/challenge_edit/:challengeNumber"
                    element={<Challenge_Edit />}
                  />
                  <Route
                    path="/challenge/:challengeNumber"
                    element={<Challenge />}
                  />
                </Routes>
              </div>
            </BrowserRouter>
          </ChallengeDispatchContext.Provider>
        </CommunityDispatchContext.Provider>
      </ChallengeStateContext.Provider>
    </CommunityStateContext.Provider>
  );
};

export default App;

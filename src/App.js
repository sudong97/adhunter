import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import React, { useReducer, useRef } from "react";

import Login from "./pages/Login";
import CommunityHome from "./pages/CommuityHome";
import Community_Create from "./pages/Community_Create";
import SignUp from "./pages/SignUp";
import Community from "./pages/Community";
import Edit_Comu from "./pages/Edit_Comu";

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

//challenge reducer
const reducer2 = (state2, action) => {
  let newState2 = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState2 = [...state2, newItem];
      break;
    }
    case "REMOVE": {
      newState2 = state2.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState2 = state2.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state2;
  }
  return newState2;
};

export const ChanllengeStateContext = React.createContext();
export const ChanllengeDispatchContext = React.createContext();

function App() {
  const [comu_data, dispatch] = useReducer(reducer, []);
  const [ch_data, dispatch2] = useReducer(reducer2, []);
  const comu_dataId = useRef(0);
  const ch_dataId = useRef(0);
  //community
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
        id: comu_dataId.current,
        date: new Date(date).getTime(),
        community_name,
        community_picture,
        community_allow,
      },
    });
    comu_dataId.current += 1;
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

  //challenge
  //create
  const onCreate_ch = (
    date,
    community_name,
    community_allow,
    community_picture
  ) => {
    dispatch({
      type: "CREATE",
      data: {
        id: comu_dataId.current,
        date: new Date(date).getTime(),
        community_name,
        community_picture,
        community_allow,
      },
    });
    comu_dataId.current += 1;
  };
  //edit
  //remove
  const onRemove_ch = (targetId) => {
    dispatch2({ type: "REMOVE", targetId });
  };

  return (
    <CommunityStateContext.Provider value={comu_data}>
      <CommunityDispatchContext.Provider
        value={{ onCreate_comu, onEdit_comu, onRemove_comu }}
      >
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

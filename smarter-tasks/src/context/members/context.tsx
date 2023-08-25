import React, { createContext, useReducer } from "react";
import {
  MemberActions,
  initialMemberState,
  memberReducer,
  membersState,
} from "./reducer";

type MemberContextType = {
  state: membersState;
  dispatch: React.Dispatch<MemberActions>;
};

//   {} as MemberContextType
export const MemberContext = createContext<MemberContextType>({
  state: initialMemberState,
  dispatch: () => {},
});

export const MemberContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(memberReducer, initialMemberState);

  return (
    <MemberContext.Provider value={{ state, dispatch }}>
      {children}
    </MemberContext.Provider>
  );
};

import React, { createContext, useReducer } from "react";
import {
  reducer,
  initialState,
  ProjectsState,
  ProjectsActions,
} from "./reducer";

const initialStateContext = {
  projects: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};
export const ProjectsStateContext =
  createContext<ProjectsState>(initialStateContext);

export type ProjectsDispatch = React.Dispatch<ProjectsActions>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const initialDispatchContext = (_value: ProjectsActions): void => {};
// https://stackoverflow.com/questions/67593959/dispatch-with-usereducer-and-usecontext-hooks-dispatch-does-not-exist-on-type
export const ProjectsDispatchContext = createContext<ProjectsDispatch>(
  {} as ProjectsDispatch
);

export const ProjectsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProjectsStateContext.Provider value={state}>
      <ProjectsDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectsDispatchContext.Provider>
    </ProjectsStateContext.Provider>
  );
};

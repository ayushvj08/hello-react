import React, { Suspense, useContext, useEffect } from "react";
import { fetchMembers } from "../../context/members/actions";
import { MemberContext } from "../../context/members/context";

const MemberListItems = React.lazy(() => import("./MemberListItems"));

const MemberList = () => {
  const { dispatch } = useContext(MemberContext);
  useEffect(() => {
    fetchMembers(dispatch);
  }, [dispatch]);
  return (
    <div className="sm:grid gap-4 grid-cols-4 mt-5">
      <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
        <MemberListItems />
      </Suspense>
    </div>
  );
};
export default MemberList;

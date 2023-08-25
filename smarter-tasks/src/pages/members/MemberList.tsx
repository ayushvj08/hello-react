import { useContext, useEffect } from "react";
import MemberListItems from "./MemberListItems";
import { fetchMembers } from "../../context/members/actions";
import { MemberContext } from "../../context/members/context";

const MemberList = () => {
  const { dispatch } = useContext(MemberContext);
  useEffect(() => {
    fetchMembers(dispatch);
  }, []);
  return (
    <div className="sm:grid gap-4 grid-cols-4 mt-5">
      <MemberListItems />
    </div>
  );
};
export default MemberList;

// import { useEffect } from "react";
// import { API_ENDPOINT } from "../../config/constants";
import MemberListItems from "./MemberListItems";
export type Member = {
  id: number;
  name: string;
  email: string;
};
const MemberList = () => {
  return (
    <div className="sm:grid gap-4 grid-cols-4 mt-5">
      {/*To keep this file clean, I'll move all the logic to access the projects 
   from our app-state, to a new component ProjectListItems */}
      <MemberListItems />
    </div>
  );
};
export default MemberList;

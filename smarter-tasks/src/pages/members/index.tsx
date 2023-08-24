import MemberList from "./MemberList";
import NewMember from "./NewMember";

const Members = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Members</h2>
        <NewMember />
        {/* <NewProject /> */}
      </div>
      <MemberList />
      {/* <ProjectList /> */}
    </>
  );
};
export default Members;

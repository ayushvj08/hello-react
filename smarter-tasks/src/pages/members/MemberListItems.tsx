import { useEffect, useState } from "react";
import { Member } from "./MemberList";
import { API_ENDPOINT } from "../../config/constants";

const MemberListItems = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetchMembers();
  }, []);
  const fetchMembers = async () => {
    try {
      const token = localStorage.getItem("authToken") ?? "";
      const response = await fetch(`${API_ENDPOINT}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      //   console.log(data);
      setMembers(data);
    } catch (error) {
      console.log("Error Fetching Members: ", error);
    }
  };

  const removeMember = async (id: number) => {
    try {
      const token = localStorage.getItem("authToken") ?? "";
      const response = await fetch(`${API_ENDPOINT}/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      //   console.log(data);
      if (data === 1) setMembers(members.filter((member) => member.id !== id));
    } catch (error) {
      console.log("Error Deleting Member: ", error);
    }
  };
  return (
    <>
      {members.map((member: Member) => (
        <div
          key={member.id}
          className="member group block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex justify-between justify-items-center	">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              {member.name}
            </h5>
            <svg
              onClick={() => removeMember(member.id)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="hidden group-hover:block w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
          <p className="mb-2 font-medium tracking-tight text-gray-500 dark:text-white">
            {member.email}
          </p>
        </div>
      ))}
    </>
  );
};

export default MemberListItems;

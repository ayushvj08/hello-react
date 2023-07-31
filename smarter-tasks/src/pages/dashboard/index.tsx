import React from "react";
import { useNavigate } from "react-router-dom";

interface UserDataProps {
  createdAt: string;
  email: string;
  id: number;
  name: string;
  organisation_id: number;
  updatedAt: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const user: UserDataProps = JSON.parse(
    localStorage.getItem("userData") || ""
  );

  const logoutUser = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken");
    navigate("/signin");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Dashboard
        </h1>
        <form>
          <div>
            <div>
              <label className="inline p-2 text-gray-700 font-semibold mb-2">
                Name:
              </label>
              <p className="inline p-2 text-gray-700 font-semibold mb-2">
                {user.name}
              </p>
            </div>
            <div>
              <label className="inline p-2 text-gray-700 font-semibold mb-2">
                Email:
              </label>
              <p className="inline p-2 text-gray-700 font-semibold mb-2">
                {user.email}
              </p>
            </div>
          </div>
          <p
            onClick={logoutUser}
            className="p-2 cursor-pointer"
            id="logout-link"
          >
            Logout
          </p>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;

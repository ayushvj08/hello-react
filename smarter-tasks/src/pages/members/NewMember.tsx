import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ThemeContext } from "../../context/theme";
import { API_ENDPOINT } from "../../config/constants";

// Then I'll import the useProjectsDispatch hook from projects context
type Inputs = {
  name: string;
  email: string;
  password: string;
};
const NewMember = () => {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  //   const [error, setError] = useState(null);

  // Then I'll call the useProjectsDispatch function to get the dispatch function for projects
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, email, password } = data;

    // Next, I'll call the addProject function with two arguments:
    //`dispatchProjects` and an object with `name` attribute.
    // As it's an async function, we will await for the response.
    // const response = await addProject(dispatchProjects, { name });
    try {
      const token = localStorage.getItem("authToken") ?? "";
      const response = await fetch(`${API_ENDPOINT}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      console.log(data);
      // setMembers(data);
      if (response.ok) {
        setIsOpen(false);
      } else {
        // Or I'll set the error.
        // setError(response.error as React.SetStateAction<null>);
      }
    } catch (error) {
      console.log("Error Fetching Members: ", error);
    }
    // Then depending on response, I'll either close the modal...
  };
  return (
    <>
      <button
        id="new-member-btn"
        type="button"
        onClick={openModal}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        New Member
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`${theme} dark:bg-gray-900 dark:border-gray-700 w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"`}
                >
                  {/* className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"> */}
                  <Dialog.Title
                    as="h3"
                    className="dark:text-gray-300 text-lg font-medium leading-6 text-gray-900"
                  >
                    Create new member
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {/* I'll show the error, if it exists.*/}
                      {/* {error && <span>{error}</span>} */}
                      <input
                        type="text"
                        placeholder="Enter Member name..."
                        autoFocus
                        {...register("name", { required: true })}
                        className={`dark:bg-gray-700 dark:text-gray-100 w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                          errors.name ? "border-red-500" : ""
                        }`}
                      />
                      {errors.name && (
                        <span className="block text-red-500">
                          This field is required
                        </span>
                      )}

                      <input
                        type="email"
                        placeholder="Enter Member email..."
                        autoFocus
                        {...register("email", { required: true })}
                        className={`dark:bg-gray-700 dark:text-gray-100 w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                          errors.email ? "border-red-500" : ""
                        }`}
                      />
                      {errors.email && (
                        <span className="block text-red-500">
                          This field is required
                        </span>
                      )}

                      <input
                        type="text"
                        placeholder="Enter Member Password..."
                        autoFocus
                        {...register("password", { required: true })}
                        className={`dark:bg-gray-700 dark:text-gray-100 w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
                          errors.password ? "border-red-500" : ""
                        }`}
                      />
                      {errors.password && (
                        <span className="block text-red-500">
                          This field is required
                        </span>
                      )}

                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Submit
                      </button>
                      <button
                        id="create-member-btn"
                        type="submit"
                        onClick={closeModal}
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default NewMember;

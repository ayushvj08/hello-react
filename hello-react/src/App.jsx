import TaskCard from "./TaskCard";
import "./TaskCard.css";

// function App() {
//   return (
//     <>
//       <h1 className="texl-2xl font-bold my-4"> Smarter Task</h1>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="">
//           <h1 className="text-xl font-bold my-2">pending</h1>
//           <TaskCard
//             title="Build your website with Static content"
//             dueDate="10th April"
//             assigneeName="Rohit S"
//           />
//           <TaskCard
//             title="Add a blog"
//             dueDate="22nd March"
//             assigneeName="Rohit M"
//           />
//           <h3 className="bg-gray-200 text-black rounded">+ New Task</h3>
//         </div>
//         <div className=" radius-5 h-full">
//           <h1 className="text-xl font-bold my-2">done</h1>
//           <TaskCard
//             title="Basic html5"
//             completedAtDate="10th April"
//             assigneeName="Rohit M"
//           />
//           <TaskCard
//             title="Nodejs basic"
//             completedAtDate="20th April"
//             assigneeName="Ajay S"
//           />
//         </div>
//       </div>
//     </>
//   );
// }

const pps = {
  title: "Build website with static content",
  dueDate: "10th April",
  assigneeName: "Rohit S",
};

function App() {
  return (
    <>
      <div className="container-div w-4/5 md:w-3/5 mt-12 mx-auto">
        <h1 className="text-3xl text-gray-600 font-bold my-2">Smarter Task</h1>
        <p className="my-2 text-xl">
          Project: Graduation Final Year Project (Revamp College Website)
        </p>
        <section className="flex flex-row flex-wrap justify-between font-bold mt-4">
          <div className="border-2 border-gray-500 md:w-5/12 rounded-3xl p-4 pb-32 mb-4">
            <h1 className="text-center text-gray-500 text-2xl">pending</h1>
            <TaskCard {...pps} />
            <TaskCard
              title="Add Blog"
              dueDate="22nd March"
              assigneeName="Rohit M"
            />

            <div className="bg-gray-300 p-2 rounded">
              <h3 className="font-semibold text-xl text-gray-500 ">
                + New Task
              </h3>
            </div>
          </div>
          <div className="border-2 border-gray-500 md:w-5/12 rounded-3xl p-4">
            <h1 className="text-center text-gray-500 text-2xl">done</h1>
            <TaskCard
              title="Design the mockup"
              completedAtDate="10th April"
              assigneeName="Rohit M"
            />
            <TaskCard
              title="Get Approval from principal"
              completedAtDate="20th April"
              assigneeName="Ajay S"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

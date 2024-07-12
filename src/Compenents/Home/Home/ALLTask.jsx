import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RingLoader } from "react-spinners";
import TaskTable from "./TaskTable";

const ALLTask = () => {
  const axiosSecure = useAxiosSecure();

  // tanstack query and axios for fetch data
  const { data: tasks, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axiosSecure.get("/tasks");
      return data;
    },
    queryKey: ["all-task"],
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <RingLoader className="" color="#1E62D5" />
      </div>
    );
  }
  console.log(tasks);
  return (
    <section className="mt-10">
      <div>
        <h2 className="text-center font-bold font-playwrite-hr text-3xl underline text-[#55E6A5]">
          All Task
        </h2>
     
        <div className="overflow-x-auto md:px-10 mt-10">
          <table className="table text-lg">
            {/* head */}
            <thead className="bg-[#02EBDD] text-white">
              <tr>
                <th>SL</th>
                <th>Task title</th>
                <th>Task Description</th>
                <th>Task Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                   {/* map all data */}
                   {
                    tasks?.map((task,idx)=><TaskTable
                    key={task._id}
                    idx={idx}
                    task={task}
                    ></TaskTable>)
                   }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ALLTask;

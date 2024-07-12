import { useQuery } from "@tanstack/react-query";
import { FaXmark } from "react-icons/fa6";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RingLoader } from "react-spinners";

const TaskDetails = ({id}) => {
    const axiosSecure=useAxiosSecure()
    // get data by id
    const {data:task,isLoading}=useQuery({
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/tasks/${id}`)
            return data;
        },
        queryKey:['task']
    })
    if (isLoading) {
        return (
          <div className="flex justify-center items-center">
            <RingLoader className="" color="#1E62D5" />
          </div>
        );
      }
      console.log(task.status)
      const {task_title,task_description,status}=task
  return (
    <div className="modal-box max-w-xl bg-[#0C1117] border shadow-lg shadow-[#55E6A5] md:px-10">
      {/* closing button */}
      <div className="flex justify-end">
        <form method="dialog">
          <button className="p-2 text-xl text-black rounded-full border bg-red-600 border-red-600">
            <FaXmark />
          </button>
        </form>
        
      </div>
      {/*data start */}
      <div className="mt-5 text-left">
        <h2 className="text-2xl"><span className="text-[#02EBDD]">Task Name:</span> {task_title}</h2>
        </div>
        <p><span className="text-[#02EBDD]">description: </span>{task_description}</p>
        <p className=""><span className="text-[#02EBDD]">status: </span>{status?'Completed':'Not Complete'}</p>
    </div>
  );
};

export default TaskDetails;

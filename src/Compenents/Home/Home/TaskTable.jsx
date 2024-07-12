import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaEye, FaPen, FaTrash } from "react-icons/fa6";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import TaskUpdate from "../TaskUpdate";

const TaskTable = ({ task, idx }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  // destructuring object
  const { _id, task_title, task_description, status } = task;
  //update
  const { mutateAsync:updateAsync } = useMutation({
    mutationFn: async()=>{
        const {data}=axiosSecure.patch(`/tasks/${_id}`)
        return data
    },
    onSuccess:(data)=>{
        console.log(data)
    }
  });
const handleUpdate=(id)=>{
mutateAsync({id})
}



  // delete
  const { mutateAsync } = useMutation({
    mutationFn: async ({ id }) => {
      const { data } = await axiosSecure.delete(`/tasks/${id}`);
      return data;
    },
    onSuccess: (data) => {
      if (data.deletedCount > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success",
        });
        queryClient.invalidateQueries({ queryKey: ["all-task"] });
      }
    },
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutateAsync({ id });
      }
    });
  };

  return (
    <tr className="even:bg-[#02EBDD] text-white">
      <th>{idx + 1}</th>
      <td>{task_title}</td>
      <td>{task_description}</td>
      <td>{status ? "completed" : "Not completed"}</td>
      <td className="flex items-center gap-4 cursor-pointer">
        {/* view button */}
        <FaEye
          onClick={()=>handleUpdate(_id)}
          className="text-orange-800 cursor-pointer"
        />
        {/* edit button */}
        <FaPen
          onClick={() => document.getElementById(_id).showModal()}
          className="text-orange-800 font-bold cursor-pointer"
        />
        {/* delete button */}
        <FaTrash
          onClick={() => handleDelete(_id)}
          className="bg-red-600 p-2 text-3xl rounded-md"
        />
      </td>
      <dialog id={_id} className="modal">
        <TaskUpdate task={task}></TaskUpdate>
      </dialog>
    </tr>
  );
};

export default TaskTable;

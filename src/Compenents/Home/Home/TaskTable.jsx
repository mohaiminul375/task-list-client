import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaEye, FaPen, FaTrash } from "react-icons/fa6";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import TaskUpdate from "../TaskUpdate";
import TaskDetails from "./TaskDetails";

const TaskTable = ({ task, idx }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  // destructuring object
  const { _id, task_title, task_description, status } = task;
  //update
  

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
          onClick={() => document.getElementById(`details${_id}`).showModal()}
          className="text-orange-800 cursor-pointer"
        />
        {/* edit button */}
        <FaPen
          onClick={() => document.getElementById(_id
          ).showModal()}
          className="text-orange-800 font-bold cursor-pointer"
        />
        {/* delete button */}
        <FaTrash
          onClick={() => handleDelete(_id)}
          className="bg-red-600 p-2 text-3xl rounded-md"
        />
      </td>
      {/* task update modal */}
      <dialog id={_id} className="modal">
        <TaskUpdate task={task}></TaskUpdate>
      </dialog>
      {/* view Details */}
      <dialog id={`details${_id}`} className="modal">
        <TaskDetails id={_id}></TaskDetails>
      </dialog>
    </tr>
  );
};

export default TaskTable;

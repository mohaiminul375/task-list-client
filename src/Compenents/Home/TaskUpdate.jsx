import { FaXmark } from "react-icons/fa6";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const TaskUpdate = ({ task }) => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();
  const { _id, task_title, task_description, status } = task;
  console.log(status);
  // handle checkbox
  const [checked, setChecked] = useState(status);
  console.log(checked);
  
  const {mutateAsync} = useMutation({
    mutationFn: async ({ _id, update_info }) => {
      const { data } =await axiosSecure.patch(`/tasks/${_id}`,update_info);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      if(data.modifiedCount){
        queryClient.invalidateQueries({ queryKey: ["all-task"] });
        toast.success('data update successfully')
      }
    },
  });
  //   react hook form
  const { register, handleSubmit } = useForm();
  const onSubmit = (update_info) => {
    // let update_info.status=;

    update_info.status = checked;
    console.log(update_info);
    mutateAsync({_id,update_info})
  };
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
      {/* from start */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="text-[#00FFEE]">Task Title</span>
          </label>
          <input
            name="task_tile"
            type="text"
            placeholder="your task title"
            className="input input-bordered text-black"
            required
            defaultValue={task_title}
            {...register("task_title")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-[#00FFEE]">Description</span>
          </label>
          <input
            name="task_description"
            type="text"
            placeholder="your task description"
            className="input input-bordered text-black"
            required
            defaultValue={task_description}
            {...register("task_description")}
          />
          <div className="mt-5 flex items-center gap-6">
            <p>Mark as complete</p>
            <input
              defaultChecked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              type="checkbox"
              className="checkbox bg-[#55E6A5] border-2 border-[#55E6A5]"
              //   {...register("status")}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="p-2 font-bold border-2 border-[#55E6A5] hover:text-black rounded-md hover:bg-[#55E6A5] ">
            Submit
          </button>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default TaskUpdate;

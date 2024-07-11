import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";

const TaskCreateForm = () => {
  const { user } = useContext(AuthContext);
  // import axios
  const axiosSecure = useAxiosSecure();
  // handle checkbox
  const [checked, setChecked] = useState(false);
  console.log(checked);

  const { mutateAsync } = useMutation({
    mutationFn: async ({ task_info }) => {
      const { data } = await axiosSecure.post("/tasks", task_info);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.insertedId) {
        toast.success("Successfully toasted!");
      }
    },
  });

  // handle input by react hook form
  const { register, handleSubmit } = useForm();
  const onSubmit = (task_info) => {
    task_info.email = user?.email ;
    if (checked) {
      task_info.status = "Completed";
    } else {
      task_info.status = "Not Complete";
    }

    console.log(task_info);
    mutateAsync({ task_info });
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
            {...register("teak_description")}
          />
          <div className="mt-5 flex items-center gap-6">
            <p>Mark as complete</p>
            <input
              onChange={(e) => setChecked(e.target.checked)}
              type="checkbox"
              className="checkbox bg-[#55E6A5] border-2 border-[#55E6A5]"
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

export default TaskCreateForm;

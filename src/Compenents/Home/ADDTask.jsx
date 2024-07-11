import { FaPlus } from "react-icons/fa";
import TaskCreateForm from "./TaskCreateForm";

const ADDTask = () => {
  return (
<>
    <section>
      <div className=" text-xl text-[#00FFEE] font-playwrite-hr">
        <div className="flex justify-center">
        <button
         onClick={()=>document.getElementById('input_modal').showModal()}
        className="flex items-center justify-center p-2 border-2 rounded-full border-[#00FFEE] hover:bg-[#00FFEE] hover:text-black">
          <FaPlus /> Add Your Tas
        </button>
        </div>
        <div>
            
        </div>
      </div>
      {/*input field modal */}
      
    </section>
    <dialog id="input_modal" className="modal">
        <TaskCreateForm></TaskCreateForm>
      </dialog>
    </>
  );
};

export default ADDTask;

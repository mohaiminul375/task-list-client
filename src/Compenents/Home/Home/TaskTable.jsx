import React from 'react';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa6';

const TaskTable = ({task,idx}) => {
    console.log(task)
    // destructuring object
    const {task_title,task_description,status}=task;
    return (
        <tr className='even:bg-[#02EBDD] text-white'>
        <th>{idx+1}</th>
        <td>{task_title}</td>
        <td>{task_description}</td>
        <td>{status}</td>
        <td className='flex items-center gap-4'>
          {/* view button */}
          <FaEye className='text-orange-800'/>
          {/* edit button */}
          <FaPen className='text-orange-800 font-bold'/>
          {/* delete button */}
           <FaTrash className='bg-red-600 p-2 text-3xl rounded-md'/>
        </td>
      </tr>
    );
};

export default TaskTable;
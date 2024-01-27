import React, { useContext, useState } from "react";
import TaskList from "./TaskList";
import TaskAction from "./TaskAction";
import Modal from "./Modal";
import toast from "react-hot-toast";
import { allData } from "../../data/allData";


const TaskBoard = () => {

     

    //modal show hide state
    const [showModal,setShowModal] = useState(false)

    //taskData set state
    const [tasks,setTasks] = useState(allData)
    // console.log(tasks)

   

    function handleShowModal(){
        setShowModal(true)

        //clear taskData
        // const removeItem = taskData.filter(task => task.id !== editData.id)
        // setTaskData([...removeItem])


    }

    function handleCloseModal(){
        setShowModal(false)
    }

    function handleSave(newTask){
        setTasks(tasks.map(task =>{
            if(task.id === newTask.id){
                return newTask
            }
            return task
        }))
        setShowModal(false)
        toast.success("User Saved Successfully")
    }

  return (
    <>
    {
        showModal && <Modal
         onClose={handleCloseModal}
         onSave={handleSave}
         />
    }
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction setShoModal={setShowModal} />
          <TaskList tasks={tasks} setShowModal={setShowModal}/>
        </div>
      </div>
    </section>
    </>
  );
};

export default TaskBoard;

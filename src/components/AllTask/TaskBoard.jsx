import React, { useContext, useState } from "react";
import TaskList from "./TaskList";
import TaskAction from "./TaskAction";
import Modal from "./Modal";
import toast from "react-hot-toast";
import { TaskContext } from "../../context";
import { allData } from "../../data/allData";


const TaskBoard = () => {

    const {taskData,setTaskData} = useContext(TaskContext)

    //modal show hide state
    const [showModal,setShowModal] = useState(false)

    //taskData set state
    const [tasks,setTasks] = useState(allData)
    console.log(tasks)

  

    function handleEditModal(){
        setShowModal(true)
        setTaskData(null)
    }

    function handleCloseModal(){
        setShowModal(false)
    }

    function handleSave(newTask,isAdd){
        if (isAdd) {
            setTasks([...tasks, newTask]);
            toast.success("User Saved Successfully")
        } else {
            setTasks(tasks.map(task =>{
                if(task.id === newTask.id){
                    toast.success("Update Successfully")
                    return newTask
                }
                return task
            }))
        }
        
        setShowModal(false)
        
    }

    function handleDelete(taskId){
        const deletedTask = tasks.filter(task => task.id !== taskId)
        setTasks(deletedTask)
    }

    function handleAllDelete(){
        tasks.length = 0
        setTaskData([
            ...tasks
        ])
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
          <TaskAction editModal={handleEditModal} AllDelete={handleAllDelete} />
          {
            tasks.length !== 0 ? (<TaskList tasks={tasks} setShowModal={setShowModal} onDelete={handleDelete} />) : (<p className="just justify-center flex font-bold text-3xl">Please Add Task !</p>)
          }
          
        </div>
      </div>
    </section>
    </>
  );
};

export default TaskBoard;

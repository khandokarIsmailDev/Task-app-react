import React,{useState} from "react";
import "./index.css";
import Page from "./Page";
import { TaskContext } from "./context";
import toast, { Toaster } from "react-hot-toast";


const App = () => {
  const [taskData, setTaskData] = useState(null);

  return (
    <>
    <TaskContext.Provider value={{taskData,setTaskData}}>
      <Toaster position="top-center" reverseOrder={false} />
      <Page />
      </TaskContext.Provider>
    </>
  );
};

export default App;

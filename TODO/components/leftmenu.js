import { useState } from "react";
import CreateTask from "./createTaask";
import 'bootstrap/dist/css/bootstrap.min.css';
import  todologo from  "./My project (13).png";



function LeftMenu() {

  const [modal, setModal] = useState(false);
  const [input, setInput] = useState(" ");

  // const [addtask, setaddTask] = useState([]);
  // function additem() {
  //   if (!input) {
  //   } else {
  //     setaddTask([...addtask, input]);
  //     setInput(" ");
  //   }
  // }

 
  const toggle = () => setModal(!modal);

  

  return (
    <>

    
      <h3 className="heading">TO-DO LIST</h3>
      <br />
          <div><img src={todologo} alt="logo" className="img-fluid" /></div>
          <br />
          <br />
      <div className="row">
        <div className="col-12 today">
          <a href="#">
            Today's tasks <span></span>
          </a>
        </div>
        <div className="col-12 today">
          <a href="#">ALL tasks</a>
        </div>
        <div className="col-12 today">
          <a href="#">Important tasks</a>
        </div>
        <div className="col-12 today">
          <a href="#">Compleated tasks</a>
        </div>
        <div className="col-12 today">
          <a href="#">Uncompleated tasks</a>
        </div>
      </div>
      
    </>
  );
}

export default LeftMenu;

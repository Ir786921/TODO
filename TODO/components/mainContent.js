import { useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import CreateTask from "./createTaask";

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`;



//Button Backgroundcolor change Function
function Content() {

  const [tasklist, setTasklist] = useState([]);
  // const[complete ,setComplete] = useState(tasklist)
  

const[formdata,setFormData] =  useState({
  title: " ",
  date: " ",
  Description: " "
 });
const[count,setCount]  = useState(0);
const[checkimp,setCheckimp] = useState(false);
const[checkcomp,setCheckcomp] = useState(false);






function changeHandle(e){
  
  setFormData((prevformdata)=>{
    return{
      ...prevformdata,
      
      [e.target.name]:e.target.value
   
    }
  })
}



  let black = "#020000";
 

  const [changeText, setChangeText] = useState("Uncompleated");
  const[searchTask,setSearchTask] = useState(" ");
  const [bgcolor, setBgcolor] = useState("#DEB887");
  const [changedColor, setChangedColor] = useState(black);
 
  
 
  function bgcolorChange() {
    setBgcolor( "#ffb2b6 ");
  }

 
  

  const changeStyle = () => {
    setChangedColor(
      changedColor === "#020000"
        ? "#ff0000"
        : changedColor === "#ff0000"
        ? "#020000"
        : "#ff0000"
    );
  };
  let newtodoitem = {
    title: formdata.title,
    date: formdata.date,
    description: formdata.Description
   
   };
  function handleClick(e) {
     e.preventDefault();
    let Updatetodoarr = [...tasklist];
    Updatetodoarr.push(newtodoitem);
    setTasklist(Updatetodoarr);
    
    setCount(count + 1);


  }
 


  

 
   
  function deleteTask()
  {
    let reducetodo = [...tasklist]
    reducetodo.splice(0,1)
    setTasklist(reducetodo)
    setCount(count -1)
  }




function clickimp(){
  setCheckimp(!checkimp)
}



const handleChange = (e) => {
  e.preventDefault();
  setSearchTask(e.target.value);
};

if (searchTask.length > 0) {
    tasklist.filter((item) => {
    return item.title.match(searchTask);
});
}












 


  // const result1 = tasklist.map((em)=>{<h1>{em.title}</h1>});

  // const handleClick = ()=>
  // {
  //     let taskobj = {
  //     title:inputtitle,
  //     date:inputdate,
  //     description:inputdesc
  // }
  // saveTask(taskobj);

  // }

  return (
    <>
      {/* nav section of main content start here */}

      <div className="container-fluid">
        <nav className="navbar">
          <div className="searchbar">
            <form className="form">
              <input type="search" placeholder="Search..." id="search"  value={searchTask} onChange = {handleChange} />
              <button type="submit" id="submit">
                <i className="bi bi-search" ></i> 
              </button>
            </form>
          </div>
          <div className="time">{date}</div>
          <div className="button">
            <button
              type="button"
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              Add new task
            </button>
          </div>
        </nav>
      </div>
      <br />
      <h3>All Tasks (<span>{count}</span>)</h3>
      {/* nav section end here */}
      <br />
      {/* list,grid view and sorting of task start here */}
      <div className="view">
        <div className="listview">
          <button className="list">
            <i className="bi bi-list-ul"></i>
          </button>
          &nbsp;&nbsp;&nbsp;
          <button className="list">
            <i className="bi bi-grid"></i>
          </button>
        </div>
        <div>
          <select className="sort">
            <option value={0}>Sort</option>
            <option value={1}>Order Added</option>
            <option value={2}>Earlier first</option>
            <option value={3}>later first</option>
            <option value={4} >compleated</option>
            <option value={5}>Uncompleated</option>
          </select>
        </div>
      </div>
      {/* End Here */}
      <br />
      <hr />
      <div>
 
             
         {tasklist && tasklist.map(({ title, date, description,index}) => {
          return (
            <>
              <div className="firstTask mt-3" key={index}>
                <h4 className="task1">{title}</h4>
                <span className="date">{date}</span><br />
                <p className="desc mt-2">{description}</p>
                <span className="functionalities">
                  <button
                    className="btn compleated"
                    value={changeText}
                    style={{ background: bgcolor }}
                    onClick={() => {
                      setChangeText("Compleated")
                      bgcolorChange();
                    } }
                  >
                    {changeText}
                  </button>
                  <button className="star" key={index} >
                    <i
                      className="bi bi-star"
                      id="starColor"
                      key={index}
                      style={{ color:checkimp?"#ff0000":"#020000" }}
                    ></i>
                  </button>
                  <button
                    type="button"
                    className="star"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                  <button
                    type="button"
                    className="star"
                    data-bs-toggle="modal"
                    data-bs-target="#edit"
                  >
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>
                </span>
                <br />
                
              </div>
            </>
          );
        })}
      </div>




      {/* ADD TASK MODAL START HERE */}
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Add a Tasks</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
              
                <label htmlFor="title">
                  Title <br />
                  <input
                    type="text"
                    id="title"
                    name="title"
                   
                    className="modal-input"
                    required
                    value={formdata.title}
                    onChange={changeHandle}
                  />
                </label>
                <br />
                <label htmlFor="date">
                  Date <br />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="modal-input"
                    required
                    value={formdata.date}
                    onChange={changeHandle}
                  />
                </label>
                <br />
                <label htmlFor="Description">
                  Description <br />
                  <textarea
                    cols={50}
                    rows={3}
                    id="Description"
                    name="Description"
                    placeholder="e,g study for the test"
                    className="modal-input-area"
                    required
                    value={formdata.Description}
                    onChange={changeHandle}
                  ></textarea>
                </label>
                <br />
                <label htmlFor="important">
                  <input type="checkbox" id="important"  checked={checkimp} onChange={clickimp}  name="important" />
                  &nbsp;&nbsp;&nbsp;Mark as Important
                </label>
                <br />
                 <br />
                <button
                type="submit"
                value="submit"
                className="modelButton"
                onClick={handleClick}
                data-bs-dismiss="modal">Submit</button>
                
              
              </form>
            </div>
          </div>
        </div>
      </div>



      {/* delete TASK MODAL START HERE */}

      <div className="modal fade" id="deleteModal">

      <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-headder">
              <h5 className="ml-2">Delete task</h5>
            </div>
            <div className="modal-body">
              <p>This task will be deleted Permanently </p>
            </div>
            <div className="modal-footer">
              <button className="btn" data-bs-dismiss="modal">
                cancel
              </button>
              <button className="btn btn-danger" data-bs-dismiss="modal" onClick={deleteTask}>Delete</button>
            </div>
          </div>
        </div>
      </div>

      

    </>
  );
}

export default Content;

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React from 'react';
import { useState } from 'react';
import Content from './mainContent';

 function CreateTask({modal,toggle,save}) {

    const [inputtitle,setInputtitle] = useState(" ");
    const [inputdesc ,setInputdesc] = useState(" ");
    const [inputdate,setInputdate] = useState(" ");

    const handleClick = ()=>
    {
        let taskobj = {
        title:inputtitle,
        date:inputdate,
        description:inputdesc
    }
    save(taskobj);
        
    }

  return (
    
    <div>

    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add a task</ModalHeader>
      <ModalBody>
      <label for="title">
                Title <br />
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="modal-input"
                  value={inputtitle}
                  onChange={(e)=>
                  {
                    setInputtitle(e.target.value)
                  }}
                  />
        </label>
        <br/>
        <label for="Date">
                Date <br />
                <input
                  type="date"
                  id="Date"
                  name="Date"
                  className="modal-input"
                  value={inputdate}
                  onChange={(e)=>
                  {
                    setInputdate(e.target.value)
                  }}
                />
              </label>
              <br/>
              <label for="Description">
                Description <br />
                <textarea
                  cols={50}
                  rows={3}
                  value={inputdesc}
                  onChange={(e)=>
                  {
                    setInputdesc(e.target.value)
                  }}
                  className="modal-input-area"
                ></textarea>
              </label>
              <br/>
              <label for="important">
                <input type="radio" id="important" name="important" />
                &nbsp;&nbsp;&nbsp;Mark as Important
              </label>
              <br />
              <br />

              <label for="compleated">
                <input type="radio" id="compleated" name="important" />
                &nbsp;&nbsp;&nbsp;Mark as Important
              </label>
              <br/>
      </ModalBody>
      <ModalFooter>
        <Button  className='modelButton'  color="primary" onClick={handleClick}>
          Add task
        </Button>
        {/* <Button color="secondary" onClick={toggle}>
          Cancel
        </Button> */}
      </ModalFooter>
    </Modal>
  </div>


  )
}
export default CreateTask;


const UserDetails = (props) => (
  <>
    <h3 className="heading">Hi,User!</h3>
    <br />
    <div className="profile"><img src={props.image}/></div>
    <br />
    <div className="TaskBar">
      <div className="alltasks">
        <h5 className="text-start">
          All tasks
          <span className="counter">0/0</span>
        </h5>
      </div>
      <progress className="progress" max="100" value="80"></progress>
    </div>
    <br />
    <hr />
    <div className="todayTask">
      <h6 className="text-start">Today's tasks</h6>
    </div>
    <hr />
    <button type="button" className="btn btn-danger">
      Delete all Data
    </button>
    <br />
    <br />

    <button type="button" className="btn btn-outline-success">
      Projected by imran raza
    </button>
  </>
);

export default UserDetails;

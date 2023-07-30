import LeftMenu from "./leftmenu.js";
import UserDetails from "./userDetails.js";
import Content from "./mainContent.js";
import "bootstrap/dist/css/bootstrap.min.css";
const Layout = () => (
  <>
    <div className="container-fluid">
      <div className="container-sm">
        <div className="row">
          <div className="col-sm-2 First">
            <LeftMenu />
          </div>
          <div className="col-sm-8 Second">
            <Content />
          </div>
          <div className="col-sm-2 Third">
            <UserDetails />
          </div>
        </div>
      </div>
    </div>
  </>
);
export default Layout;

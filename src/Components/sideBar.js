const SideBar = () => {
  return (
    <div className="sideBarContainer">
      <div>
        <h2 className="welcomeHeading">Welcome,</h2>
      </div>{" "}
      <div>
        <h2 className="welcomeText">Andy Repp</h2>
      </div>
      <div>
        <h2 className="sideBarHeading">Metrics</h2>
      </div>{" "}
      <div className="sideBarItemContainer">
        <h2 className="sideBarItemText">Overview</h2>
      </div>
      <div className="sideBarItemContainer">
        <h2 className="sideBarItemText">Detailing</h2>
      </div>
      <div className="sideBarItemContainer">
        <h2 className="sideBarItemText">Calls</h2>
      </div>
      <div>
        <h2 className="sideBarHeading">Information</h2>
      </div>{" "}
      <div className="sideBarItemContainer">
        <h2 className="sideBarItemText">About profiles</h2>
      </div>{" "}
      <div className="sideBarItemContainer">
        <h2 className="sideBarItemText">Detailing targets</h2>
      </div>
    </div>
  );
};

export default SideBar;

import { useState } from "react";

const NextCall = () => {
  return (
    <div className="nextCallContainer">
      <h3>Next call</h3>
      <div>
        <div className="nextCallKeyContainer">
          <h3>Date:</h3>
        </div>{" "}
        <div className="nextCallValueContainer">
          <h3 className="nextCallValueText">Tommorrow, 3PM 18 February 2023</h3>
        </div>
      </div>{" "}
      <div>
        <div className="nextCallKeyContainer">
          <h3>Account:</h3>
        </div>{" "}
        <div className="nextCallValueContainer">
          <h3 className="nextCallValueText">Dr.Clinton Ackerman</h3>
        </div>
      </div>{" "}
      <div>
        <div className="nextCallKeyContainer">
          <h3>Speciality:</h3>
        </div>{" "}
        <div className="nextCallValueContainer">
          <h3 className="nextCallValueText">
            Respiratory therapist Assistive therapy
          </h3>
        </div>
      </div>{" "}
      <div>
        <div className="nextCallKeyContainer">
          <h3>Profiling:</h3>
        </div>{" "}
        <div className="nextCallValueContainer">
          <h3 className="nextCallValueText">Confident</h3>
        </div>
      </div>
    </div>
  );
};

export default NextCall;

import React from "react";
import PickGroup from "../schledule/schleduleBlocks/PickGroup";
import PickSubject from "../schledule/schleduleBlocks/PickSubject";
import LastMarks from "./generalBlocks/LastMarks";
import LastMisses from "./generalBlocks/LastMisses";
import TasksForGeneral from "./generalBlocks/TasksForGeneral";
class GeneralPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getData = async () => {
    fetch("/api/getAll")
      .then((res) => res.json())
      .then((jsondata) => console.log(jsondata));
  };

  render() {
    return (
      <>
        <PickGroup />
        <PickSubject />

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <TasksForGeneral />
          <LastMarks />
          <LastMisses />
        </div>
      </>
    );
  }
}

export default GeneralPage;

import React from "react";
import CardsOfScleduleAndTasks from "./schleduleBlocks/CardsOfScleduleAndTasks";
import PickDate from "./schleduleBlocks/PickDate";
import PickGroup from "./schleduleBlocks/PickGroup";
import PickSubject from "./schleduleBlocks/PickSubject";

class Schledule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: "Иб-041",
      nowDate: new Date(),
      events: [
        {
          id: 1,
          date: 'Понедельник 2020, 10, 1',
          nameOfSubjesct: "Физика",
          task: "с 81. &4, №3,5,6,8,",
        },
        {
          id: 2,
          date: 'Вторник 2020, 10, 2',
          nameOfSubjesct: "Математика",
          task: "с 8. &3, №1,2,4",
        },
        {
          id: 3,
          date: 'Стреда 2020, 10, 3',
          nameOfSubjesct: "Астрономия",
          task: "Конспект лекций",
        },
      ],
    };
  }

  render() {
    return (
      <div style={{margin:'10px'}}>
        <PickGroup />
        <PickSubject />
        <PickDate />
        <CardsOfScleduleAndTasks events={this.state.events} />
      </div>
    );
  }
}

export default Schledule;

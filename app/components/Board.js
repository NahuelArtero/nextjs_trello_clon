import React from 'react'
import List from './List';
import Card from "./Card";


const toDoList = [
  {
    textTask: "implement login with Auth0",
  },
  {
    textTask: "Add nav bar buttons",
  },
];
const inProgressList = [
    {
      textTask: "implement Banner",
    },
  ];
  const doneList = [
    {
      textTask: "Add wireframe",
    },
  ];

const Board = () => {

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4"> Project development </h1>
     <div className="flex flex-1 gap-4">
      <List title="To do">
        {toDoList.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </List>
      <List title="Doing">
        {inProgressList.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </List>
      <List title="Done">
        {doneList.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </List>
      </div>
    </div>
  )
}

export default Board

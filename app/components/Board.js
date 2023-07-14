"use client";
import React, { useState } from "react";
import List from "./List";
import Card from "./Card";

const toDoList = [
  {
    textTask: "implement login with Auth0",
    id: "task-1",
  },
  {
    textTask: "Add nav bar buttons",
    id: "task-2",
  },
];
const inProgressList = [
  {
    textTask: "implement Banner",
    id: "task-3",
  },
];
const doneList = [
  {
    textTask: "Add wireframe",
    id: "task-4",
  },
];

const Board = () => {
  const [lists, setLists] = useState({
    toDoList,
    inProgressList,
    doneList,
  });
  const [dragged, setDragged] = useState(null);
  
  function handleDrop(event) {

    const list = event.currentTarget.dataset.list
    const listsClone = structuredClone(lists);
    const newList = listsClone[dragged.list].filter(
      (item) => item.id !== dragged.data.id
    );

    listsClone[dragged.list] = newList;
    listsClone[list].push(dragged.data);

    setLists(listsClone);
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4"> Project development </h1>
      <div className="flex flex-1 gap-4">
        <List title="To do" handleDrop={handleDrop} id="toDoList">
          {lists.toDoList.map((item) => (
            <Card {...item} key={item.id} setDragged={setDragged} />
          ))}
        </List>
        <List title="Doing" handleDrop={handleDrop} id="inProgressList">
          {lists.inProgressList.map((item) => (
            <Card {...item} key={item.id} setDragged={setDragged} />
          ))}
        </List>
        <List title="Done" handleDrop={handleDrop} id="doneList">
          {lists.doneList.map((item) => (
            <Card {...item} key={item.id} setDragged={setDragged} />
          ))}
        </List>
      </div>
    </div>
  );
};

export default Board;

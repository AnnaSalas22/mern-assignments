import React, {useState} from "react"
import './App.css';

const App = (props) => {
  const [newToDo, setNewToDo] = useState("");
  const [toDos, setToDos] = useState ([]);

  const handleNewToDoSubmit=(event) => {
      event.preventDefault();

      if (newToDo.length == 0) {
        return;
      }

      const toDoItem = {
        text: newToDo,
        complete: false
      };

      setToDos([...toDos,  toDoItem]);
      setNewToDo("");
  };

  const handleToDoDelete = (delIdx) => {
    const filteredToDos = toDos.filter((toDos, i) => {
      return i !==  delIdx;
    });

    setToDos(filteredToDos);
  };

  const handleToggleComplete = (idx) => {
    const updatedToDos = toDos.map((toDos, i) => {
      if (idx == i) {
        toDos.complete = !toDos.complete;
      }

      return toDos;
    });
  }
  
  return (
      <div>
          <form onSubmit={(event) => {
             handleNewToDoSubmit(event);
          }}>
              <input className="box1" onChange={(event) => {
                  setNewToDo(event.target.value);
              }} 
              type="text"
              value={newToDo}
              />
              <div className="style">
                <button>Add</button>
              </div>
          </form>

          
            {toDos.map((toDo, i) => {
              return (
              <div key={i}>

                <span>{toDo.text}</span>

                <input className="box" onChange={(event) => {
                  handleToggleComplete(i);
                  
                }} checked = {toDos.complete} type="checkbox"/>

                <button className="delete" onClick={(event) => {
                  handleToDoDelete(i);
                }}>Delete</button>
              </div>
              );
            })}
      </div>
  );
}

export default App;

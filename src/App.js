import AddTodo from "./Components/AddTodo";
import Adduser from "./Components/Adduser";
import Heading from "./Components/Heading";
import TodoCount from "./Components/TodoCount";
import TodoList from "./Components/TodoList";
import Userslist from "./Components/Userslist";
// import { useState } from "react";

function App() {
  return (
    <div className="container text-center mt-5">
      {/* row 1 */}
      <div className="row">
      <div className="text-center"><Heading /></div>
        <div className="col-sm-6"><Adduser /></div>
        <div className="col-sm-6"><Userslist /></div>
      </div>
      {/* row 2 */}
      <div className="row mt-5">
        
        <div className="col-sm-4"><AddTodo /></div>
        <div className="col-sm-4"><TodoList /></div>
        <div className="col-sm-4"><TodoCount /></div>
      </div>
    </div>
  );
}

export default App;

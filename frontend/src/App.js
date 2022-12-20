import ToDo from "./components/todo"

function App() {
  return (
    <div className="App">
    
      <div className="container">

        <h1>Rogelio's To Do List</h1>

        <div className="top">
          <input type="text" placeholder="Add To Do Here" />

          <div className="add">Add</div>
        </div>

        <div className="list">
     
     <ToDo text="Hi" />

    </div>

  </div>

    </div>
  );
}

export default App;

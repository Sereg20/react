import React, {useState} from "react";
import UserList from "./components/UserList"
import UserForm from "./components/UserForm"
import "./styles/App.css"


function App() {

  let [developersUI, setDevelopers] = useState([
    {id: 1, name: "Sergey", surname: "Shnitko", position: "SAPUI5 Front-End Developert"},
    {id: 2, name: "Max", surname: "Kanavalov", position: "React Front-End Developert"},
    {id: 3, name: "Bob", surname: "Marti", position: "Angular Front-End Developert"}
  ]);

  function createUser(newUser) {
    setDevelopers([...developersUI, newUser]);
  }

  function deleteUser(userID) {
    const index = developersUI.findIndex(user => user.id === userID);
    developersUI.splice(index, 1);
    setDevelopers([...developersUI]);
  }

  return (
    <div className="App">
      <UserForm create={createUser}/>
      <UserList developers={developersUI} title="UI Developers" deleteUser={deleteUser}/>
    </div>
  );
}

export default App;

import "./App.css";
import Profile from "./component/Profile"
import Todo from "./component/Todo";
export default function App() {
  return (
    <div className="App">
      <div><Profile/></div>
      <div><Todo/></div>
      
    </div>
  );
}
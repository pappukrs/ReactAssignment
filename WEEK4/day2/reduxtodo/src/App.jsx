
import {store} from './redux/store'
import {incCount} from './redux/action' 



function App() {

  // const [count,setCount]=useState(0);

  const handleClick=()=>{
    // setCount(count+1)
    store.dispatch(incCount(1))
  }
  
  
  return(
    <div>
      <h1>count is { store.getState().count}</h1>
      <button onClick={handleClick}>Inc</button>
    </div>
  )
}

export default App;

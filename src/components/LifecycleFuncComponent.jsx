import { useEffect, useState } from "react"


const LifecycleFuncComponent = () => {

    const [counter, setCounter] = useState(7)
    const [inputValue, setInputValue] = useState(0)
    const [todos, setTodos] = useState([10])

    const [color, setColor] = useState("brown")
    // let counter = 7

    const increment = () => {
        setCounter(counter + 10)
    }
    const decreament = () => {
        setCounter(counter - 10)
    }
    const increase = () => {
        setCounter(counter + parseInt(inputValue))
    }
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const secondDecrease = () => {
        setCounter(counter - parseInt(inputValue))
    }
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10")
        .then(res => res.json())
        .then(data => {
            setTodos(data)
            console.log(data)
        })
    },[])
    
    return <div>
        counter : {counter}

        <br />
        <button onClick={increment}>Increment</button>
        <button 
            onClick={() => setCounter(counter + 10)}
        >Increment v2</button>
        <button onClick={decreament}>Decreament</button>
        <br />
        <input 
            type="text"
            style={{width: "100px"}}
            placeholder="Enter number"
            value={inputValue}
            onChange={handleChange}
        />
        <button onClick={increase}>Increase</button>
        <button onClick={secondDecrease}>Increase</button>

        <hr />

        <div style={{
            color: color
        }}>Text With Color</div>

        <button 
            onClick={() => setColor("green")}
        >change to green</button>
        
        <button 
            onClick={() => setColor("red")}
        >change to red</button>
        <div>
            <Todos todos={todos} />
        </div>
    </div>
}
function Todos({ todos }) {
    return (
      <div>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
    console.log(Todos)
  }

export default LifecycleFuncComponent

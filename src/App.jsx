import { useState } from "react";
import { Dropdown } from "./components/Dropdown";
import { Input } from "./components/Input";
import { DisplayDropdown } from "./components/DisplayDropdown";

const App = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [fieldType, setFieldType] = useState("password")
  const [btnText, setBtnText] = useState("Show")
  const [comment, setComment] = useState("")

  return (<>

    <Input 
      type="text"
      placeholder="Username"
      value = {username}
      onChange = {e => setUsername(e.target.value)}
      name="username"
    />
    
    <Input 
      type={fieldType}
      placeholder="Password"
      name="password"
      btnText={btnText}
      value = {password}
      onChange = {e => setPassword(e.target.value)}
      onMouseDown={() => {
        setFieldType("text")
        setBtnText("Hide")
      }}
      onMouseUp={() => {
        setFieldType("password") 
        setBtnText("Show")
      }}
    />
    <Input 
      type="text"
      placeholder="Comment"
      value = {comment}
      onChange = {e => setComment(e.target.value)}
      name="comment"
    />
    
    <hr /> <hr /> <hr />

      <DisplayDropdown />
</>);
}
export default App;
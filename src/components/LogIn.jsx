import { useState } from "react"


export const LogIn = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`User Submitted: username: ${username} password: ${password}`)
    }

    return <form onSubmit={handleSubmit}>
        <label>username</label>
        <input 
            type="text" 
            value={username}
            minLength="8"
            maxLength="20"
            onChange={(event) => {
                setUsername(event.target.value)
            }} 
            />

        <br />
        <label>password</label>
        <input 
            type="password"
            minLength="6"
            maxLength="25"
            value={password}
            onChange={(event) => {
                setPassword(event.target.value)
            }}
            />

        
        <div>
            <button style={{width:"100%"}} type="submit">Login</button>
        </div>
        <hr /> <hr /> <hr />
        <div>
            username: {username}
        </div>
        <div>
            password: {password}
        </div>

    </form>
}
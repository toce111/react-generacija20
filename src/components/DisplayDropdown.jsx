import { Dropdown } from "./Dropdown"
import { socials, people} from "../mockData"
import { useState } from "react"

export const DisplayDropdown = () => {

    const [socialSelected, setSocialSelected] = useState("")
    const [personSelected, setPersonSelected] = useState("")

    return <div>
        {/* Socials */}
        <Dropdown 
            options={socials}
            label="Socials"
            onChange={e => setSocialSelected(e.target.value)}
        />
        <p> selected Socials: {socialSelected}</p>

        {/* People */}
        <Dropdown 
            options={people}
            label="People"
            onChange={e => setPersonSelected(e.target.value)}
        />

        <p>selected person: {personSelected}</p>
    </div>
}
import { useState } from "react"

export default function Form() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    return (
        <form>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}

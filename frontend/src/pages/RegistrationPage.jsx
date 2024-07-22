import { useState } from 'react'
export const RegistrationPage = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const addUser = async (e) => {

        e.preventDefault()

        const data = {
            name,
            surname,
            email,
            password,
        }

        const options = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + sessionStorage.getItem('token')
            },
            body: JSON.stringify(data)
        }

        const response = await fetch('http://127.0.0.1:5000/registration', options)
        const message = await response.json()
        if (response.status !== 403){
            alert(message.message)
            window.location.href = '/'
        } else {
            alert(message.message)
        }
    }
    return (
        <>
            <h1>Registration</h1>
            <form onSubmit={addUser}>
                <input type="text" name="name" placeholder='name' value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" name="surname" placeholder='surname' value={surname} onChange={e => setSurname(e.target.value)}/>
                <input type="email" name="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Register</button>
            </form>
        </>
    )
}
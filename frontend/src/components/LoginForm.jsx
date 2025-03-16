import { useState } from 'react'
import { Input, InputForm, Button } from '../styles/Input.style.jsx'
import { Header } from '../styles/Header.style.jsx'
export const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const token = sessionStorage.getItem('token')

    const Login = async (e) => {
        e.preventDefault()

        const data = {
            email,
            password
        }
        const options = {
            method: "POST",
            headers: { 'Accept': 'application/json',
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(data)
        }

        const response = await fetch('http://127.0.0.1:5000/login', options)
        if (response.status === 200){
            const data = response.json()
            data.then(t => {
                sessionStorage.setItem('token', t.access_token)
                window.location.href = '/user'
            })
        } else {
            alert("Something was wrong")
        }
    }
    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px'}}>
            <Header>Login</Header>
            <InputForm onSubmit={Login}>
                <Input type="email" placeholder='email' name='email' value={email} onChange={e => setEmail(e.target.value)}/>
                <Input type="password" placeholder='password' name='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <Button type="submit" disabled={!(email && password)} >Login</Button>
            </InputForm>
        </div>
    )
}
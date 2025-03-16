import { useState, useEffect } from 'react'
import { Header } from '../styles/Header.style.jsx'
export const CurrentUser = () => {
    const [user, setUser] = useState()

    if (sessionStorage.getItem('token')){
        useEffect(() => {
            fetchData()
        },[])
    }

    const fetchData = async () => {
        const options = {
            method: "GET",
            headers: { 'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + sessionStorage.getItem('token')
            }
        }
        const response = await fetch("http://127.0.0.1:5000/get_user", options)
        const data = await response.json()
        setUser(data.current_user.name)
    }
    return (
        <>
            <Header>Hello {user}</Header>
        </>
    )
}
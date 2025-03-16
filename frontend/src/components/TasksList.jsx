import { useState, useEffect } from 'react'
import { Table, TableBody, TableRow, TableData } from '../styles/TaskList.style.jsx'
export const TaskList = () => {
    const [tasks, setTasks] = useState()

    useEffect(() => { fetchData() },[])

    const fetchData = async (e) => {

        const options = {
            method: "GET",
            headers: { 'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + sessionStorage.getItem('token')
            }
        }
        const response = await fetch('http://127.0.0.1:5000/get_task', options)
        const data = await response.json()
        console.log(data.tasks)
        setTasks(data.tasks)
    }

    const deleteTask = async (id) => {

        const options = {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + sessionStorage.getItem('token')
            }
        }

        const response = await fetch(`http://127.0.0.1:5000/delete_task/${id}`, options)
        const data = await response.json()
        alert(data.message)
        location.reload()
    }
    return (
        <>
            <Table>
                <thead>
                    <TableRow>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </TableRow>
                </thead>
                <TableBody>
                    {tasks && tasks.map((task) => {
                        return (
                            <TableRow key={task.id}>
                                <TableData>{task.title}</TableData>
                                <TableData>{task.content}</TableData>
                                <TableData onClick={() => {deleteTask(task.id)}}>delete</TableData>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </>
    )
}
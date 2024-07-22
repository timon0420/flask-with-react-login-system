import { useState, useEffect } from 'react'
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
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks && tasks.map((task) => {
                        return (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{task.content}</td>
                                <td onClick={() => {deleteTask(task.id)}}>delete</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
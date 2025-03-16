import { useState } from 'react' 
import { Button, Input, InputForm, TextArea } from '../styles/Input.style.jsx'
export const TaskForm = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const addTask = async (e) => {
        //e.preventDefault()

        const data = {
            title,
            content
        }
        console.log(data.title, data.content)
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + sessionStorage.getItem('token')
            },
            body: JSON.stringify(data)
        }
        const response = await fetch('http://127.0.0.1:5000/add_task', options)
        if (response.status !== 200 || response.status !== 201){
            const data = await response.json()
            alert(data.message)
        }
    }
    return (
        <InputForm onSubmit={addTask}>
            <Input placeholder='Title' type="text" name='title' value={title} onChange={e => setTitle(e.target.value)}/>
            <TextArea placeholder='Content' name="content" value={content} onChange={e => setContent(e.target.value)}></TextArea>
            <Button type='submit'>Add task</Button>
        </InputForm>
    )
}
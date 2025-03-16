import { CurrentUser } from "../components/CurrentUser"
import { TaskForm } from "../components/TaskForm"
import { TaskList } from "../components/TasksList"
import { Link } from 'react-router-dom'
export const UserPage = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px'}}>
            <CurrentUser />
            <TaskForm />
            <TaskList />
            <Link type='submit' to='/' onClick={() => {sessionStorage.removeItem('token')}}>Logout</Link>
        </div>
    )
}
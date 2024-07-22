import { CurrentUser } from "../components/CurrentUser"
import { TaskForm } from "../components/TaskForm"
import { TaskList } from "../components/TasksList"
import { Link } from 'react-router-dom'
export const UserPage = () => {
    return (
        <>
            <h1>User <CurrentUser /></h1>
            <TaskForm />
            <TaskList />
            <Link type='submit' className="link" to='/' onSubmit={() => {sessionStorage.removeItem('token')}}>Logout</Link>
        </>
    )
}
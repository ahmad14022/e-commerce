import UserAdminView from "@/components/views/admin/Users"
import userServices from "@/services/user"
import { useState, useEffect } from "react"

const AdminUsersPage = () => {
    const [users, setUsers] = useState([])
    useEffect(()   => {
        const getAllUsers = async () => {
            const {data} = await userServices.getAllUsers();
            setUsers(data.data)
        }
        getAllUsers()
    },[])
    console.log(users);
    
    return (
        <>
            <UserAdminView users={users} />
        </>
    )
}

export default AdminUsersPage
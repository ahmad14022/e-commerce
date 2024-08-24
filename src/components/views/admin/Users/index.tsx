import AdminLayout from "@/components/layouts/AdminLayout"
import Button from "@/components/ui/Button"
import styles from './Users.module.scss'
import { useEffect, useState } from "react"
import ModalUpdateUser from "./ModalUpdateUser"
import ModalDeleteUser from "./ModalDeleteUser"

type PropTypes = {
    users: any
}

const UserAdminView = (props: PropTypes) => {
    const [updatedUser, setUpdatedUser] = useState<any>({})
    const [deletedUser, setDeletedUser] = useState<any>({})
    const [usersData, setUsersData] = useState<any>([])
    const { users } = props

    useEffect(() => {
        setUsersData(users)
    }, [users])
    return (
        <>
            <AdminLayout>
                <div>
                    <h1>User Management</h1>
                    <table className={styles.users__table}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Fullname</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersData.map((user: any, index: number) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.fullname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <div className={styles.users__table__actions}>
                                            <Button type="button" onClick={() => setUpdatedUser(user)} className={styles.users__table__actions__edit}><i className="bx bxs-edit" /></Button>
                                            <Button type="button" onClick={() => setDeletedUser(user)} className={styles.users__table__actions__delete}><i className="bx bxs-trash" /></Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </AdminLayout>
            {Object.keys(updatedUser).length && (
                <ModalUpdateUser updatedUser={updatedUser} setUpdatedUser={setUpdatedUser} setUsersData={setUsersData} />)}
            {Object.keys(deletedUser).length && (
                <ModalDeleteUser deletedUser={deletedUser} setDeletedUser={setDeletedUser} setUsersData={setUsersData} />)}
        </>
    )
}

export default UserAdminView
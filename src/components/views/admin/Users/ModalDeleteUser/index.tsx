import Button from "@/components/ui/Button"
import Modal from "@/components/ui/Modal"
import userServices from "@/services/user"
import styles from './ModalDeleteUser.module.scss'
import { useSession } from "next-auth/react"

const ModalDeleteUser = (props: any) => {
    const { deletedUser, setDeletedUser, setUsersData} = props
    const session: any = useSession()
    console.log("ini session delete", session.data?.accessToken);
    
    const handleDelete = async () => {
        await userServices.deleteUser(deletedUser.id, session.data?.accessToken); // Menunggu hingga penghapusan selesai
        setDeletedUser({});
        const { data } = await userServices.getAllUsers(); // Mengambil data terbaru setelah penghapusan
        setUsersData(data.data);
    }

    return (
        <Modal onClose={() => setDeletedUser({})}>
            <h1 className={styles.modal__title}>Are you sure?</h1>
            <Button type="button" onClick={() => handleDelete()}>Delete</Button>
        </Modal>
    )
}

export default ModalDeleteUser
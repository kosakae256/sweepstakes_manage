import styles from './index.module.scss';
import type { NextPage } from "next";

const UserTable: NextPage = () => {
    const user_data = [
        {
            id:"kosakae256",
            create_date:"2021-02-15",
            alive:"2021-02-15 12:01"
        },
        {
            id:"arcsin001",
            create_date:"2021-02-15",
            alive:"2021-02-15 14:01"
        },
    ]
    return (
        <>
        {user_data.map((d, index) => {
            return(
            <tr className={styles.tr} key={index}>
                <td className={styles.td}>{d.id}</td>
                <td className={styles.td}>{d.create_date}</td>
                <td className={styles.td}>{d.alive}</td>
            </tr>
            )
        })}
        </>
    );
}

export default UserTable;
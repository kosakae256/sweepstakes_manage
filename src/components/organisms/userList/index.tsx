import styles from './index.module.scss';
import UserTable from "../../molecules/userTable";

function UserList() {
    return (
        <>
            <table className={styles.table}>
                <tr className={styles.tr}>
                    <th className={styles.th}>アカウントid</th>
                    <th className={styles.th}>登録日</th>
                    <th className={styles.th}>最終死活</th>
                </tr>
                <UserTable />
            </table>
        </>
    );
}

export default UserList;
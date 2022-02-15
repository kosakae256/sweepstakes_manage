import styles from './index.module.scss';

function Title({ children }: any) {
    return (
        <>
            <div className={styles.title}>{children}</div>
        </>
    );
}

export default Title;
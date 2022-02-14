import styles from './index.module.scss';

function InfoBox({ children }: any) {
    return (
        <>
            <div className={styles.container}>{children}</div>
        </>
    );
}

export default InfoBox;
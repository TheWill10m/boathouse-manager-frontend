import styles from './Header.module.css'

function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    <a href="/" className={styles.link}>
                        Boathouse Manager
                    </a>
                </h1>
            </div>
        </header>
    );
}

export default Header
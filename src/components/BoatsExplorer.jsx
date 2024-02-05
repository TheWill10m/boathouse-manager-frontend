import BoatCard from './BoatCard.jsx';
import styles from './BoatsExplorer.module.css';

function BoatsExplorer() {

    let boatList = ["1", "2", "3", "4", "5", "6"];

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <BoatCards boats={boatList} />
            </div>
        </div>
    );
}

function BoatCards({ boats }) {
    let boatCards = boats.map((boat, index) =>
        <BoatCard key={index} name={boat} />
    );

    return boatCards;
}

export default BoatsExplorer;
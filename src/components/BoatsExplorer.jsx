import BoatCard from './BoatCard.jsx';
import styles from './BoatsExplorer.module.css';
import { useContext } from 'react';
import { BoatContext } from '../App.jsx';

function BoatsExplorer() {

    const boatList = useContext(BoatContext).boatList;

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
        <BoatCard key={index} listId={index} name={boat.name} type={boat.type} inService={boat.inService} />
    );

    return boatCards;
}

export default BoatsExplorer;
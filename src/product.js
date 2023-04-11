// import './product.css'
import styles from './product.module.css';

const product = (props) => {
    // console.log(props);
    return (
        <div className={styles.product}>
            <p>product name : {props.product.name} course</p>
            <p>product price : {props.product.price} </p>
            <span className={styles.value}>{props.product.quantity}</span>

            <button className={`${styles.button} ${styles.inc}`}>
                increment
            </button>
            <button onClick={props.onDelete} className={styles.button}>
                delete 
            </button>
        </div>
    );

};

export default product;


// ====>>  estefade az module dar css va sakht className uniqe!
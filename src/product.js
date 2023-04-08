// import './product.css'
import styles from './product.module.css';

const product = (props) => {
    console.log(props);
    return (
        <div className={styles.product}>
            <p>product name : {props.name} course</p>
            <p>product price : {props.price} </p>
        </div>
    );

};

export default product;


// ====>>  estefade az module dar css va sakht className uniqe!
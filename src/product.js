import './product.css'
const product = (props) => {
    console.log(props);
    return (
        <div className="product">
            <p>product name : {props.name} course</p>
            <p>product price : {props.price} </p>
        </div>
    );

};

export default product;
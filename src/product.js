const product = (props) => {
    console.log(props);
    return (
        <div>
            <p>product name : {props.name} course</p>
            <p>product price : {props.price} </p>
        </div>
    );

};

export default product;
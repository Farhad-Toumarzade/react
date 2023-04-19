// import React, {useState } from 'react';
// import Product from "./product";
import React, {} from 'react';
import './app.css'
import ProductList from "./product/ProductList";
import NavBar from "./component/NavBar"




// class component!!!!!!!!!!!!!!!!!!!

class App extends React.Component{
    constructor(props){
        super(props)
        console.log('app.js constructor')
    }

    state = {
        Products:[
            {title:"react.js", price:"99$", id:1, quantity: 1},
            {title:"node.js", price:"89$", id:2, quantity: 2},
            {title:"vue.js", price:"79$", id:3, quantity: 3},
        ],
    };
    removeHandler = (id) => {
        // console.log("clicked", id);
    
        const filteredProducts = this.state.Products.filter((p) => p.id !== id);
        this.setState({ Products: filteredProducts});
        //  this. setstate({product:{}});
     }
     incrementHandler = (id) =>{
        // const products = [...this.state.Products];
        // const selectedItem = products.find((p) => p.id === id);
        // selectedItem.quantity++;
        // // console.log(products);
        // this.setState({products})



        // 1. id => ok!
        //  2. index
        const index = this.state.Products.findIndex((item) => item.id === id);
        console.log(index);
        // 3. clone the selected index and update the quantity
        const product = { ...this.state.Products[index]};
        product.quantity++;

        // 4. update products
        const products = [...this.state.Products];
        products[index] = product;
        this.setState({products});

     }
     decrementHandler = (id) => {
        const Products = [...this.state.Products];
        const selectedItem = Products.find((p) => p.id === id);
        if (selectedItem.quantity === 1) {
            const filteredProducts = Products.filter((p) => p.id !== id);
            this.setState({ Products: filteredProducts});
            console.log("clicked")
        }else{
            selectedItem.quantity--;
            // console.log(Products);
            this.setState({ Products });
        };
    };
     changeHandler = (event, id) =>{
        // console.log(event.target.value, id);
        const products = [...this.state.Products];
        const selectedItem = products.find((p) => p.id === id);
        selectedItem.title = event.target.value; 
        this.setState({products})
     }


     componentDidMount() {
        console.log('app.js componentDidMount')
     }

     componentDidUpdate(prevProps, prevState) {
        console.log('App.js componentDidUpdate');
        console.log('App.js', prevState)
     }

     shouldComponentUpdate(nextProps, nextState) {
        return true;
     }


    // clickHandler = () =>{
    //      this.setState({
    //         Products: [
    //             {title:"react.js", price:"79$"},
    //             {title:"node.js", price:"69$"},
    //             {title:"vue.js", price:"59$"},
    //         ],
    //      });
    //     }
    render() {
        console.log('app.js render')
        return(
             <div className='container' id='title'>
               <NavBar totalItems={this.state.Products.filter((p) => p.quantity > 0).length} />
                <ProductList
                Products={this.state.Products}
                onRemove={this.removeHandler}
                onIncrement={this.incrementHandler}
                onDecrement={this.decrementHandler}
                onChange={this.changeHandler}
                />
             {/* <button onClick={this.clickHandler} className="product">
                change price
            </button>  */}
             </div>
            
        );
    };
}
export default App;

// const App = ()=> {
//   return (
//     <div className='container' id='title'>
//     <h1>shopping app</h1>
//     <Product name="React.js" price="99$" />
//     <Product name="node.js" price="89$" />
//     <Product name="javascript" price="79$" />
//         </div>
//     );
// };


// export default App;





// const App = () => {

//   const [products,setProducts] = useState([
//     {title: "react.js", price: "99$", id: 1},
//     {title: "node.js", price: "89$", id: 2},
//     {title: "java.js", price: "79$", id: 3},
//   ]);

//   const clickHandler = () => {
//     setProducts([
//       {title: "react.js", price: "79$", id: 1 },
//       {title: "node.js", price: "69$", id: 2},
//       {title: "java.js", price: "59$",id: 3}
//     ]);
//   };

//   return ( 
//   <div className='container' id='title'>
//     <h1>shopping app</h1>
//     {products.map((product) =>{
//       return <Product name={product.title} price={product.price} key={product.id} />;
//     })}
//     <button onClick={clickHandler}>Change Price</button>
//   </div> 
//   );
// };
 
// export default App;


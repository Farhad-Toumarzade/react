// import React, {useState } from 'react';
import Product from "./product";
import React, {Component} from 'react';
import './app.css'




// class component!!!!!!!!!!!!!!!!!!!

class App extends React.Component{

    state = {
        Products:[
            {title:"react.js", price:"99$"},
            {title:"node.js", price:"89$"},
            {title:"vue.js", price:"79$"},
        ],
        count: 0,
    };

    clickHandler = () =>{
         this.setState({
            Products: [
                {title:"react.js", price:"79$"},
                {title:"node.js", price:"69$"},
                {title:"vue.js", price:"59$"},
            ],
         });
        }
    render() {
        return(
             <div className='container' id='title'>
             <h1>shopping app</h1>
            {this.state.Products.map((product, index) =>{
                return <Product name={product.title} price={product.price} key={index}/>;
            })}
            <button onClick={this.clickHandler} className="product">
                change price
            </button>
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


import React, { Component } from 'react';
import Product from '../product';


class ProductList extends Component {

    // state = { Products:[
    //     {title:"react.js", price:"99$", id:1, quantity: 1},
    //     {title:"node.js", price:"89$", id:2, quantity: 2},
    //     {title:"vue.js", price:"79$", id:3, quantity: 3},
    // ],
 
//  state => Handler !
//  removeHandler = (id) => {
//     // console.log("clicked", id);

//     const filteredProducts = this.state.Products.filter((p) => p.id !== id);
//     this.setState({ Products: filteredProducts});
//     //  this. setstate({product:{}});
//  }
//  incrementHandler = (id) =>{
//     const products = [...this.state.Products];
//     const selectedItem = products.find((p) => p.id === id);
//     selectedItem.quantity++;
//     console.log(products);
//     this.setState({products})
//  }
//  decrementHandler = (id) => {
//     const Products = [...this.state.Products];
//     const selectedItem = Products.find((p) => p.id === id);
//     if (selectedItem.quantity === 1) {
//         const filteredProducts = Products.filter((p) => p.id !== id);
//         this.setState({ Products: filteredProducts});
//         console.log("clicked")
//     }else{
//         selectedItem.quantity--;
//         // console.log(Products);
//         this.setState({ Products });
//     };
// };
//  changeHandler = (event, id) =>{
//     // console.log(event.target.value, id);
//     const products = [...this.state.Products];
//     const selectedItem = products.find((p) => p.id === id);
//     selectedItem.title = event.target.value; 
//     this.setState({products})
//  }

renderProduct = () => {
    const {onRemove, onIncrement, onDecrement, onChange, Products} = this.props
    if (Products.length === 0)
        return <div>there is no product in cart.</div>;

        return Products.map((product, index) =>{
                return (
                <Product product={product} key={index} 
                onDelete={() => onRemove(product.id)}
                onIncrement={() => onIncrement(product.id)}
                onDecrement={() => onDecrement(product.id)}
                onChange= {(e)=> onChange(e, product.id)}
                />
                );
            }

            );
    };



    render() { 
        console.log('productList.js render')
        const {Products} = this.props;
        return (
            <div >
               {!Products.length && <div>go to shopping</div> }
               {this.renderProduct()}
            </div >
        );
    }
}
 
export default ProductList;
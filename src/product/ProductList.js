import React, { Component } from 'react';
import Product from '../product';

class ProductList extends Component {
    state = { Products:[
        {title:"react.js", price:"99$", id:1, quantity: 1},
        {title:"node.js", price:"89$", id:2, quantity: 2},
        {title:"vue.js", price:"79$", id:3, quantity: 3},
    ],
 }
//  state => Handler !
 removeHandler = (id) => {
    console.log("clicked", id);

    const filteredProducts = this.state.Products.filter((p) => p.id !== id);
    this.setState({ Products: filteredProducts});
    //  this. setstate({product:{}});
 }
    
    render() { 
        return (
            <div >
                {this.state.Products.map((product, index) =>{
                return <Product product={product} key={index} onDelete={() => this.removeHandler(product.id)}/>;
            })}
            </div >
        );
    }
}
 
export default ProductList;
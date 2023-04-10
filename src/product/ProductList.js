import React, { Component } from 'react';
import Product from '../product';

class ProductList extends Component {
    state = { Products:[
        {title:"react.js", price:"99$"},
        {title:"node.js", price:"89$"},
        {title:"vue.js", price:"79$"},
    ],
    count: 0, }
    
    
    render() { 
        return (
            <div >
                {this.state.Products.map((product, index) =>{
                return <Product name={product.title} price={product.price} key={index}/>;
            })}
            </div >
        );
    }
}
 
export default ProductList;
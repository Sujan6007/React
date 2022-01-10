import React from 'react';
import Products from './products';
import { Route, Switch } from 'react-router-dom';
import Signup from './signup';
import Cart from './cart';
import About from './about';

const Routes = ({
     productItems,
     cartItems, 
     handleAddProduct, 
     handleRemoveProduct,
     handleCartClearance
    }) => {
    return(
        <div>
            <Switch>
                <Route path="/" exact>
                    <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
                </Route>
                <Route path="/signup" exact>
                    <Signup/>
                </Route>
                <Route path="/about" exact>
                    <About/>
                </Route>
                <Route path="/cart" exact>
                    <Cart cartItems={cartItems}
                     handleAddProduct={handleAddProduct}
                      handleRemoveProduct={handleRemoveProduct}
                      handleCartClearance={handleCartClearance}
                      />
                </Route>
                
            </Switch>
        </div>
    )
}
export default Routes;
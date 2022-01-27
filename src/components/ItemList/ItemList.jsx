import React from "react";
import Item from "../Item/Item"
import "../ItemList/ItemList.css"


export default function ItemList({ prod }) {

    /*
        function App() {
    return (
        <React.Fragment>
        <Route exact path='/' component={LandingPage} />
        <Route path='/'  component={NavBar}/>
        <Route path='/home' component={ Home } />
        <Route  path='/recipes/:id' component={Recipe}/>
        <Route path='/create' component={CreateRecipe}/>
        </React.Fragment>
    );
    }
    */

    return (
        <>
            
            <div className="grid">
                {prod.map((e,i) => <Item prod={e} key={i} />)}
            </div>
            
        </>
    )
    

}
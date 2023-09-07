import { makeStyles,Grid} from '@material-ui/core'
import React from 'react'

import "./ListProducts.css"

import IndividualCard from './IndividualCard/IndividualCard';


function ListProducts({products,user}) {
    


    return (<>
        <div className="listofproducts">
    <IndividualCard products={products} user={user}/>  
        </div>
    </>)
}

export default ListProducts

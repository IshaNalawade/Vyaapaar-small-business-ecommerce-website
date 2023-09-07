import React, { useEffect, useState } from 'react'
import { getProductForm } from '../../../API'
import Banner from '../Banner/Banner'
import CarouselCard from '../CarouselCard/CarouselCard'
import ListProducts from '../ListProducts/ListProducts'
import "./CustomerPage.css"
import Chatbot from "../../Chatbot/Chatbot"
function CustomerPage({products,user}) {

    return (<>
        <div className="bg">
        <Chatbot user={user} />
            <Banner/>
           
            <CarouselCard/>
            <ListProducts products={products} user={user}/>
            
        </div>
   </> )
}

export default CustomerPage

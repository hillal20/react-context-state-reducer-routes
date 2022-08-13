import React from 'react';
import {useParams, useNavigate} from 'react-router-dom'

const SingleProduct = ()=>{
 const {productId} = useParams()
 const navigate = useNavigate()
return ( 
        <>
          <h1>SingleProduct {productId}</h1>
          <button  
             onClick={(e)=> { navigate('/firstRoute')}}
          >
            send
         </button>
        </>
       )
}

export default SingleProduct;
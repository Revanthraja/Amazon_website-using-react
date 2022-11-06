import './Orders.css'
import React, { useEffect, useState } from 'react'
import {db} from './firebase'
import {useStateValue} from './StateProvider';

function Orders() {
  const[{basket,user},dispatch]=useStateValue()
  const [orders,setOrders]=useState([]);
   useEffect(()=>{
      db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created','desc')
      .onSnapshot(Snapshot=>(
        setOrders(Snapshot.docs.map(doc=>({
          id:doc.id,
          data:doc.data()
        })))
      ))

   },[])
  return (
      <div className='orders'>
        <h1>Your Orders</h1>
      </div>
  )
}

export default Orders
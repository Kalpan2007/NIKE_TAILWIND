import React from 'react'
import Navbar from '../components/Navbar'
import { shoes } from '../constants' // Assuming you have a shoes data file


const shoe = [
    { id : 1 , name  : "nike show 1 " , image : "../assets/images/big-shoe1.png" , price : "$100" },
    { id : 2 , name  : "nike show 2 " , image : "../assets/images/big-shoe2.png" , price : "$120" },
    { id : 3 , name  : "nike show 3 " , image : "../assets/images/big-shoe3.png" , price : "$130" },
    { id : 4 , name  : "nike show 4 " , image : "../assets/images/shoe4.svg" , price : "$140" },
]






const ShopPage = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Our Shoes Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shoes.map((shoe) => (
            <div key={shoe.id} className="bg-white rounded-lg shadow-md p-4">
              <img 
                src={shoe.image} 
                alt={shoe.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{shoe.name}</h3>
                <p className="text-gray-600">${shoe.price}</p>
                <button className="mt-4 bg-black text-white px-6 py-2 rounded-md hover:opacity-90">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopPage;
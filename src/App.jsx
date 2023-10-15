
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Componate/CoffeeCard'
import { useState } from 'react'
import Header from './Componate/Header'

function App() {
  const Loaedcoffees= useLoaderData()
  const [coffees, setCoffees]= useState(Loaedcoffees)


  return (
    <div className='ml-16'> 

   
     
      <h1 className='text-5xl text-center text-purple-500'>Hot Hot Cold coffee :{coffees.length}</h1>

      <div className='grid grid-cols-1 my-14 gap-3 md:grid-cols-2'>
      {
        coffees.map(coffee=> <CoffeeCard
         key={coffee._id}
         coffee={coffee} 
         coffees={coffees}
         setCoffees={setCoffees}
        >

        </CoffeeCard>)
      }
      </div>
      <Header></Header>
    </div>
  )
}

export default App

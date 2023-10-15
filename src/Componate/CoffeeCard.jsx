/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const CoffeeCard = ({ coffee , coffees, setCoffees }) => {
  const {_id, name, quantity, supplier, details, photo } = coffee;

  const handelDelete= _id =>{
       console.log(_id);
       Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
       
         fetch(`https://old-coffee-store-server-chfmbsvq3-sazins-projects.vercel.app//coffee/${_id}`,{
            method: 'DELETE'
         })
         .then(res=> res.json())
         .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                   Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )      

            const remaining = coffees.filter(cof=> cof._id !== _id) 
               setCoffees(remaining)
            }
         })


        }
      })

  }

  return (
    <div className="card card-side bg-base-100 shadow-xl p-4">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between items-center w-full mr-4">
        <h2 className="card-title">Name:{name}</h2>
        <div>
          <p>Quantity:{quantity}</p>
          <p>Supplier:{supplier}</p>
          <p>{details}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn ">View</button>
            <Link to={`/updateCoffee/${_id}`}> 
            <button className="btn">Edit</button>
            </Link>
            <button onClick={()=> handelDelete(_id)} className="btn bg-orange-500">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

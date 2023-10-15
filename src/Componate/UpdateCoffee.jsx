import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handelUpdateCoffee= event=>{
        event.preventDefault()
        const form= event.target 
        const name= form.name.value
        const quantity= form.quantity.value
        const supplier= form.supplier.value
        const taste= form.taste.value
        const category= form.category.value
        const details= form.details.value
        const photo= form.photo.value
        
        const updatedCoffee={name, quantity,supplier,taste,category,details,photo} 
        console.log(updatedCoffee); 

        fetch(`https://old-coffee-store-server-chfmbsvq3-sazins-projects.vercel.app//coffee/${_id}`,{

            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee updated successfully',
                    icon: 'Success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }


    return (
        <div className="bg-gray-200-50 p-20">
      <h2 className="font-extrabold">Update coffee:{name}</h2>
      <form onSubmit={handelUpdateCoffee}>
        {/* form row name and quantity */}
        <div className=" md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                defaultValue={quantity}
                name="quantity"
                placeholder="available quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row test and supplier */}
        <div className=" md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier name</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                defaultValue={supplier}
                name="supplier"
                placeholder="Supplier name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                defaultValue={taste}
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className=" md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                defaultValue={category}
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                defaultValue={details}
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className=" ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo url</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                defaultValue={photo}
                name="photo"
                placeholder="Photo url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
         <input  className="btn btn-block" type="submit" value="Update Coffee" />
      </form>
    </div>
    );
};

export default UpdateCoffee;
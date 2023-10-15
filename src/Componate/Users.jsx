import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import Swal from "sweetalert2";

const Users = () => { 
    const loadedUsers = useLoaderData() 
    const [users, setuser] = useState(loadedUsers)

    console.log(users);
    const handelDelete = id=>{
      console.log(id);
      fetch(`https://old-coffee-store-server-chfmbsvq3-sazins-projects.vercel.app/users/${id}`,{
        method:'DELETE'
      })
      .then(res=> res.json())
      .then(data=>{
        if(data.deletedCount>0){
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )      
            // remove the user from UI 
            const remaining= users.filter(user =>user._id !== id)
            setuser(remaining)
        }
      })
    }
    return (
        <div>
            <Header></Header>
            <h2>User:{users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last Logged in</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 2 */}
      {
        users.map(user=> 
        
        <tr key={user._id} className="hover">
        <th>2</th>
        <td>{user.email}</td>
        <td>{user.cretedAt}</td>
        <td>{user.lastLoggedAt}</td>
        <td>
            <button onClick={()=>handelDelete(user._id)} className="btn">X</button>
        </td>
      </tr> )
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const SingUp = () => {
   const { createUser}= useContext(AuthContext)
    const handelSingUp = e=>{
        e.preventDefault();
        const email= e.target.email.value 
        const password= e.target.password.value 
         createUser(email,password)
         .then(result=>{
            console.log(result.user);
            const cretedAt = result.user?.metadata?.creationTime
            const user= {email , cretedAt:cretedAt}
            fetch('https://old-coffee-store-server-chfmbsvq3-sazins-projects.vercel.app//user',{
              method: 'POSt',
              headers:{
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
            })
            .then(res=> res.json())
            .then(data=>{
              console.log(data);
              if(data.insertedId){
                alert('')
              }
            })
         })
         .catch(error=>{
            console.log(error);
         })

         console.log(email,password);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sing Up Now</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <form onSubmit={handelSingUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sing up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SingUp;
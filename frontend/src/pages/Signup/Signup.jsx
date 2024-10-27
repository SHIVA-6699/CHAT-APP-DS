import GenderCheckbox from "./GenderCheckBox"

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-opacity-0 bg-clip-padding backdrop-filter backdrop-blur-lg">
               <h1 className="text-3xl font-semibold text-center text-gray-300">
                Sign Up <span className="text-blue-500"> ChatApp</span>
                </h1> 
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Enter Email" className="w-full input input-bordered h-10" />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
                    </div>
                     <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
                    </div>
                    {/* Gender CHECKBOX GOES HERE */}

                    <GenderCheckbox 
                    
                    />                        

                    <div className="flex py-2 justify-center">
                        <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Signup
// resource : https://larainfo.com/blogs/tailwind-daisyui-registration-form-example

export default function Register() {
  return (
    <div className="relative flex flex-col  h-[calc(100vh-80px)] overflow-hidden bg-slate-400">
      <div className="w-full p-6 m-auto mt-20 bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-purple-700">Register</h1>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div className="grid place-items-end"> 
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
);
}

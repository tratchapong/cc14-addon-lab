// resource : https://larainfo.com/blogs/tailwind-daisyui-login-form-example

export default function Login() {
  return (
      <div className="relative flex flex-col  h-[calc(100vh-80px)] overflow-hidden bg-slate-400">
        <div className="w-full p-6 m-auto mt-24 bg-white rounded-md shadow-md lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-purple-700">Login</h1>
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
            <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">
              Forget Password?
            </a>
            <div>
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
  );
}

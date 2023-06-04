import {useForm} from 'react-hook-form'

export default function Login() {
  const {register, handleSubmit} = useForm()

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
      <div className="relative flex flex-col  h-[calc(100vh-80px)] overflow-hidden bg-slate-400">
        <div className="w-full p-6 m-auto mt-24 bg-white rounded-md shadow-md lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-purple-700">Login</h1>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full input input-bordered input-primary"
                {...register('username')}
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
                {...register('password')}
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

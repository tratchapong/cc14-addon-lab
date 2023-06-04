import {useForm} from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

const RegisterSchema = Joi.object({
  username: Joi.string().email({ minDomainSegments: 2, tlds: false }).required(),
  password: Joi.string().min(3).required(),
  confirmPassword: Joi.ref('password')
}).options({allowUnknown: true})


export default function Register() {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: joiResolver(RegisterSchema)
  })

  const onSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <div className="relative flex flex-col  h-[calc(100vh-80px)] overflow-hidden bg-slate-400">
      <div className="w-full p-6 m-auto mt-20 bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-purple-700">Register</h1>
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
             { errors.username && <p className='text-red-500'>{errors.username.message}</p>}
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
            { errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm password</span>
            </label>
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-full input input-bordered input-primary"
              {...register('confirmPassword')}
              />
            { errors.confirmPassword && <p className='text-red-500'>Confirm password not match..</p>}
          </div>
          <div className="grid place-items-end"> 
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
);
}

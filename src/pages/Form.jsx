import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  if(Object.keys(errors).length)
    console.log('Err:', errors);

  return (
    <div className="myform">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })}
        />
        <select {...register("Title", { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <div className="flex flex-col gap-2">
          <label>
            <input {...register("Developer", { required: true })} type="radio" value="Yes" />
            Yes
          </label>
          <label>
            <input {...register("Developer", { required: true })} type="radio" value="No" />
            No
          </label>
          <label>
            <input {...register("Developer", { required: true })} type="radio" value="Maybe" />
            May be
          </label>
        </div>
        <div className="flex flex-col gap-2">
          <label>
            <input {...register("Tester", { required: true })} type="radio" value="Yes" />
            Yes
          </label>
          <label>
            <input {...register("Tester", { required: true })} type="radio" value="No" />
            No
          </label>
          <label>
            <input {...register("Tester", { required: true })} type="radio" value="Maybe" />
            May be
          </label>
        </div>
        <div className="flex flex-col gap-2">
          <label>
            <input {...register("Skills")} type="checkbox" value="HTML" />
            HTML
          </label>
          <label>
            <input {...register("Skills")} type="checkbox" value="CSS" />
            CSS
          </label>
          <label>
            <input {...register("Skills")} type="checkbox" value="Javascript" />
            Javascript
          </label>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}

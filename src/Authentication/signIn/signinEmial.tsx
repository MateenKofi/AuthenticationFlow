import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Mail } from 'lucide-react';

type SigninEmailProps = {
  onNext: () => void;
};

const SigninEmail: React.FC<SigninEmailProps> = ({ onNext }) => {
  const { register, formState: { errors }, watch } = useFormContext();
  const email = watch('email');

  return (
    <>
      <div className='flex flex-col pb-3'>
        <h2 className="mb-4 text-xl font-semibold">Sign In</h2>
        <span className="mb-2">Enter your email address to sign in</span>
        <span>Emial : example@gmail.com</span>
      </div>
      <div className="relative flex items-center mb-4">
        <Mail className="absolute left-3 text-white border-r pr-2" />
        <input
          type="email"
          placeholder="Enter email address"
          className="w-full p-2 pl-10 pr-10 border border-gray-300 rounded-lg"
          {...register('email', { required: true })}
        />
      </div>
      {errors.email && <p className="mb-2 text-red-500">Email is required</p>}
      <button
        type="button"
        onClick={onNext}
        disabled={!email}
        className="w-full p-2 mb-2 text-white bg-blue-500 rounded-lg"
      >
        Next
      </button>
    </>
  );
};

export default SigninEmail;

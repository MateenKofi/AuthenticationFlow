import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react';

type SignUpFormProps = {
  onNext: () => void;
};

const SignUpForm: React.FC<SignUpFormProps> = ({ onNext }) => {
  const { register, formState: { errors }, watch } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const email = watch('email');
  const phoneNumber = watch('phoneNumber');
  const password = watch('password');

  return (
    <>
      <h2 className="mb-4 text-xl font-semibold">Sign Up</h2>
      <span className="mb-2">Email</span>
      <div className="relative flex items-center mb-4">
        <Mail className="absolute left-3 text-gray-400 border-r pr-2" />
        <input
          type="email"
          placeholder="Enter email address"
          className="w-full p-2 pl-10 pr-10 border border-gray-300 rounded-lg"
          {...register('email', { required: true })}
        />
      </div>
      {errors.email && <p className="mb-2 text-red-500">Email is required</p>}
      
      <span className="mb-2">Phone Number</span>
      <div className="relative flex items-center mb-4">
        <Phone className="absolute left-3 text-gray-400 border-r pr-2" />
        <input
          type="tel"
          placeholder="Enter phone number"
          className="w-full p-2 pl-10 pr-10 border border-gray-300 rounded-lg"
          {...register('phoneNumber', { required: true })}
        />
      </div>
      {errors.phoneNumber && <p className="mb-2 text-red-500">Phone number is required</p>}

      <span className="mb-2">Password</span>
      <div className="relative flex items-center mb-4">
        <Lock className="absolute left-3 text-gray-400 border-r pr-2" />
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter password"
          className="w-full p-2 pl-10 pr-10 border border-gray-300 rounded-lg"
          {...register('password', { required: true })}
        />
        <div
          className="absolute right-3 cursor-pointer text-gray-400"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </div>
      </div>
      {errors.password && <p className="mb-2 text-red-500">Password is required</p>}

      <button
        type="submit"
        disabled={!email || !phoneNumber || !password}
        className="w-full p-2 text-white bg-blue-500 rounded-lg"
      >
        Sign Up
      </button>
    </>
  );
};

export default SignUpForm;

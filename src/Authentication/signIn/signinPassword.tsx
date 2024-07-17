import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Eye, EyeOff, Lock,ChevronLeft, ChevronRight } from 'lucide-react';

type SignInPasswordProps = {
  onNext: () => void;
  onBack: () => void;
  onForgotPassword: () => void; // New prop for handling forgot password
  email: string;
};

const SignInPassword: React.FC<SignInPasswordProps> = ({ onBack, onForgotPassword, email }) => {
  const { register, formState: { errors }, watch } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const password = watch('password');

  const obfuscateEmail = (email: string) => {
    const [localPart, domain] = email.split('@');
    return `${localPart.slice(0, 4)}...@${domain}`;
  };

  return (
    <>
      <p className="mb-4 text-gray-500">Enter password for {obfuscateEmail(email)}</p>
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
      <div className="flex justify-between items-center mb-4">
        <div onClick={onBack} className="p-2 text-blue-500 flex items-center">
        <ChevronLeft/>
        <span>Back</span>
        </div>
        <button
          type="submit"
          disabled={!password}
          className="p-2  text-blue-500 rounded-lg flex"
        >
          <span>Sign In</span>
          <ChevronRight/>
          
        </button>
      </div>
      <div className="text-center">
        <button
          type="button"
          onClick={onForgotPassword}
          className="text-sm text-blue-500 underline"
        >
          Forgot Password?
        </button>
      </div>
    </>
  );
};

export default SignInPassword;

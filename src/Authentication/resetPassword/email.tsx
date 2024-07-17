import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Mail } from 'lucide-react';

type ResetPasswordEmailProps = {
  onNext: () => void;
};

const ResetPasswordEmail: React.FC<ResetPasswordEmailProps> = ({ onNext }) => {
  const { register, formState: { errors }, watch } = useFormContext();
  const email = watch('email');

  return (
    <>
      <h2 className="mb-4 text-xl font-semibold">Reset Password</h2>
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

      <button
        type="button"
        onClick={onNext}
        disabled={!email}
        className="w-full p-2 text-white bg-blue-500 rounded-lg"
      >
        Next
      </button>
    </>
  );
};

export default ResetPasswordEmail;

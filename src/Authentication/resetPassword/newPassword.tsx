import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Eye, EyeOff, Lock } from 'lucide-react';

type ResetPasswordPasswordProps = {
  onNext: () => void;
  onBack: () => void;
};

const ResetPasswordPassword: React.FC<ResetPasswordPasswordProps> = ({ onNext, onBack }) => {
  const { register, formState: { errors }, watch } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const newPassword = watch('newPassword');

  return (
    <>
      <span className="mb-2">New Password</span>
      <div className="relative flex items-center mb-4">
        <Lock className="absolute left-3 text-gray-400 border-r pr-2" />
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter new password"
          className="w-full p-2 pl-10 pr-10 border border-gray-300 rounded-lg"
          {...register('newPassword', { required: true })}
        />
        <div
          className="absolute right-3 cursor-pointer text-gray-400"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </div>
      </div>
      {errors.newPassword && <p className="mb-2 text-red-500">New password is required</p>}

      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="p-2 text-blue-500">
          Back
        </button>
        <button
          type="submit"
          disabled={!newPassword}
          className="p-2 text-white bg-blue-500 rounded-lg"
        >
          Reset Password
        </button>
      </div>
    </>
  );
};

export default ResetPasswordPassword;

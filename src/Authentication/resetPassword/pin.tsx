import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Key } from 'lucide-react';

type ResetPasswordPinProps = {
  onNext: () => void;
  onBack: () => void;
};

const ResetPasswordPin: React.FC<ResetPasswordPinProps> = ({ onNext, onBack }) => {
  const { register, formState: { errors }, watch } = useFormContext();
  const pin = watch('pin');

  return (
    <>
      <span className="mb-2">PIN</span>
      <div className="relative flex items-center mb-4">
        <Key className="absolute left-3 text-gray-400 border-r pr-2" />
        <input
          type="text"
          placeholder="Enter the PIN sent to your email"
          className="w-full p-2 pl-10 pr-10 border border-gray-300 rounded-lg"
          {...register('pin', { required: true })}
        />
      </div>
      {errors.pin && <p className="mb-2 text-red-500">PIN is required</p>}

      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="p-2 text-blue-500">
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!pin}
          className="p-2 text-white bg-blue-500 rounded-lg"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ResetPasswordPin;

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import ResetPasswordEmail from './email';
import ResetPasswordPin from './pin';
import ResetPasswordPassword from './newPassword';

type ResetPasswordProps = {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
};

const ResetPassword: React.FC<ResetPasswordProps> = ({ step, handleNext, handleBack }) => {
  const methods = useForm({
    defaultValues: {
      email: '',
      pin: '',
      newPassword: '',
    },
  });

  const { handleSubmit, watch } = methods;
  const email = watch('email');

  const onSubmit = (data: any) => {
    console.log('Reset password data:', data);
    handleNext();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && <ResetPasswordEmail onNext={handleNext} />}
        {step === 2 && <ResetPasswordPin onNext={handleNext} onBack={handleBack} />}
        {step === 3 && <ResetPasswordPassword onNext={handleNext} onBack={handleBack} />}
      </form>
    </FormProvider>
  );
};

export default ResetPassword;

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import SignUpForm from './SignUpForm';

type SignUpProps = {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
};

const SignUp: React.FC<SignUpProps> = ({ step, handleNext, handleBack }) => {
  const methods = useForm({
    defaultValues: {
      email: '',
      phoneNumber: '',
      password: '',
    },
  });

  const { handleSubmit, watch } = methods;
  const email = watch('email');

  const onSubmit = (data: any) => {
    console.log('Sign up data:', data);
    handleNext();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && <SignUpForm onNext={handleNext} />}
      </form>
    </FormProvider>
  );
};

export default SignUp;

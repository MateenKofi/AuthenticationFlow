import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import SigninEmail from './signinEmial';
import SignInPassword from './signinPassword';

type SignInProps = {
  step: number;
  handleNext: () => void;
  handleBack: () => void;
  handleForgotPassword: () => void; // New prop for handling forgot password
};

type formValues = {
  email: string;
  password: string;
};

const SignIn: React.FC<SignInProps> = ({ step, handleNext, handleBack, handleForgotPassword }) => {
  const [email, setEmail] = useState('');
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { handleSubmit, watch } = methods;
  const watchedEmail = watch('email');

  const onSubmit = (data: formValues) => {
    console.log('Sign in data:', data);
    handleNext();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && <SigninEmail onNext={() => { setEmail(watchedEmail); handleNext(); }} />}
        {step === 2 && <SignInPassword onBack={handleBack} email={email} onNext={handleNext} onForgotPassword={handleForgotPassword} />}
      </form>
    </FormProvider>
  );
};

export default SignIn;

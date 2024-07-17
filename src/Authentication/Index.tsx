import React, { useState } from 'react';
import bgImage from '../assets/images/annie-spratt-0ZPSX_mQ3xI-unsplash.jpg';
import logo from '../assets/images/logo.png';
import SignIn from './signIn/Index';
import SignUp from './signup/Index';
import ResetPassword from './resetPassword/Index';

const Authentication: React.FC = () => {
  const [mode, setMode] = useState<'signIn' | 'signUp' | 'resetPassword'>('signIn');
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'signIn' ? 'signUp' : 'signIn'));
    setStep(1); // Reset step to 1 when switching modes
  };

  const handleForgotPassword = () => {
    setMode('resetPassword');
    setStep(1);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-white opacity-80"></div>
      <div className="relative z-10 p-6 bg-white rounded-lg shadow-2xl max-w-sm w-full">
        <div className="flex items-center mb-4">
          <img src={logo} alt="Logo" className="w-24 h-24 bg-cover" />
        </div>
        {mode === 'signIn' && <SignIn step={step} handleNext={handleNext} handleBack={handleBack} handleForgotPassword={handleForgotPassword} />}
        {mode === 'signUp' && <SignUp step={step} handleNext={handleNext} handleBack={handleBack} />}
        {mode === 'resetPassword' && <ResetPassword step={step} handleNext={handleNext} handleBack={handleBack} />}
        <div className="w-full flex justify-between items-center mt-4">
          <button type="button" onClick={toggleMode} className="p-2 text-blue-500">
            {mode === 'signIn' ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;

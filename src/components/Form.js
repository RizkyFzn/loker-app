import React, { useState } from 'react';
import FormLogin from './FormLogin';
import FormRegistrasi from './FormRegistrasi';

const Form = () => {
  const [formReg, setFormReg] = useState(true);
  const handleRegistrasi = () => {
    setFormReg(true);
  };
  const handleLogin = () => {
    setFormReg(false);
  };
  return (
    <div className="bg-slate-900 p-10 rounded-md">
      <div className="flex gap-10 justify-center">
        <button onClick={handleRegistrasi} className={`${formReg ? 'text-cyan-400 underline underline-offset-8 text-center font-medium text-xl mb-3' : 'text-white text-center font-medium text-xl mb-3'}`}>
          Daftar
        </button>
        <button onClick={handleLogin} className={`${formReg ? 'text-white text-center font-medium text-xl mb-3' : 'text-cyan-400 underline underline-offset-8 text-center font-medium text-xl mb-3'}`}>
          Masuk
        </button>
      </div>
      {formReg ? <FormRegistrasi /> : <FormLogin />}
    </div>
  );
};

export default Form;

import { useState, ChangeEvent } from 'react';

type FormState = {
  [key: string]: unknown;
};

export const useForm = (initialForm: FormState = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};

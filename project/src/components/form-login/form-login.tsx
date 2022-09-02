import {useAppDispatch} from '../../hooks';
import {AuthDataType} from '../../types/auth-data';
import {loginAction} from '../../store/api-actions';
import {ChangeEvent, FormEvent, useState} from 'react';
import {toast} from 'react-toastify';

function FormLogin(): JSX.Element {

  const EMAIL_REGEXP = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  const PASSWORD_REGEXP = /\d+[a-zA-Z]+|[a-zA-Z]+\d+/;
  const EMAIL_ERROR_MESSAGE = 'Некорректный логин';
  const PASSWORD_ERROR_MESSAGE = 'Некорректный пароль';

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const dispatch = useAppDispatch();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (formData.email !== null
      && formData.password !== null
      && EMAIL_REGEXP.test(formData.email)
      && PASSWORD_REGEXP.test(formData.password)
    ) {
      onFormSubmit({
        email: formData.email,
        password: formData.password
      });
    } else {
      if (formData.email === null || !EMAIL_REGEXP.test(formData.email)){
        toast.error(EMAIL_ERROR_MESSAGE);
      } else {
        if (formData.password === null || !PASSWORD_REGEXP.test(formData.password)) {
          toast.error(PASSWORD_ERROR_MESSAGE);
        }
      }
    }
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onFormSubmit = (autData: AuthDataType) => {
    dispatch(loginAction(autData));
  };

  return (
    <form className="login__form form" action="" method="" onSubmit={handleFormSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="login__submit form__submit button"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
}

export default FormLogin;

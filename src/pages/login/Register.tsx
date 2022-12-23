import {
  TextFieldElement,
  PasswordElement,
  PasswordRepeatElement
} from 'react-hook-form-mui'
import {
  FormWrapper, FormWrapperProps
} from '../../components/form/FormWrapper'
import {
  LoginProps,
  matchPasswordValidate,
  numberRegex,
  specialCharacterRegex,
} from './Login'


export const Register = ({
  onRegisterSubmit,
  onLoginRedirect,
  title = 'Register',
  description,
  submitButtonText = 'Register',
  defaultEmail,
  defaultPassword,
  minPasswordLength = 10,
  minSpecialCharLength = 2,
  minNumberLength = 2,
  closeModal = () => {},
  ...props
}:RegisterProps) => {

  const defaultValues = {
    email: defaultEmail,
    password: defaultPassword,
  };

  const onSuccess = (values: any) => {
    onRegisterSubmit(values);
    closeModal();
  }

  const onCancel = () => {
    closeModal();
  }

  if (!description) {
    description = (
      <DefaultDescription
        onLoginRedirect={onLoginRedirect}
      />
    );
  }

  return (
    <FormWrapper
      onSuccess={onSuccess}
      onCancel={onCancel}
      defaultValues={defaultValues}
      title={title}
      description={description}
      submitButtonText={submitButtonText}
      {...props}
    >

      <TextFieldElement
        label='Email'
        name='email'
        type={'email'}
        validation={{
          required: 'Email is required'
        }}
      />

      <PasswordElement
        label='Password'
        name='password'
        type={'password'}
        helperText={`Min length: ${minPasswordLength} | Min special characters: ${minSpecialCharLength} | Min numbers: ${minNumberLength}`}
        validation={{
          required: 'Password is required',
          minLength: {
            value: minPasswordLength,
            message: `Minimum password length: ${minPasswordLength}`,
          },
          validate: {
            minSpecialChar: (p: string) => matchPasswordValidate({
              p,
              minNumber: minSpecialCharLength,
              regex: specialCharacterRegex,
              message: `Min special characters: ${minSpecialCharLength}`,
            }),
            minNumber: (p: string) => matchPasswordValidate({
              p,
              minNumber: minNumberLength,
              regex: numberRegex,
              message: `Min numbers: ${minNumberLength}`,
            })
          }
        }}
      />

      <PasswordRepeatElement
        passwordFieldName='password'
        label='Confirm Password'
        name='confirmPassword'
        type={'password'}
        validation={{
          required: 'Password confirmation is required'
        }}
      />

    </FormWrapper>
  );
};

const DefaultDescription = ({
  onLoginRedirect = () => {},
}: any) => {

  const clickHandler = (event: any) => {
    event.preventDefault();
    onLoginRedirect();
  }

  return (
    <div className='register-description'>
      Already have an account?

      &nbsp;&nbsp;

      <a
        href='#'
        onClick={clickHandler}>

        Click Here

      </a>
    </div>
  );
}

export interface RegisterProps extends LoginProps {
  /**
   * Handler when Register form is submitted
   */
  onRegisterSubmit: (formValues: any) => void;
  /**
   * on User redirect to "Login" page
   */
  onLoginRedirect?: () => void,
}

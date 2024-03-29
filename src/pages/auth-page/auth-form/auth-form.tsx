import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useForm, Controller, SubmitHandler, useFormState } from "react-hook-form";
import { loginValidation, passwordValidation } from "./validation";
import './auth-form.css';


interface ISignInForm {
  login: string;
  password: string;
}

export const AuthForm = () => {
    const { handleSubmit, control } = useForm<ISignInForm>();
    const { errors } = useFormState({
            control
        })

    const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data);

    return (
      <div className="auth-form">
        <Typography variant="h4" component="div">
          Войдите
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          gutterBottom={true}
          className="auth-form__subtitle"
        >
          Чтобы получить доступ
        </Typography>
        <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="login"
            rules={loginValidation}
            render={({ field }) => (
              <TextField
                label="Логин"
                size="small"
                margin="normal"
                className="auth-form__input"
                fullWidth={true}
                onChange={(e) => field.onChange(e)}
                value={field.value}
                error={!!errors.login?.message}
                helperText={errors.login?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={ passwordValidation }
            render={({ field }) => (
              <TextField
                label="Пароль"
                size="small"
                margin="normal"
                className="auth-form__input"
                fullWidth={true}
                onChange={(e) => field.onChange(e)}
                value={field.value}
                error={!!errors.password?.message}
                helperText={errors.password?.message}
              />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth={true}
            disableElevation={true}
            sx={{
              marginTop: 2,
            }}
          >
            Войти
          </Button>
        </form>
      </div>
    );
}
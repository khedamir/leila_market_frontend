import Input from "@/components/Index";
import React, { useState } from "react";
import styles from "./Register.module.scss";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import InputItem from "@/components/InputItem";
import MaskedInput from "@/components/MeskedInput";
import axios from "axios";
import { useRouter } from "next/router";
import { fetch } from "@/redux/axios";
import Link from "next/link";
import { registerScheme } from "@/redux/validations";
import Head from "next/head";

type RegisterValuesType = {
  username: string;
  email: string;
  phone: string;
  password: string;
  re_password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterValuesType>({
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      re_password: "",
    },
    mode: "onBlur",
  });

  const [passwordIsValid, setPassowrdIsValid] = useState(true);
  const navigate = useRouter();
  const [registerError, setRegisterError] = useState(false);

  const onSubmit = (formValues: RegisterValuesType) => {
    if (formValues.password !== formValues.re_password) {
      setPassowrdIsValid(false);
      return;
    }
    setPassowrdIsValid(true);
    console.log(formValues);
    const postData = async () => {
      await fetch
        .post("/auth/users/", formValues)
        .then(() => {
          navigate.push("/register_info");
        })
        .catch((error) => {
          console.error(error);
          setRegisterError(true);
        });
    };

    postData();
  };

  return (
    <>
      <Head>
        <title>Регистрация</title>
      </Head>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.register}>
        {registerError && (
          <div className={styles.errorMessage}>
            <p>Не удалось зарегистрироваться :(</p>
            <p>Повторите попытку позже.</p>
          </div>
        )}
        <h1>Регистрация</h1>
        <div className={styles.registerForm}>
          <InputItem
            error={Boolean(errors.username)}
            errorMessage={errors.username?.message}
          >
            <Input
              {...register("username", registerScheme.username)}
              placeholder="Имя пользователя"
            />
          </InputItem>
          <InputItem
            error={Boolean(errors.email)}
            errorMessage={errors.email?.message}
          >
            <Input
              {...register("email", registerScheme.email)}
              placeholder="Электронная почта"
              type="email"
            />
          </InputItem>

          <InputItem
            error={Boolean(errors.phone)}
            errorMessage={errors.phone?.message}
          >
            <MaskedInput
              control={control}
              name={"phone"}
              rules={registerScheme.phone}
              mask={"+7 (999) 999-99-99"}
              placeholder={"+7"}
            />
          </InputItem>

          <InputItem
            error={Boolean(errors.password)}
            errorMessage={errors.password?.message}
          >
            <Input
              {...register("password", registerScheme.password)}
              placeholder="Пароль"
              type="password"
            />
          </InputItem>
          <InputItem
            error={Boolean(errors.re_password) || !passwordIsValid}
            errorMessage={errors.re_password?.message || "Пароль не верный"}
          >
            <Input
              {...register("re_password", registerScheme.re_password)}
              placeholder="Повторите пароль"
              type="password"
            />
          </InputItem>
          <span>
            {!passwordIsValid && <p>Повторный пароль не верный</p>}
            <Button>Зарегистрироваться</Button>
            <div className={styles.login}>
              Раньше уже делали регистрацию?
              <Link className={styles.loginLink} href="/login">
                Войти
              </Link>
            </div>
          </span>
        </div>
      </form>
    </>
  );
};

export default Login;

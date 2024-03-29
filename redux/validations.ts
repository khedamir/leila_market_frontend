export const loginSchema = {
  username: {
    required: "Заполните поле",
  },
  password: {
    required: "Укажите пароль",
  },
};

export const registerScheme = {
  username: {
    required: "Укажите имя",
    minLength: {
      value: 2,
      message: "Имя пользователя должно содержать не менее 2 символов",
    },
    maxLength: {
      value: 20,
      message: "Имя пользователя должно содержать не более 20 символов",
    },
    pattern: {
      value: /^[a-zA-Z\d]+$/,
      message:
        "Имя пользователя может содержать только латинские символы и цифры",
    },
  },
  email: {
    required: "Укажите электронную почту",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Неверный адрес электронной почты",
    },
  },
  phone: {
    required: "Укажите телефон",
    pattern: {
      value: /^(\+7\s)?\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
      message: "Неверный телефон",
    },
  },
  password: {
    required: "Введите пароль",
    minLength: {
      value: 8,
      message: "Пароль должен содержать не менее 8 символов",
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      message:
        "Пароль должен содержать хотя бы одну букву в верхнем регистре, одну букву в нижнем регистре и одну цифру",
    },
  },
  re_password: {
    required: "Введите пароль снова",
    minLength: {
      value: 8,
      message: "Пароль должен содержать не менее 8 символов",
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      message:
        "Пароль должен содержать хотя бы одну букву в верхнем регистре, одну букву в нижнем регистре и одну цифру",
    },
  },
};

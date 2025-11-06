import "./Form.css";
import iconClose from "@/assets/icons/icon-close.png";
import { useState, type Dispatch, type SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import { type ApplicationForm } from "./types";
import { shema } from "./shema";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = { setOpen: Dispatch<SetStateAction<boolean>> };

export const Form = ({ setOpen }: Props) => {
  const close = () => {
    setOpen(false);
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationForm>({
    resolver: yupResolver(shema),
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      email: "",
      telegram: "",
    },
  });

  const submitForm = (data: ApplicationForm) => {
    console.log("priv");

    console.log(data);

    reset();
    setOpen(false);
  };

  console.log(errors);

  return (
    <div className="form-wrapper">
      <div onClick={close}>
        <img className="form__close" src={iconClose} alt="" />
      </div>
      <form onSubmit={handleSubmit(submitForm)} action="">
        <div className="form">
          <h3 className="form__title">Оформить заявку</h3>
          <div className="form__name">
            <div className="form__item">
              <label htmlFor="name">Имя</label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    id="name"
                    className="form__input"
                    type="text"
                    placeholder="Введите имя"
                    {...field}
                  />
                )}
              />
              {errors.name && (
                <span className="form__error">{errors.name.message}</span>
              )}
            </div>
            <div className="form__item">
              <label htmlFor="surname">Фамилия</label>
              <Controller
                name="surname"
                control={control}
                render={({ field }) => (
                  <input
                    id="surname"
                    className="form__input"
                    type="text"
                    placeholder="Введите фамилию"
                    {...field}
                  />
                )}
              />
              {errors.name && (
                <span className="form__error">{errors.surname?.message}</span>
              )}
            </div>
          </div>
          <div className="form__item">
            <label htmlFor="phone">Телефон</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  id="phone"
                  className="form__input"
                  type="text"
                  placeholder="Введите телефон"
                  {...field}
                />
              )}
            />
            {errors.name && (
              <span className="form__error">{errors.phone?.message}</span>
            )}
          </div>
          <div className="form__item">
            <label htmlFor="telegram">Телеграмм</label>
            <Controller
              name="telegram"
              control={control}
              render={({ field }) => (
                <input
                  id="telegram"
                  className="form__input"
                  type="text"
                  placeholder="Введите телеграм"
                  {...field}
                />
              )}
            />
            {errors.name && (
              <span className="form__error">{errors.telegram?.message}</span>
            )}
          </div>
          <div className="form__item">
            <label htmlFor="email">Почта</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  id="email"
                  className="form__input"
                  type="text"
                  placeholder="Введите почту"
                  {...field}
                />
              )}
            />
            {errors.name && (
              <span className="form__error">{errors.email?.message}</span>
            )}
          </div>
          <button type="submit" className="form__button">
            Отправить заявку
          </button>
          <div>
            <span className="form__subtitle">
              Мы свяжемся с вами в течении 15 минут
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

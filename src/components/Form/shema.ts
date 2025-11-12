import { Modal } from './../Modal/Modal';
import { useState } from 'react'
import * as yup from 'yup'

declare module "yup"{
    interface StringSchema{
        phoneValidation(message?: string): StringSchema
    }
}


export const shema = yup.object().shape({
    name: yup.string().trim().required("Это поле обязательно"),
    surname: yup.string().trim().required("Это поле обязательно"),
    email: yup.string().trim().required("Это поле обязательно").email("Неккоректный email"),
    phone: yup.string().trim().required(),
    telegram: yup.string().trim().required("Это поле обязательно")
})
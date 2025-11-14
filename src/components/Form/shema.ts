import * as yup from 'yup'

export const shema = yup.object().shape({
    name: yup.string().trim().required("Это поле обязательно"),
    surname: yup.string().trim().required("Это поле обязательно"),
    email: yup.string().trim().required("Это поле обязательно").email("Неккоректный email"),
    phone: yup.string().trim().required(),
    telegram: yup.string().trim().required("Это поле обязательно")
})
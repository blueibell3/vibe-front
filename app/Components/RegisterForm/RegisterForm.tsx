'use client'
import { useForm } from 'react-hook-form';
import ReusableInput from '../ReusableInput/ReusableInput'
import styles from './RegisterForm.module.scss'

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <div className={styles.conteiner}>
            <div className={styles.regist}>
                <ReusableInput
                    type='email'
                    placeholder='Enter email'
                    register={register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Entered value does not match email format',
                        },
                    })}
                    mode={errors.email ? 'error' : isValid ? 'success' : 'standard'}

                />
            </div>
        </div>
    )
}

export default RegisterForm
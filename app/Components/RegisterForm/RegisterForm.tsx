'use client'
import { useForm } from 'react-hook-form';
import ReusableInput from '../ReusableInput/ReusableInput'
import styles from './RegisterForm.module.scss'
import Button from '../Button/Button';
import Image from 'next/image'

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
        <form onSubmit={handleSubmit(onSubmit)} className={styles.conteiner}>
            <div className={styles.regist}>
                <Image className={styles.logo} src='/logo.png' width={170} height={70} alt={"logo"} />
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
                <ReusableInput
                    type="password"
                    placeholder="Enter Password"
                    register={register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters long',
                        },
                    })}
                    mode={errors.password ? 'error' : isValid ? 'success' : 'standard'}
                />
                <ReusableInput
                    type="password"
                    placeholder="Confirm password"
                    register={register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters long',
                        },
                    })}
                    mode={errors.password ? 'error' : isValid ? 'success' : 'standard'}
                />
                <div className={styles.buttonWrapper}>
                    <div className={styles.button}>
                        <Button title={"Sign in"} type={"primary"} />
                    </div>
                </div>
                <div className={styles.clicklSignUp}>
                    <a className={styles.signUpText} href="/authorisation">already have an account? Sign in</a>
                </div>
            </div>
        </form>
    )
}
export default RegisterForm
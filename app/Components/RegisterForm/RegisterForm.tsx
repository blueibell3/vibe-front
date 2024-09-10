'use client'
import { useForm } from 'react-hook-form';
import ReusableInput from '../ReusableInput/ReusableInput'
import styles from './RegisterForm.module.scss'
import Button from '../Button/Button';
import Image from 'next/image'
import axios from 'axios';
import { setCookie } from '@/app/helpers/cookies';
import { useRouter } from 'next/navigation';


const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
    } = useForm();

    const router = useRouter()

    const onSubmit = (values: any) => {
        axios.post('https://vibe-backend-prrr.onrender.com/users', values)
            .then(r => {
                setCookie('token', r.data.accessToken, 60);
                router.push('/')
            })
    };

    const password = watch('password');

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
                    placeholder="Confirm Password"
                    register={register('confirmPassword', {
                        required: 'Please confirm your password',
                        validate: value =>
                            value === password || 'this passwords did not match',
                    })}
                    mode={errors.confirmPassword ? 'error' : isValid ? 'success' : 'standard'}
                />

                {errors.confirmPassword && (
                    <p className={styles.errorMessage}>
                        {typeof errors.confirmPassword.message === 'string' && errors.confirmPassword.message}
                    </p>
                )}

                <div className={styles.buttonWrapper}>
                    <div className={styles.button}>
                        <Button title={"Sign up"} type={"primary"} />
                    </div>
                </div>
                <div className={styles.clicklSignUp}>
                    <a className={styles.signUpText} href="/authorisation">Already have an account? Sign in</a>
                </div>
            </div>
        </form>
    )
}
export default RegisterForm;

'use client'
import { useForm } from "react-hook-form";
import styles from "./AuthForm.module.scss"
import Image from 'next/image'
import ReusableInput from "../ReusableInput/ReusableInput";
import Button from "../Button/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { setCookie } from "@/app/helpers/cookies";
import { useState } from "react";

const AuthForm = () => {
    const [error, setError] = useState<string | null>(null);
    const [rememberMe, setRememberMe] = useState(false); // Added state for remember me

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm();

    const router = useRouter();

    const onSubmit = (values: any) => {
        axios.post('https://vibetunes-backend.onrender.com/auth/signIn', values)
        .then(r => {
            setCookie('token', r.data.accessToken, 60);
            router.push('/')
        })
        .catch(err => {
            setError('Invalid email or password. Please try again.');
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.mainContainer}>
                <div className={styles.authContainer}>

                    <Image className={styles.logo} src='/logo.png' width={170} height={70} alt={"logo"} />

                    <div className={styles.forms}>
                        <ReusableInput
                            type="email"
                            placeholder="Enter Email"
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
                    </div>

                    {error && <div className={styles.error}>{error}</div>}

                    {/* "Remember Me" Checkbox */}
                    <div className={styles.rememberMe}>
                        <input
                            className={styles.checkbox}
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label htmlFor="rememberMe"> Remember password</label>
                    </div>

                    <div className={styles.buttonWrapper}>
                        <div className={styles.button}>
                            <Button title={"Sign in"} type={"primary"} />
                        </div>
                    </div>

                    <div className={styles.clickSignUp}>
                        <a className={styles.signUpText} href="/register">Don&apos;t have an account? Sign up</a>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AuthForm;

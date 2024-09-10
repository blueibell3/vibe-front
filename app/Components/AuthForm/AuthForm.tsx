'use client'
import { useForm } from "react-hook-form";
import styles from "./AuthForm.module.scss"
import Image from 'next/image'
import ReusableInput from "../ReusableInput/ReusableInput";
import Button from "../Button/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { setCookie } from "@/app/helpers/cookies";

const AuthForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    const onSubmit = (values: any) => {
        axios.post('https://vibe-backend-prrr.onrender.com/auth/signIn', values)
        .then(r => {
            setCookie('token', r.data.accessToken, 60);
            router.push('/')
        })
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
                    <div className={styles.davighale}>
                        <div className={styles.button}>
                            <Button title={"Sign in"} type={"primary"} />
                        </div>
                    </div>
                    <div className={styles.clicklSignUp}>
                        <a className={styles.signUpText} href="/register">Don&apos;t have an account? Sign up</a>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AuthForm;

function setCoockie(arg0: string, accessToken: any, p0: number) {
    throw new Error("Function not implemented.");
}

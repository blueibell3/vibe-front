'use client'
import { useState } from 'react';
import styles from './ReusableInput.module.scss';
import { useForm } from 'react-hook-form';

type Props = {
    type: 'email' | 'password';
    placeholder: string;
};

const ReusableInput = (props: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid},
    } = useForm();

    const inputData = props.type === 'email'
        ? {
            required: true,
            pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
            },
        }
        : { required: true, minLength: 8 };


    let mode = 'standard';
    if (errors[props.type]) {
        mode = 'error';
    } else if (isValid) {
        mode = 'success';
    }


    return (
        <form className={styles.inputMain} onSubmit={handleSubmit(() => {})}>
              <span className={styles.inputText}>{props.placeholder}</span>
            <input
                className={`${styles.input} ${styles[mode]}`}
                type={props.type === 'email' ? 'email' : 'password'}
                placeholder={props.placeholder}
                {...register(props.type, inputData)}
                onFocus={(event) => {
                    if (event.target.value === props.placeholder) {
                        event.target.value = '';
                    }
                }}
            />
        </form>
    );
};

export default ReusableInput;
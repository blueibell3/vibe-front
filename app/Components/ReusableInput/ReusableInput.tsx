'use client'
import styles from './ReusableInput.module.scss';
import { UseFormRegister, UseFormRegisterReturn, useForm } from 'react-hook-form';

type Props = {
    type: 'email' | 'password';
    placeholder: string;
    error?: string; 
    mode?: 'standard' | 'error' | 'success';
    register: UseFormRegisterReturn;
};


const ReusableInput = ({ type, placeholder, error, mode = 'standard', register }: Props) => {
    return (
        <div className={styles.inputMain}>
              <span className={styles.inputText}>{placeholder}</span>
              <input
                className={`${styles.input} ${styles[mode]}`}
                type={type}
                placeholder={placeholder}
                {...register}
            />
        </div>
    );
};

export default ReusableInput;
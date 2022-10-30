import React, {useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom';
import Input from "../components/Input"
import Button from "../components/Button"
import {useLoginFormValidator} from "../utils/useLoginFormValidator";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// --redux
import {connect} from "react-redux";
import {login} from "../redux/actions/loginAction";

function Login({login, data, handleStatus}) {
    const navigate = useNavigate();
    const isFirstRender = useRef(true)

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const { errors, validateForm, onBlurField } = useLoginFormValidator(form);

    const handleChange = (e) => {
        const field = e.target.name;
        const nextFormState = {
            ...form,
            [field]: e.target.value,
        };
        setForm(nextFormState);
        if (errors[field].dirty)
            validateForm({
                form: nextFormState,
                errors,
                field,
            });
    }

    const onSubmitForm = e => {
        e.preventDefault();
        const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
        if (!isValid) return;
        login(form);
    };

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return;
        }
        if(data.token) {
            navigate('/')
            handleStatus(true)
        } else{
            toast.error(data?.response?.data?.error || "something went wrong", {
                hideProgressBar: true,
                autoClose: 3000
            })
        }
    }, [data])

  return (
    <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-16 py-12 mt-4 text-left bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-center">Login to your account</h3>
                <form className="mt-6" onSubmit={onSubmitForm}>
                    <div className="mt-7 relative">
                        <Input type='text' placeholder='Email' name="email" onChange={handleChange} value={form.email} onBlur={onBlurField} />
                        {errors.email.dirty && errors.email.error ? (
                            <p className='text-red-600 absolute text-xs mt-1'>{errors.email.message}</p>
                        ) : null}
                    </div>
                    <div className="mt-7 relative">
                        <Input type='password' name="password" placeholder='Password' onChange={handleChange} value={form.password} onBlur={onBlurField} />
                        {errors.password.dirty && errors.password.error ? (
                            <p className='text-red-600 absolute text-xs mt-1'>{errors.password.message}</p>
                        ) : null}
                    </div>
                    <div className="flex items-baseline justify-between mt-10">
                        <Button
                            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                            placeholder="Login"
                        />
                    </div>
                </form>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

const mapStateToProps = ({ LoginReducer }) => {
    const { loading, data } = LoginReducer;
    return { loading, data };
};

const mapDispatchToProps = {
    login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
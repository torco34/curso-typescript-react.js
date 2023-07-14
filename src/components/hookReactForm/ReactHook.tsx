import React from 'react'
import { useForm } from 'react-hook-form';
interface FormData {
    firstName: string;
    secondName: string;
    email: string;
    password: string;
    confirmPassword: string;
}
export const ReactHook = () => {

    const { register, handleSubmit, getValues, reset } = useForm<FormData>()
    const onSubmit = handleSubmit((values) => {
        alert("Hola mundo:" + JSON.stringify(values))
        reset();
    })
    return (
        <div className='container'>
            <h2 className='text-center text-info'>React Hook Form</h2>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input {...register("firstName", { required: true })} className='form-control' placeholder='Nombre' />
                </div>
                <div className='form-group'>
                    <input {...register("email", { required: true })} className='form-control' placeholder='Email' />
                </div>
                <div className='form-group'>
                    <input {...register("secondName", { required: true })} className='form-control' placeholder='Apellido' />
                </div>
                <div className='form-group'>
                    <input {...register("password", { required: true })} className='form-control' type='password' placeholder='Contraseña' />
                </div>
                <div className='form-group'>
                    <input
                        {...register("confirmPassword", {
                            required: true,
                            validate: (value) => value === getValues("password"),
                        })}
                        className='form-control'
                        type='password'
                        placeholder='Confirmar Contraseña'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Enviar</button>
            </form>
        </div>
    );

};
    )
}

import { ChangeEvent, FocusEvent } from "react";
import { joiSchema } from "../helpers/helpers";
import { useFormContext } from "../pages/form-page";
import Joi from "joi";
import { ValidationError } from "joi";

export const Info=()=>{
    const {fieldsValue,setFieldsData,inputValidationError,emitInputError}=useFormContext();
    const handleBlur=(e:FocusEvent<HTMLInputElement>)=>{
        const propertySchema = Joi.object({[e.target.name]: joiSchema[e.target.name as keyof typeof joiSchema],});
        const {error}=propertySchema.validate({[e.target.name]:e.target.value})
        if(error) emitInputError(error)
        else emitInputError(new ValidationError('',[],{isValid:e.target.name})) // return empty message when validation sucessed
    }
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFieldsData({[e.target.name]:e.target.value})
    }
    return(
        <div className="info">
            <h1 className="text-marine-blue font-bold text-2xl">Personal info</h1>
            <p className="text-cool-gray text-sm mb-7">Please provide your name, email address, and phone number.</p>
            <form action="">
                <div className="name flex flex-col mb-5">
                    <div className="flex justify-between">
                        <label className="text-xs font-normal text-marine-blue mb-1" htmlFor="name">Name</label>
                        {Object.keys(inputValidationError._original)[0]==='name'?<p className="text-red text-xs">{inputValidationError.message}</p>:''}
                    </div>
                    <input onChange={(e)=>handleChange(e)} onBlur={(e)=>handleBlur(e)} placeholder="e.g. Stephen King" type="text" name="name" id="name" value={fieldsValue.name} className={Object.keys(inputValidationError._original)[0]==='name'?'border h-11 rounded-lg px-3 py-1 border-solid border-red  outline-0 placeholder:text-cool-gray placeholder:font-medium':'border h-11 rounded-lg px-3 py-1 border-solid border-light-gray outline-0 placeholder:text-cool-gray placeholder:font-medium'} />
                </div>
                <div className="email flex flex-col mb-5">
                    <div className="flex justify-between">
                    <label className="text-xs font-normal text-marine-blue mb-1" htmlFor="email">Email Address</label>
                        {Object.keys(inputValidationError._original)[0]==='email'?<p className="text-red text-xs">{inputValidationError.message}</p>:''}
                    </div>
                    <input onChange={(e)=>handleChange(e)} onBlur={(e)=>handleBlur(e)} placeholder="e.g. stephenking@lorem.com" type="text" name="email" id="email" value={fieldsValue.email} className={Object.keys(inputValidationError._original)[0]==='email'?'border h-11 rounded-lg px-3 py-1 border-solid border-red  outline-0 placeholder:text-cool-gray placeholder:font-medium':'border h-11 rounded-lg px-3 py-1 border-solid border-light-gray outline-0 placeholder:text-cool-gray placeholder:font-medium'} />
                </div>
                <div className="phone flex flex-col mb-5">
                    <div className="flex justify-between">
                        <label className="text-xs font-normal text-marine-blue mb-1" htmlFor="phone">Phone Number</label>
                        {Object.keys(inputValidationError._original)[0]==='phone'?<p className="text-red text-xs">{inputValidationError.message}</p>:''}
                    </div>
                    <input onChange={(e)=>handleChange(e)} onBlur={(e)=>handleBlur(e)}placeholder="e.g. +1 234 567 890" type="text" name="phone" id="phone" value={fieldsValue.phone} className={Object.keys(inputValidationError._original)[0]==='phone'?'border h-11 rounded-lg px-3 py-1 border-solid border-red  outline-0 placeholder:text-cool-gray placeholder:font-medium':'border h-11 rounded-lg px-3 py-1 border-solid border-light-gray outline-0 placeholder:text-cool-gray placeholder:font-medium'}/>
                </div>
            </form>
        </div>
    )
}
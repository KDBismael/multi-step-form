import Joi from "joi";

const step1='info';
const step2='plan';
const step3='addOns';
const step4='summary';
const step5='confirm';
const plan1='Arcade';
const plan2='Advanced';
const plan3='Pro';
const time1='Monthly';
const time2='Yearly';

const joiSchema={
    name:Joi.string().required().max(20).messages({'any.required': `This field is required!`,'string.empty': `This field can't be empty!`,'string.max': `This field has max 20 characters!`}),
    email:Joi.string().email({minDomainSegments: 2,tlds: { allow: ["com", "net"] }}).required().messages({'any.required': `This field is required!`,'string.empty': `This field can't be empty!`,'string.email': `This should be valid email!`}),
    phone:Joi.string().pattern(/\d{8,10}/).required().messages({'string.pattern.base':'This field has min 8 numbers!.','any.required': `This field is required!`,'string.empty': `This field can't be empty!`,}),
}
export {joiSchema};
export {step1,step2,step3,step4,step5,plan1,plan2,plan3,time1,time2};
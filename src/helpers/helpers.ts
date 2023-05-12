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
    name:Joi.string().required().max(20),
    email:Joi.string().email({minDomainSegments: 2,tlds: { allow: ["com", "net"] }}).required(),
    phone:Joi.number().min(8).required()
}
export {joiSchema};
export {step1,step2,step3,step4,step5,plan1,plan2,plan3,time1,time2};
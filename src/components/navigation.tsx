import { Step } from "./step";
import { useFormContext } from "../pages/form-page";
import { step2,step3,step4,step5 } from "../helpers/helpers";
import { useEffect, useState } from "react";

export const Navigation=()=>{
    const steps=[
        {
            id:1,
            description:"Your info"
        },
        {
            id:2,
            description:"Select plan"
        },
        {
            id:3,
            description:" Add-ons"
        },
        {
            id:4,
            description:"Summary"
        },
    ];
    const {step}=useFormContext();
    const[activeNmber,setActiveNmber]=useState(1);
    useEffect(()=>{
        switch(step){
            case step2:
                setActiveNmber(2);
                break;
            case step3:
                setActiveNmber(3);
                break;
            case step4:
                setActiveNmber(4);
                break;
            case step5:
                setActiveNmber(4);
                break;
            default:
                setActiveNmber(1);
        }
    },[step])
    return(
        <div className="navigation h-48 flex items-start w-full justify-center gap-x-5 bg-sidebar lg:w-auto lg:h-auto lg:block lg:m-3 rounded-none lg:rounded-lg pt-5 lg:p-8">
            {steps.map(value =>(<Step active={activeNmber} key={value.id} step={step} content={value}/>))}
        </div>
    )
}
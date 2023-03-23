import { useState,createContext,useContext } from "react";
import { AddOns } from "../components/addOns";
import { Info } from "../components/info";
import { Plan } from "../components/plan";
import { Summary } from "../components/summary";
import { FormLayout } from "../layouts/form-layout";
import {step1,step2,step3,step4,step5} from "../helpers/helpers";
import { Confirm } from "../components/confirm";

interface Context{
    step:string;
    back:()=>void;
    next:()=>void;
}

const formContext=createContext<Context>({
    step:step1,
    back:()=>{},
    next:()=>{},
});

export const FormPage=()=>{
    const [step,setStep]=useState<string>(step1);
    const back=()=>{
        switch(step){
            case step4:
                return setStep(step3);
            case step3:
                return setStep(step2);
            case step2:
                return setStep(step1);
            default:
                return;
        }
    }
    const next=()=>{
        switch(step){
            case step1:
                return setStep(step2);
            case step2:
                return setStep(step3);
            case step3:
                return setStep(step4);
            case step4:
                return setStep(step5);
            default:
                return;
        }
    }

    const value={step,back,next}

    return(
        <formContext.Provider value={value}>
            <div className="w-full h-full bg-magnolia">
                <FormLayout>
                    {step===step1? <Info/>:step===step2?<Plan/>:step===step3?<AddOns/>:step===step4?<Summary/>:step===step5?<Confirm/>:''}
                </FormLayout>
            </div>

        </formContext.Provider>
    )
}
export const useFormContext=()=>useContext(formContext);
import { useState,createContext,useContext } from "react";
import { AddOns } from "../components/addOns";
import { Info } from "../components/info";
import { Plan } from "../components/plan";
import { Summary } from "../components/summary";
import { FormLayout } from "../layouts/form-layout";
import {step1,step2,step3,step4,step5,plan1, time1, time2} from "../helpers/helpers";
import { Confirm } from "../components/confirm";

interface Context{
    step:string;
    back:()=>void;
    next:()=>void;
    plan:string;
    timeFrame:string;
    handlePlanClick:(name:string)=>void;
    handleTimeFrameClick:()=>void;
    addOnsPrices:number;
    handleAddOnsPrices:(price:number,checked:boolean)=>void;
}

const formContext=createContext<Context>({
    step:step1,
    back:()=>{},
    next:()=>{},
    plan:plan1,
    timeFrame:time1,
    handlePlanClick:(name:string)=>{},
    handleTimeFrameClick:()=>{},
    addOnsPrices:0,
    handleAddOnsPrices:(price:number,checked:boolean)=>{},
});

export const FormPage=()=>{
    const [step,setStep]=useState<string>(step1);
    const [plan,setPlan]=useState<string>(plan1);
    const [timeFrame,setTimeFrame]=useState<string>(time1);
    const [addOnsPrices,setAddOnsPrices]=useState<number>(0);

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
    const handlePlanClick=(name:string) => {
        setPlan(name);
        /**UseState reactivity rerender the dom that make easier to change the style based on that */
    };
    const handleTimeFrameClick=()=>{
        switch(timeFrame){
            case time1:
                setTimeFrame(time2);
                break;
            case (time2):
                setTimeFrame(time1);
                break;
            default:
                setTimeFrame(time1);
        }
    }
    const handleAddOnsPrices=(price:number,checked:boolean)=>{
        if(checked){
            setAddOnsPrices(addOnsPrices+price);
        }else{
            setAddOnsPrices(addOnsPrices-price);
        }
    }

    const value={step,back,next,plan,timeFrame,handlePlanClick,handleTimeFrameClick,addOnsPrices,handleAddOnsPrices}

    return(
        <formContext.Provider value={value}>
            <div className="w-full h-full bg-magnolia grid place-content-center">
                <FormLayout>
                    {step===step1? <Info/>:step===step2?<Plan/>:step===step3?<AddOns/>:step===step4?<Summary/>:step===step5?<Confirm/>:''}
                </FormLayout>
            </div>

        </formContext.Provider>
    )
}
export const useFormContext=()=>useContext(formContext);
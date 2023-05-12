import { useState,createContext,useContext } from "react";
import { AddOns } from "../components/addOns";
import { Info } from "../components/info";
import { Plan } from "../components/plan";
import { Summary } from "../components/summary";
import { FormLayout } from "../layouts/form-layout";
import {step1,step2,step3,step4,step5,plan1, time1, time2} from "../helpers/helpers";
import { Confirm } from "../components/confirm";
import { ValidationError } from "joi";

interface AddOnsT{
    id:number,
    title:string,
    description:string,
    montlyPrice:number,
    yearlyPrice:number,
}
interface planT{
    id: number;
    name: string;
    image: string;
    monthlyPrice: number;
    yearlyPrice: number;
}
interface Context{
    step:string;
    back:()=>void;
    next:()=>void;
    plan:string;
    planPrices:number;
    timeFrame:string;
    handlePlanClick:(name:string,yearlyPrice:number,monthlyPrice:number)=>void;
    handleTimeFrameClick:(plan:planT)=>void;
    addOnsPrices:number;
    handleAddOnsPrices:(addOn:AddOnsT)=>void;
    checked1:boolean;
    checked2:boolean;
    checked3:boolean;
    validForm:boolean,
    inputValidationError:ValidationError,
    addOnsList:AddOnsT[];
    goToInitial:()=>void;
    emitInputError:(data:ValidationError)=>void;
}

const formContext=createContext<Context>({
    step:step1,
    back:()=>{},
    next:()=>{},
    plan:plan1,
    planPrices:9,
    timeFrame:time1,
    handlePlanClick:(name:string,monthlyPrice:number,yearlyPrice:number)=>{},
    handleTimeFrameClick:(plan:planT)=>{},
    addOnsPrices:0,
    handleAddOnsPrices:(addOn:AddOnsT)=>{},
    checked1:false,
    checked2:false,
    checked3:false,
    validForm:false,
    inputValidationError:new ValidationError('',[],{}),
    addOnsList:[],
    goToInitial:()=>{},
    emitInputError:(data:ValidationError)=>{},
});

export const FormPage=()=>{
    const [step,setStep]=useState<string>(step1);
    const [plan,setPlan]=useState<string>(plan1);
    const [timeFrame,setTimeFrame]=useState<string>(time1);
    const [addOnsPrices,setAddOnsPrices]=useState<number>(0);
    const [planPrices,setPlanPrices]=useState<number>(timeFrame===time1? 9:90);
    const [addOnsList,setAddOnsList]=useState<AddOnsT[]>(Array);
    const [checked1,setChecked1]=useState(false);
    const [checked2,setChecked2]=useState(false);
    const [checked3,setChecked3]=useState(false);
    const [validForm,setValidForm]=useState(false);
    const [inputValidationError,setInputValidationError]=useState<ValidationError>(new ValidationError('',[],{}));
    
    const emitInputError=(data:ValidationError)=>{
        setInputValidationError(data);
    }
    const goToInitial=()=>{
        setStep(step1);
    }
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
        const buttons=document.querySelector('.buttons')as HTMLElement;/**
            Add this here due to bugs when going to the last step (the thanks you step).
         */
        switch(step){
            case step1:
                if(validForm) return setStep(step2);
                // setInputValidationError()
                break;
            case step2:
                return setStep(step3);
            case step3:
                return setStep(step4);
            case step4:
                buttons.style.display='none';//here is we hide it before rendering the last step.
                return setStep(step5);
            default:
                return;
        }
    }
    const handlePlanClick=(name:string,yearlyPrice:number,monthlyPrice:number) => {
        setPlan(name);
        if(timeFrame===time1){
            setPlanPrices(monthlyPrice);
        }else{
            setPlanPrices(yearlyPrice);
        }
        /**UseState reactivity rerender the dom that make easier to change the style based on that */
    };
    const handleTimeFrameClick=(plan:planT)=>{
        switch(timeFrame){
            case time1:
                setTimeFrame(time2);
                setPlanPrices(plan.yearlyPrice);
                break;
            case (time2):
                setTimeFrame(time1);
                setPlanPrices(plan.monthlyPrice);
                break;
            default:
                setTimeFrame(time1);
                setPlanPrices(plan.monthlyPrice);
        }
    }
    const handleAddOnsPrices=(addOn:AddOnsT)=>{
        let state=[checked1,checked2,checked3];
        let setState=[setChecked1,setChecked2,setChecked3];
        let addOnsDataList=[...addOnsList]
        let price=timeFrame===time1?addOn.montlyPrice:addOn.yearlyPrice
        for (let i = 0; i <state.length; i++) {
            if(i===addOn.id){
                setState[i](!state[i]);
                if(!state[i]){
                    setAddOnsPrices(addOnsPrices+price);
                    addOnsDataList.push(addOn);
                    setAddOnsList(addOnsDataList);
                }else{
                    setAddOnsPrices(addOnsPrices-price);
                    addOnsDataList=addOnsDataList.filter( (item) => {
                        return item.id!==addOn.id
                    });
                    console.log(addOnsDataList)
                    setAddOnsList(addOnsDataList);
                }
            }
        }
    }

    const value={step,back,next,plan,timeFrame,handlePlanClick,handleTimeFrameClick,addOnsPrices,handleAddOnsPrices,planPrices,checked1,checked2,checked3,addOnsList,goToInitial,validForm,inputValidationError,emitInputError}

    return(
        <formContext.Provider value={value}>
            <div className="w-full h-full bg-magnolia grid lg:place-content-center overflow-x-hidden">
                <FormLayout>
                    {step===step1? <Info/>:step===step2?<Plan/>:step===step3?<AddOns/>:step===step4?<Summary/>:step===step5?<Confirm/>:''}
                </FormLayout>
            </div>

        </formContext.Provider>
    )
}
export const useFormContext=()=>useContext(formContext);
import { time2 } from "../helpers/helpers";
import { useFormContext } from "../pages/form-page";

interface props{
    data:{
        id:number;
        name:string;
        image:string;
        monthlyPrice:string;
        yearlyPrice:string;
    };
}

export const PlanType=({data}:props)=>{
    const {plan,timeFrame,handlePlanClick}=useFormContext();
    const {image,yearlyPrice,monthlyPrice,name,id}=data;
    return(
        <div onClick={()=>handlePlanClick(name)} className={plan===name? 'cursor-pointer transition-border duration-300 border border-marine-blue rounded-md p-5 w-[120px] bg-magnolia':'cursor-pointer transition-border duration-300 border border-cool-gray hover:border-marine-blue rounded-md p-5 w-[120px]'}>
            <div className="mb-8"><img src={image} alt=""/></div>
            <div className="grid">
                <h4 className="text-marine-blue font-medium">{name}</h4>
                <span className="text-cool-gray text-xs">{timeFrame!==time2?monthlyPrice:yearlyPrice}</span>
                {timeFrame===time2 && <span className="text-marine-blue text-xs">2 months free</span>}
            </div>
        </div>
    );
}
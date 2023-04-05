import { time2 } from "../helpers/helpers";
import { useFormContext } from "../pages/form-page";

interface props{
    data:{
        id:number;
        name:string;
        image:string;
        monthlyPrice:number;
        yearlyPrice:number;
    };
}

export const PlanType=({data}:props)=>{
    const {plan,timeFrame,handlePlanClick}=useFormContext();
    const {image,yearlyPrice,monthlyPrice,name}=data;
    return(
        <div onClick={()=>handlePlanClick(name,yearlyPrice,monthlyPrice)} className={plan===name? 'cursor-pointer transition-border duration-300 border border-marine-blue rounded-md p-5 lg:w-[120px] bg-magnolia lg:block flex items-center':'cursor-pointer transition-border duration-300 border border-cool-gray hover:border-marine-blue rounded-md p-5 lg:w-[120px] lg:block flex items-center'}>
            <div className="self-start lg:self-auto lg:mb-8"><img src={image} alt=""/></div>
            <div className="grid ml-4 lg:ml-auto">
                <h4 className="text-marine-blue font-medium">{name}</h4>
                <span className="text-cool-gray text-xs">{`+$${timeFrame!==time2?monthlyPrice+'/mo':yearlyPrice+'/yr'}`}</span>
                {timeFrame===time2 && <span className="text-marine-blue text-xs">2 months free</span>}
            </div>
        </div>
    );
}
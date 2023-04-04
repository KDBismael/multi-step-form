import { time1, time2 } from "../helpers/helpers";
import { useFormContext } from "../pages/form-page";
import { PlanType } from "./planType";


export const Plan=()=>{
    const plansTypeData=[
        {
            id:0,
            name:'Arcade',
            image:'./images/icon-arcade.svg',
            monthlyPrice:9,
            yearlyPrice:90
        },
        {
            id:1,
            name:'Advanced',
            image:'./images/icon-advanced.svg',
            monthlyPrice:12,
            yearlyPrice:120
        },
        {
            id:2,
            name:'Pro',
            image:'./images/icon-pro.svg',
            monthlyPrice:15,
            yearlyPrice:150
        },
    ]
    const {timeFrame,plan,handleTimeFrameClick}=useFormContext();
    let selectedPlan=plansTypeData.find(x => x.name===plan)||plansTypeData[0];
    return(
        <div>
            <h1 className="text-marine-blue font-bold text-2xl">Select your plan</h1>
            <p className="text-cool-gray text-sm mb-7">You have the option of monthly or yearly billing.</p>
            <div className=" grid grid-cols-3 gap-x-3">
                {plansTypeData.map(plan =>(<PlanType key={plan.id} data={plan}/>))}
            </div>
            <div className="p-2 bg-alabaster mt-8 text-center rounded-md flex justify-center">
                <span className={timeFrame===time1?'font-medium text-marine-blue':'font-medium text-cool-gray'}>Monthly</span>
                <label className="relative inline-flex items-center cursor-pointer mx-3">
                <input onChange={()=>handleTimeFrameClick(selectedPlan)} type="checkbox" value={timeFrame} className="sr-only peer" checked={timeFrame===time1?false:true}/>
                <div className="w-11 h-6 bg-marine-blue outline-none focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                <span  className={timeFrame===time2?'font-medium text-marine-blue':'font-medium text-cool-gray'}>Yearly</span>
            </div>
        </div>
    )
}
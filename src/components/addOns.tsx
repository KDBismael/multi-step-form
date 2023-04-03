import { useState } from "react";
import { useFormContext } from "../pages/form-page"

export const AddOns=()=>{
    const {handleAddOnsPrices}=useFormContext();
    const [checked1,setChecked1]=useState(false);
    const [checked2,setChecked2]=useState(false);
    const [checked3,setChecked3]=useState(false);

    const AddOnsData=[
        {
            id:1,
            title:"Online service",
            description:"Access to multiplayer games",
            price:1,
            checked:checked1,
            setChecked:setChecked1,
        },
        {
            id:2,
            title:"Larger storage",
            description:"Extra 1TB of cloud save",
            price:2,
            checked:checked2,
            setChecked:setChecked2,
        },
        {
            id:3,
            title:"Customizable Profile",
            description:"Custom theme on your profile",
            price:2,
            checked:checked3,
            setChecked:setChecked3,
        },
    ]

    const handleInputSelection=(id:number,price:number) => {
        let checkedStateNextVal:boolean;
        AddOnsData.forEach(item => {
            if(item.id===id){
                checkedStateNextVal=!item.checked;
                item.setChecked(checkedStateNextVal);
                handleAddOnsPrices(price,checkedStateNextVal);
            }   
        });
    };
    return(
        <div>
            <h1 className="text-marine-blue font-bold text-2xl">Pick add-ons</h1>
            <p className="text-cool-gray text-sm mb-7">Add-ons help enhance your gaming experience.</p>
            <div className="grid gap-y-4">
                {AddOnsData.map((data)=>(<label key={data.id} htmlFor={`default-checkbox-${data.id}`} className={data.checked?'group bg-magnolia border-purplish-blue transition-border duration-300 text-sm font-medium text-gray-900 dark:text-gray-300 p-4 border flex justify-between items-center gap-x-4 rounded-lg w-96':'group hover:border-purplish-blue transition-border duration-300 text-sm font-medium text-gray-900 dark:text-gray-300 p-4 border border-cool-gray flex justify-between items-center gap-x-4 rounded-lg w-96'}>
                    <div className="flex items-center gap-x-5">
                        <input onChange={()=>{handleInputSelection(data.id,data.price)}} id={`default-checkbox-${data.id}`} type="checkbox" value={`+$${data.price}/mo`} className="w-4 h-4 text-blue-600 bg-gray-100 border-cool-gray rounded border accent-purplish-blue group-hover:accent-purplish-blue"/>
                        <div className="grid">
                            <h3 className="text-marine-blue font-medium">{data.title}</h3>
                            <span className="text-cool-gray text-xs">{data.description}</span>
                        </div>
                    </div>
                    <span className="text-purplish-blue text-xs items-end">{`+$${data.price}/mo`}</span>
                </label>))}
            </div>
        </div>
    )
}
import { time1 } from "../helpers/helpers";
import { useFormContext } from "../pages/form-page"

export const AddOns=()=>{
    const {handleAddOnsPrices,timeFrame,checked1,checked2,checked3}=useFormContext();

    const AddOnsData=[
        {
            id:0,
            title:"Online service",
            description:"Access to multiplayer games",
            montlyPrice:1,
            yearlyPrice:10,
            checked:checked1,
        },
        {
            id:1,
            title:"Larger storage",
            description:"Extra 1TB of cloud save",
            montlyPrice:2,
            yearlyPrice:20,
            checked:checked2,
        },
        {
            id:2,
            title:"Customizable Profile",
            description:"Custom theme on your profile",
            montlyPrice:2,
            yearlyPrice:20,
            checked:checked3,
        },
    ]

    const handleInputSelection=(id:number) => {
        AddOnsData.forEach(item => {
            if(item.id===id){
                handleAddOnsPrices(item);
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
                        <input onChange={()=>{handleInputSelection(data.id)}} id={`default-checkbox-${data.id}`} type="checkbox" value={`+$${timeFrame===time1?data.montlyPrice+'/mo':data.yearlyPrice+'/yr'}`} className="w-4 h-4 text-blue-600 bg-gray-100 border-cool-gray rounded border accent-purplish-blue group-hover:accent-purplish-blue" checked={data.checked}/>
                        <div className="grid">
                            <h3 className="text-marine-blue font-medium">{data.title}</h3>
                            <span className="text-cool-gray text-xs">{data.description}</span>
                        </div>
                    </div>
                    <span className="text-purplish-blue text-xs items-end">{`+$${timeFrame===time1?data.montlyPrice+'/mo':data.yearlyPrice+'/yr'}`}</span>
                </label>))}
            </div>
        </div>
    )
}
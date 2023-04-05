import { time1 } from "../helpers/helpers";
import { useFormContext } from "../pages/form-page";


export const Summary=()=>{
    const {timeFrame,plan,planPrices,addOnsPrices,addOnsList,goToInitial}=useFormContext();

    return(
        <div>
            <h1 className="text-marine-blue font-bold text-2xl">Finishing up</h1>
            <p className="text-cool-gray text-sm mb-7">Double-check everything looks OK before confirming.</p>
            <div className="lg:w-[390px]">
                <div className="bg-alabaster p-4 rounded-lg">
                    <div className="flex justify-between items-center pb-4 border-b border-b-light-gray">
                        <div className="flex flex-col">
                            <span className="text-marine-blue font-bold text-lg">{plan}({timeFrame})</span>
                            <a href="#initial" onClick={goToInitial} className="text-cool-gray underline transition-all duration-500 ease-out hover:text-purplish-blue">Change</a>
                        </div>
                        <span className="text-marine-blue font-bold text-base">${timeFrame===time1?planPrices+'/mo':planPrices+'/yr'}</span>
                    </div>
                    <div className="pt-4 flex flex-col gap-y-3">
                        {addOnsList.map(data=>(
                            <div className="flex justify-between">
                                <span className="text-cool-gray text-xs">{data.title}</span>
                                <span className="text-marine-blue text-xs font-medium">+${timeFrame===time1?data.montlyPrice:data.yearlyPrice}/mo</span>
                            </div>
                        ))}
                        {/* <div className="flex justify-between">
                            <span className="text-cool-gray text-xs">Larger storage</span>
                            <span className="text-marine-blue text-xs font-medium">+$2/mo</span>
                        </div> */}
                    </div>
                </div>
                <div className="pt-5 flex justify-between items-center px-5">
                    <span className="text-cool-gray text-xs">Total ({plan})</span>
                    <span className="text-purplish-blue font-bold text-lg">+${planPrices+addOnsPrices}{timeFrame===time1? '/mo':'/yr'}</span>
                </div>
            </div>
        </div>
    )
}
export const Summary=()=>{
    return(
        <div>
            <h1 className="text-marine-blue font-bold text-2xl">Finishing up</h1>
            <p className="text-cool-gray text-sm mb-7">Double-check everything looks OK before confirming.</p>
            <div className="w-[390px]">
                <div className="bg-alabaster p-4 rounded-lg">
                    <div className="flex justify-between items-center pb-4 border-b border-b-light-gray">
                        <div className="flex flex-col">
                            <span className="text-marine-blue font-bold text-lg">Arcade(Monthly)</span>
                            <a href="#" className="text-cool-gray underline">Change</a>
                        </div>
                        <span className="text-marine-blue font-bold text-base">$9/mo</span>
                    </div>
                    <div className="pt-4 flex flex-col gap-y-3">
                        <div className="flex justify-between">
                            <span className="text-cool-gray text-xs">Online service</span>
                            <span className="text-marine-blue text-xs font-medium">+$1/mo</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-cool-gray text-xs">Larger storage</span>
                            <span className="text-marine-blue text-xs font-medium">+$2/mo</span>
                        </div>
                    </div>
                </div>
                <div className="pt-5 flex justify-between items-center px-5">
                    <span className="text-cool-gray text-xs">Total (per month)</span>
                    <span className="text-purplish-blue font-bold text-lg">+$12/mo</span>
                </div>
            </div>
        </div>
    )
}
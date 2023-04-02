export const Plan=()=>{
    return(
        <div>
            <h1 className="text-marine-blue font-bold text-2xl">Select your plan</h1>
            <p className="text-cool-gray text-sm mb-7">You have the option of monthly or yearly billing.</p>
            <div className=" grid grid-cols-3 gap-x-3">
                <div className="transition-border duration-300 border border-cool-gray hover:border-marine-blue rounded-md p-5 w-[120px]">
                    <div className="mb-8"><img src="./images/icon-arcade.svg" alt=""/></div>
                    <div className="grid">
                        <h4 className="text-marine-blue font-medium">Arcade</h4>
                        <span className="text-cool-gray text-xs">$9/mo</span>
                    </div>
                </div>
                <div className="transition-border duration-300 border border-cool-gray hover:border-marine-blue rounded-md p-5 w-[120px]">
                    <div className="mb-8"><img src="./images/icon-advanced.svg" alt=""/></div>
                    <div className="grid">
                        <h4 className="text-marine-blue font-medium">Advanced</h4>
                        <span className="text-cool-gray text-xs">$12/mo</span>
                    </div>
                </div>
                <div className="transition-border duration-300 border border-cool-gray hover:border-marine-blue rounded-md p-5 w-[120px]">
                    <div className="mb-8"><img src="./images/icon-pro.svg" alt=""/></div>
                    <div className="grid">
                        <h4 className="text-marine-blue font-medium">Pro</h4>
                        <span className="text-cool-gray text-xs">$15/mo</span>
                    </div>
                </div>
            </div>
            <div className="p-2 bg-alabaster mt-8 text-center rounded-md flex justify-center">
                <span className="font-medium">Monthly</span>
                <label className="relative inline-flex items-center cursor-pointer mx-3">
                <input type="checkbox" value="" className="sr-only peer"/>
                <div className="w-11 h-6 bg-marine-blue outline-none focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                <span className="font-medium text-cool-gray">Yearly</span>
            </div>
        </div>
    )
}
export const AddOns=()=>{
    return(
        <div>
            <h1 className="text-marine-blue font-bold text-2xl">Pick add-ons</h1>
            <p className="text-cool-gray text-sm mb-7">Add-ons help enhance your gaming experience.</p>
            <div className="grid gap-y-4">
                <label htmlFor="default-checkbox" className="group hover:border-purplish-blue transition-border duration-300 text-sm font-medium text-gray-900 dark:text-gray-300 p-4 border border-cool-gray flex justify-between items-center gap-x-4 rounded-lg w-96">
                    <div className="flex items-center gap-x-5">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-cool-gray rounded border accent-purplish-blue group-hover:accent-purplish-blue"/>
                        <div className="grid">
                            <h3 className="text-marine-blue font-medium">Online service</h3>
                            <span className="text-cool-gray text-xs">Access to multiplayer games</span>
                        </div>
                    </div>
                    <span className="text-purplish-blue text-xs items-end">+$1/mo</span>
                </label>
                <label htmlFor="default-checkbox" className="group hover:border-purplish-blue transition-border duration-300 text-sm font-medium text-gray-900 dark:text-gray-300 p-4 border border-cool-gray flex justify-between items-center gap-x-4 rounded-lg w-96">
                    <div className="flex items-center gap-x-5">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-cool-gray rounded border accent-purplish-blue group-hover:accent-purplish-blue"/>
                        <div className="grid">
                            <h3 className="text-marine-blue font-medium">Larger storage</h3>
                            <span className="text-cool-gray text-xs">Extra 1TB of cloud save</span>
                        </div>
                    </div>
                    <span className="text-purplish-blue text-xs items-end">+$2/mo</span>
                </label>
                <label htmlFor="default-checkbox" className="group hover:border-purplish-blue transition-border duration-300 text-sm font-medium text-gray-900 dark:text-gray-300 p-4 border border-cool-gray flex justify-between items-center gap-x-4 rounded-lg w-96">
                    <div className="flex items-center gap-x-5">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-cool-gray rounded border accent-purplish-blue group-hover:accent-purplish-blue"/>
                        <div className="grid">
                            <h3 className="text-marine-blue font-medium">Customizable Profile</h3>
                            <span className="text-cool-gray text-xs">Custom theme on your profile</span>
                        </div>
                    </div>
                    <span className="text-purplish-blue text-xs items-end">+$2/mo</span>
                </label>
            </div>
        </div>
    )
}
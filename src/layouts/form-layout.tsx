import { ReactNode } from "react"
import { useFormContext } from "../pages/form-page";
import { step1, step4,step5 } from "../helpers/helpers";
import { Navigation } from "../components/navigation";

interface Props{
    children: ReactNode;
}

export const FormLayout=({children}:Props)=>{
    const {back,next,step}=useFormContext();

    return(
        <div className="font-sans bg-white flex flex-column rounded-xl">
            <Navigation/>
            <div className="wrapper px-16 pt-10 pb-8">
                <div className="content h-[315px]">
                    {children}
                </div>
                <div className={step!==step5?'buttons flex justify-between mt-16':'buttons flex justify-between mt-16 invisible'}>
                    <button onClick={back} className={step===step1? 'invisible': 'font-medium text-cool-gray hover:text-marine-blue transition-color duration-300'}>Go Back</button>
                    <button onClick={next} className={step===step4?'next font-normal text-white rounded-md bg-purplish-blue hover:bg-pastel-blue w-28 border-0 py-2 px-3 transition-color duration-300':'next font-normal text-white rounded-md w-28 bg-marine-blue hover:bg-marine-blue-light border-0 py-2 px-3 transition-color duration-300'}>{step===step4?<span>Confirm</span>:<span>Next Step</span>}</button>
                </div>
            </div>
        </div>
    )
}
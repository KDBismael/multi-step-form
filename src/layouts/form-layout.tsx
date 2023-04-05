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
        <div className="font-sans bg-magnolia lg:bg-white items-center flex lg:items-stretch lg:flex-row flex-col rounded-xl mb-8 lg:mb-auto">
            <Navigation/>
            <div className="wrapper p-5 rounded-xl bg-white w-11/12 -mt-24 lg:mt-auto lg:w-auto lg:px-16 lg:pt-10 lg:pb-8">
                <div className="content lg:h-[315px]">
                    {children}
                </div>
                <div id="btn-container" className={step!==step5?'buttons flex justify-between mt-16 lg:static absolute left-0 w-full px-4 h-20 items-center lg:h-auto':'buttons flex justify-between mt-10 lg:mt-16 invisible bg-white'}>
                    <button onClick={back} className={step===step1? 'invisible': 'font-medium text-cool-gray hover:text-marine-blue transition-color duration-300'}>Go Back</button>
                    <button onClick={next} className={step===step4?'next font-normal text-white rounded-md bg-purplish-blue hover:bg-pastel-blue w-28 border-0 py-2 px-3 transition-color duration-300 h-min':'next font-normal text-white rounded-md w-28 bg-marine-blue hover:bg-marine-blue-light border-0 py-2 px-3 transition-color duration-300 h-min'}>{step===step4?<span>Confirm</span>:<span>Next Step</span>}</button>
                </div>
            </div>
        </div>
    )
}
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
        <div className="font-sans bg-white flex flex-column max-w-[752px]">
            <Navigation/>
            <div className="wrapper px-24 pt-14 pb-8">
                <div className="content">
                    {children}
                </div>
                {step!==step5 && <div className="buttons flex justify-between mt-16">
                    <button onClick={back} className={step===step1? 'invisible': ''}>Go Back</button>
                    <button onClick={next} className="next font-normal text-white rounded-md bg-marine-blue border-0 py-2 px-3">{step===step4?<span>Confirm</span>:<span>Next Step</span>}</button>
                </div>}
            </div>
        </div>
    )
}
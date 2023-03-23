import { ReactNode } from "react"
import { useFormContext } from "../pages/form-page";
import { step4,step5 } from "../helpers/helpers";


interface Props{
    children: ReactNode;
}

export const FormLayout=({children}:Props)=>{
    const {back,next,step}=useFormContext();

    return(
        <div>
            <div className="navigation">image nav</div>
            <div className="content">
                {children}
            </div>
            {step!==step5 && <div className="buttons">
                <button onClick={back} className="back">Go Back</button>
                <button onClick={next} className="back">{step===step4?<span>Confirm</span>:<span>Next Step</span>}</button>
            </div>}
        </div>
    )
}
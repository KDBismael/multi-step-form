
interface props{
    content:{
        id: number;
        description:string;
    };
    step:string;
    active:number;
}

export const Step=({content,step,active}:props)=>{
    const {id,description}=content;
    return(
        <div className="flex items-center w-44 mb-5">
            <div className={active===id?'number w-6 h-6 rounded-full flex text-marine-blue bg-light-blue':'number w-6 h-6 rounded-full flex text-white border border-white'}><span className="m-auto font-medium text-xs">{id}</span></div>
            <div className="content ml-3.5 uppercase grid">
                <span className="text-light-gray text-[10px]">step {id}</span>
                <h4 className="text-white text-xs font-medium leading-none">{description}</h4>
            </div>
        </div>
    ) 
}
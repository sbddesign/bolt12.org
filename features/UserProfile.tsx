import Image from "next/image"
import { ArrowRightIcon } from "@bitcoin-design/bitcoin-icons-react/filled";

export type UserProfileProps = {
    userName: string;
    featureName: string;
    imageSrc: string;
    config?: "even" | "odd";
    description: string;
    link: string;
    linkText?: string;
}

export default function UserProfile(props:UserProfileProps){
    return(
        <>
            <div className={"w-full flex flex-col gap-4 max-w-4xl lg:flex-row lg:gap-8" + (props.config === "odd" ? " lg:flex-row-reverse" : "")}>
                <div className="w-2/3 lg:w-1/2">
                    <Image src={props.imageSrc} alt="Alice" width={480} height={324} className="w-full" />
                </div>
                <div className="w-full flex flex-col gap-4 lg:w-1/2 lg:mt-8"> 
                    <h3 className="text-[#6F4EA6] font-headings text-4xl w-full"><span className="font-display block">{props.userName} loves</span> {props.featureName}</h3>
                
                    <p>{props.description}</p>
                    
                    <a href={props.link} className="flex flex-row gap-2 text-[#37869F] font-semibold text-2xl items-center">
                        <span className="inline-block">{props.linkText || "See User Profile"}</span>
                        <ArrowRightIcon className="w-6 h-6 " />
                    </a>
                </div>
            </div>
        </>
    )
}
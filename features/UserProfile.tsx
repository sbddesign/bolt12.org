import Image from "next/image"

interface UserProfileProps {
    userName: string;
    featureName: string;
    imageSrc: string;
    config: "even" | "odd";
    description: string;
    link: string;
    linkText?: string;
}

export default function UserProfile(){
    return(
        <>
            <Image src={"/users/alice@2x.png"} alt="Alice" width={200} height={200} className="w-1/3" />
        </>
    )
}
"use client"

import Image from "next/image"
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface list_item_properties {
    image: string;
    name: string;
    href: string;
}

const list_item: React.FC<list_item_properties> = ({
    name,
    image,
    href
}) => {
    const router = useRouter();

    const onClick = () => {
        // need to be authenticated
        router.push(href);
    }

    return (
        <button
        onClick={onClick}
            className="
                items-center
                rounded-md
                overflow-hidden
                gap-x-4
                pr-4
                bg-neutral-100/10
                hover:bg-neutral-100/20
                transition
                relative
                group
                flex
            "
        >   
            <div 
                className="
                    min-h-[64px]
                    min-w-[64px]
                    relative
                "
            >
                <Image 
                    className="object-cover"
                    fill
                    src={image}
                    alt="Image"
                />
            </div>
            <p className="
                    font-medium 
                    py-5 
                    truncate
                "
            >
                {name}
            </p>
            <div 
                className="
                    items-center
                    justify-center
                    rounded-full
                    bg-green-500
                    drop-shadow-md
                    group-hover:opacity-100
                    hover:scale-110
                    opacity-0
                    absolute
                    transition
                    right-5
                    p-4
                    flex
                "
            >
                <FaPlay className="text-black"/>
            </div>
        </button>
    );
}

export default list_item;
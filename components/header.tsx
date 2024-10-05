"use client"

import { useRouter } from "next/compat/router";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface header_properties {
    children: React.ReactNode;
    className?: string;
}

const header: React.FC<header_properties> = ({
    children,
    className
}) => {
    const router = useRouter();

    const handle_logout = () => {
        //logout to be made
    }

    return(
        <div
            className={twMerge(`
                h-fit
                bg-gradient-to-b
                 from-emerald-900
                p-7
            `,
                className
            )}
        >
            <div className="
                items-center
                justify-between
                w-full
                mb-4
                flex
            ">
                <div className="
                    items-center
                    gap-x-2
                    hidden
                    md:flex
                ">
                    <button
                        onClick={() => router.back()}
                        className="
                            items-center
                            justify-center
                            rounded-full
                            bg-black
                            hover:opacity-75
                            transition
                            flex   
                    ">
                        <RxCaretLeft className="text-white" size={35}/>
                    </button>
                    <button 
                        onClick={() => router.forward()}
                        className="
                            items-center
                            justify-center
                            rounded-full
                            bg-black
                            hover:opacity-75
                            transition
                            flex   
                    ">
                        <RxCaretRight className="text-white" size={35}/>
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button
                        className="
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            hover-opacity-75
                            transition
                            flex
                            p-2
                        "
                    >
                        <HiHome className="text-black" size={20}/>
                    </button>
                    <button
                        className="
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            hover-opacity-75
                            transition
                            flex
                            p-2
                        "
                    >
                        <BiSearch className="text-black" size={20}/>
                    </button>
                </div>
                <div
                    className="
                        items-center
                        justify-between
                        gap-x-4
                        flex    
                    "
                >
                    <>
                        <div>
                            <Button
                                onClick={() => {}}
                                className="
                                    text-neutral-300
                                    bg-transparent
                                    font-medium 
                                "
                            >
                                Sign up
                            </Button>
                        </div>
                        <div>
                            <Button
                                onClick={() => {}}
                                className="
                                    px-6
                                    py-2
                                    bg-white
                                "
                            >
                                Log in
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    );
}

export default header;
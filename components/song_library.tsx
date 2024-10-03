"use client"

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb"

const song_library = () => {
    const on_click = () => {
        // handling upload later
    }
    return (
        <div className="flex flex-col">
            <div
                className="
                    px-4
                    pt-5
                    items-center
                    justify-between
                    flex
                "
            >
                <div
                    className="
                        gap-x-2
                        items-center
                        inline-flex
                    "
                >
                    <TbPlaylist className="text-neutral-400" size = {26}/>
                    <p
                        className="
                             text-neutral-400
                             text-md
                             font-medium
                        "
                    >
                        Your Library
                    </p>
                </div>
                <AiOutlinePlus
                    onClick={on_click}
                    size={20}
                    className="
                        cursor-pointer
                        text-neutral-400
                        hover:text-white
                        transition
                    "
                />
            </div>
            <div className="
                gap-y-2
                mt-4
                px-3
                flex
                flex-col
            ">
                List of Songs!
            </div>
        </div>
    );
}

export default song_library;
"use client"

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
                "
            >
                <div
                    className="
                        gap-x-2
                        items-center
                        inline-flex
                    "
                >
                    <TbPlaylist />
                </div>
            </div>
        </div>
    );
}

export default song_library;
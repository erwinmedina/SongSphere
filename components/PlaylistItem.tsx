"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Playlist } from "@/types";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface PlaylistItemProps {
    data: Playlist;
    onClick: (id: string ) => void
};

const PlaylistItem: React.FC<PlaylistItemProps> = ({
    data,
    onClick
}) => {

    return (
        <div
            onClick={() => onClick(data.id)}
            className="
                relative
                group
                flex
                flex-col
                items-center
                justify-center
                rounded-md
                overflow-hidden
                gap-x-4
                bg-blue-800
                shadow-xl
                cursor-pointer
                hover:bg-zinc-600/10
                transition
                p-3
            "
        >
            
            <div
                className="
                    relative
                    aspect-square
                    w-full
                    h-full
                    rounded-md
                    overflow-hidden
                "
            >
              
            </div>
            <div className="flex flex-col items-start w-full pt-4 gap-y-1">
                <p className="font-semibold truncate w-full">
                    {data.playlist_title}
                </p>
                <p
                    className="
                        text-neutral-400
                        text-sm
                        pb-4
                        w-full
                        truncate
                    "
                >
                 {data.playlist_title}
                </p>
            </div>
            <div className="
                absolute
                bottom-24
                right-5
            ">
                <PlayButton />
            </div>
        </div>
    );
}

export default PlaylistItem;
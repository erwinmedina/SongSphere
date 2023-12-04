"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";

interface MediaItemProps {
    data: Song;
    onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({
    data,
    onClick
}) => {
    const imageUrl = useLoadImage(data);

    const handleClick = () => {
        if (onClick) {
            return onClick(data.id);
        }

        // Default turn on player
    }
    return (
        <div
            onClick = {handleClick}
            className="
                flex
                items-center
                gap-x-3
                cursor-pointer
                hover:bg-neutral-800/50
                w-full
                p-2
                rounded-md
            "
        >
            <div
                className="
                    relative
                    rounded-md
                    min-h-[350px]
                    min-w-[350px]
                    overflow-hidden
                    left-14
                    shadow-xl
                "
            >
                <Image 
                    fill
                    src={imageUrl || '/images/liked.png'}
                    alt = "Media Item"
                    className="object-cover"

                />
            </div>
            <div
                className="
                absolute
                    bottom-20
                    left-20
                    gap-y-1
                    overflow-hidden
                "
            >
                <p className="text-white truncate">
                    {data.title}
                </p>
                <p className="text-neutral-400 text-sm truncate">
                    {data.author}
                </p>
            </div>
        </div>
    );
}

export default MediaItem;
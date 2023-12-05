"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { Playlist, Song } from "@/types";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import useUploadPlaylistModal from "@/hooks/useUploadPlaylistModal";
import PlaylistItem from "./PlaylistItem";
import PlaylistMediaItem from "./PlaylistMediaItem";
import { useRouter } from "next/navigation";

interface PlaylistsProps {
    playlists: Playlist[];
}

const Playlists: React.FC<PlaylistsProps> = ({
    playlists
}) => {
    const authModal = useAuthModal();
    const uploadModal = useUploadPlaylistModal();
    const { user } = useUser();
    const router = useRouter();

    // const onPlay = useOnPlay(songs);

    const onClick = () => {
        if (!user) {
            return authModal.onOpen();
        }
        // TODO: Check for subscription

        return uploadModal.onOpen();
    };

    const onClick2 = () => {
        router.push("playlist");
    }
    return (
        <div className="flex flex-col">
            <div
                className="
                    flex
                    items-center
                    justify-between
                    px-5
                    pt-4
                "
            >
                <div
                    className="
                        inline-flex
                        items-center
                        gap-x-2
                    "
                >
                    <TbPlaylist className ="text-neutral-400" size = {26} />
                    <p
                        className="
                            text-neutral-400
                            font-medium
                            text-md
                        "    
                    >
                        Playlists
                    </p>
                </div>
                <AiOutlinePlus 
                    onClick = {onClick}
                    size = {20}
                    className="
                        text-neutral-400
                        cursor-pointer
                        hover:text-white
                        transition
                    "
                />
            </div>
            <div className="
                flex
                flex-col
                gap-y-2
                mt-4
                px-3
            ">
                
                {playlists.map((item) => (
                    <PlaylistMediaItem
                        onClick={onClick2}
                        key = {item.id}
                        data = {item}
                    />
                ))}
            </div>
        </div>
    );
}

export default Playlists;
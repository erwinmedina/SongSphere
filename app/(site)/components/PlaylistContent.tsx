"use client";

import PlaylistItem from "@/components/PlaylistItem";
import SongItem from "@/components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Playlist, Song } from "@/types";

interface PlaylistContentProps {
    playlist: Playlist[];
}

const PlaylistContent: React.FC<PlaylistContentProps> = ({
    playlist
}) => {
    // const onPlay = useOnPlay(playlist);

    if (playlist.length === 0 ) {
        return (
            <div className="mt-4 text-neutral-400 body_font">
                No Playlists Found!
            </div>
        )
    }
    return (
        <div
            className="
                grid
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-8
                gap-4
                mt-4
            "
        >
            Playlists
            {playlist.map((item)  => (
                <PlaylistItem
                key={item.id}
                onClick={() => {}}
                data={item}
            />
            ))}
        </div>
    );
}

export default PlaylistContent
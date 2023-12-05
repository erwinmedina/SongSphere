"use client";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
import UploadPlaylistModal from "@/components/UploadPlaylistModal";
import { useState, useEffect } from "react";

const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AuthModal/>
            <UploadModal/>
            <UploadPlaylistModal />
        </>
    )
}

export default ModalProvider;
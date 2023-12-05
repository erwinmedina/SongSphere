"use client";

import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import toast from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import uniqid from "uniqid";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import useUploadPlaylistModal from "@/hooks/useUploadPlaylistModal";

const UploadPlaylistModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const uploadModal = useUploadPlaylistModal();
    const { user } = useUser();
    const supabaseClient = useSupabaseClient();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            title: '',
        }
    })

    const onChange = (open: boolean) => {
        if (!open) {
            reset();
            uploadModal.onClose();
        }
    };

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        try {
            setIsLoading(true);

            // const imageFile = values.image?.[0];
            const playlistTitle = values.title?.[0];

            if (!playlistTitle|| !user) {
                toast.error("Missing fields");
                return;
            }

            const uniqueID = uniqid();


            const {
                error: supabaseError
            } = await supabaseClient
                .from('playlists')
                .insert({
                    user_id: user.id,
                    playlist_title: values.title,
                });

            if (supabaseError) {
                setIsLoading(false);
                return toast.error(supabaseError.message);
            }

            router.refresh();
            setIsLoading(false);
            toast.success("Playlist Created");
            reset();
            uploadModal.onClose();


        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Modal
            title="Create New Playlist"
            description=""
            isOpen={uploadModal.isOpen}
            onChange={onChange}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-4"
            >
                <Input
                    id="title"
                    disabled={isLoading}
                    {...register('title', { required: true })}
                    placeholder = "Playlist Title"
                /> 
            
                <Button disabled={isLoading} type="submit">
                    Create
                </Button>      
            </form>
        </Modal>
    );
}

export default UploadPlaylistModal;
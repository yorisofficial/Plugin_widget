// ModalOpen.tsx
import React, { useRef, useState } from 'react';
import ButtonBase from './ButtonBase';

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

const ModalOpen: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
    const [isAudioPlaying, setAudioPlaying] = useState(false);
    const playAudio = () => {
        const audioElement = document.getElementById('audio') as HTMLAudioElement | null;

        if (audioElement) {
            if (!isAudioPlaying) {
                // Memainkan audio jika tidak sedang diputar
                audioElement.play();
                setAudioPlaying(true);
            } else {
                // Memberhentikan audio jika sedang diputar
                audioElement.pause();
                setAudioPlaying(false);
            }
        }
    };

    const handleCloseModal = () => {
        closeModal();
    };

    return (
        <div className='w-full h-screen bg-white dark:bg-black dark:text-white z-50 fixed flex flex-col gap-4 justify-center items-center'>
            <h1 className='text-5xl font-semibold'>Website was under construction</h1>
            <p className='w-1/2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iste praesentium aliquid omnis possimus veniam laudantium nobis ipsum soluta ut nisi iure, officia libero itaque sapiente quia quaerat et assumenda minus doloribus.</p>
            <div className="w-full flex justify-center items-center">
                <ButtonBase onClick={() => { handleCloseModal(); playAudio() }} variant="primary">
                    Buka Undangan
                </ButtonBase>
            </div>
        </div >
    );
};

export default ModalOpen;

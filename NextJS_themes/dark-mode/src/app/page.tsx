"use client"
import { useState } from "react";
import ModalOpen from "./component/ModalOpen";
import ButtonBase from "./component/ButtonBase";
import CountDown from "./component/CountDown";
import AudioPlayer from "./component/AudioPlayer";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";

const soundMusic = {
  tittle: "Hello",
  url: "/sound.mp3",
  type: "audio",
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isAudioPlaying, setAudioPlaying] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };


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

  return (

    <main className='w-full h-full'>
      <div className="fixed top-1/2 left-10">
        <AudioPlayer />
        <ButtonBase variant="icon" onClick={playAudio}>
          {isAudioPlaying ? <IconPlayerPause /> : <IconPlayerPlay />}
        </ButtonBase>
      </div>
      {isModalOpen && <ModalOpen isOpen={isModalOpen} closeModal={closeModal} />}
      <div className="w-full h-screen flex flex-col gap-6 justify-center items-center">
        <h1 className="text-5xl font-semibold">Hello .</h1>
        <p className="w-1/2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas optio rerum nam vitae ullam cum hic molestiae eligendi amet incidunt, laboriosam, non soluta quos quae molestias, culpa nesciunt sed. Esse, eligendi?</p>
      </div>
      <CountDown />
    </main>
  );
}
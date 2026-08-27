import { useEffect, useRef, useState } from "react";

const tracks = [
  {
    title: "Angelic Frutiger Aero",
    artist: "Juli's playlist",
    src: "/audio/angelic-frutiger-aero.mp3",
  },
  {
    title: "Dreamy Glass Aerowave",
    artist: "Juli's playlist",
    src: "/audio/dreamy-glass-aerowave.mp3",
  },
  {
    title: "Ocean Bubble",
    artist: "Juli's playlist",
    src: "/audio/ocean-bubble-frutiger-aqua-game.mp3",
  },
  {
    title: "Petal Ambient",
    artist: "Juli's playlist",
    src: "/audio/petal-frutiger-aero-ambient.mp3",
  },
];

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");

  return `${minutes}:${remainingSeconds}`;
}

function AeroPlayer() {
  const audioRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.65);

  const track = tracks[trackIndex];

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    audio.load();
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [trackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const changeTrack = (direction) => {
    setTrackIndex((current) => (current + direction + tracks.length) % tracks.length);
  };

  const updateProgress = (event) => {
    const audio = audioRef.current;
    const nextTime = Number(event.target.value);

    if (!audio) return;

    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const updateVolume = (event) => {
    const nextVolume = Number(event.target.value);

    setVolume(nextVolume);

    if (audioRef.current) {
      audioRef.current.volume = nextVolume;
    }
  };

  const nudgeVolume = (amount) => {
    const nextVolume = Math.min(1, Math.max(0, volume + amount));

    setVolume(nextVolume);
  };

  return (
    <aside className={`aero_player ${isOpen ? "aero_player--open" : ""}`}>
      <audio
        ref={audioRef}
        src={track.src}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onEnded={() => changeTrack(1)}
      />

      <button
        className="aero_player_toggle"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close music player" : "Open music player"}
      >
        <span>♫</span>
      </button>

      <div className="aero_player_panel">
        <div className="aero_player_header">
          <button type="button" onClick={() => setIsOpen(false)} aria-label="Close music player">
            ×
          </button>
        </div>

        <div className="aero_player_screen">
          <p className="aero_player_label">NOW PLAYING</p>
          <p className="aero_player_title">{track.title}</p>
          <p className="aero_player_artist">{track.artist}</p>
          <div className="aero_player_time">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <input
          className="aero_player_progress"
          type="range"
          min="0"
          max={duration || 0}
          value={Math.min(currentTime, duration || 0)}
          onChange={updateProgress}
          aria-label="Song progress"
        />

        <div className="aero_player_controls">
          <button type="button" onClick={() => changeTrack(-1)} aria-label="Previous song">⏮</button>
          <button className="aero_player_play" type="button" onClick={togglePlayback} aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? "❚❚" : "▶"}
          </button>
          <button type="button" onClick={() => changeTrack(1)} aria-label="Next song">⏭</button>
        </div>

        <div className="aero_player_volume">
          <button type="button" onClick={() => nudgeVolume(0.1)} aria-label="Increase volume">+</button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={updateVolume}
            aria-label="Volume"
          />
          <button type="button" onClick={() => nudgeVolume(-0.1)} aria-label="Decrease volume">−</button>
        </div>
      </div>
    </aside>
  );
}

export default AeroPlayer;

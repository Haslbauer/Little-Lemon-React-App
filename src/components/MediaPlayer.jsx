import ReactPlayer from "react-player";

export default function MediaPlayer() {
  return (
    <div className="player" style={{ maxWidth: 720, margin: "1rem auto" }}>
      <ReactPlayer
        src="https://www.youtube.com/shorts/0ATigfuFTsU"
        controls
        width="100%"
        height="405px"
        volume="30%"
        config={{
          youtube: {
            playerVars: {
              origin: window.location.origin, // wichtig bei localhost manchmal
              rel: 0,
            },
          },
        }}
        onError={(e) => console.log("ReactPlayer error:", e)}
      />
    </div>
  );
}

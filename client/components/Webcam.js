import React, { useState, useEffect, useRef } from "react";
import "../styles/Webcam.css";

const Video = ({ element }) => {
  //   const [videoSize, setVideoSize] = useState({ width: "", height: "" });
  const videoRef = useRef(HTMLVideoElement);

  function getVideo(video) {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then(function (stream) {
        video.srcObject = stream;
        video.play();
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  useEffect(() => {
    const videoObj = videoRef.current;
    getVideo(videoObj);
  }, [videoRef]);

  return (
    <video
      className="player"
      ref={videoRef}
      onLoadedMetadata={(e) => {
        element(e.target.videoWidth, e.target.videoHeight, videoRef.current);
      }}
    ></video>
  );
};

const Canvas = ({ videoToCanvas, getCanvas, chosenEffect, ghostIt }) => {
  const [pixels, setPixels] = useState();
  const [effect, setEffect] = useState("");
  const { width, height, video } = videoToCanvas;
  const canvasRef = useRef(HTMLCanvasElement);

  const videoEffects = {
    normal(pixels) {
      return pixels;
    },
    redEffect(pixels) {
      for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
      }
      return pixels;
    },
    rgbSplit(pixels) {
      for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 350] = pixels.data[i + 0]; // RED
        pixels.data[i + 100] = pixels.data[i + 1]; // GREEN
        pixels.data[i - 550] = pixels.data[i + 2]; // Blue
      }
      return pixels;
    },

    greenScreen(pixels) {
      const levels = {};

      document.querySelectorAll(".rgb input").forEach((input) => {
        levels[input.name] = input.value;
      });

      for (let i = 0; i < pixels.data.length; i = i + 4) {
        let red = pixels.data[i + 0];
        let green = pixels.data[i + 1];
        let blue = pixels.data[i + 2];
        let alpha = pixels.data[i + 3];

        if (
          red >= levels.rmin &&
          green >= levels.gmin &&
          blue >= levels.bmin &&
          red <= levels.rmax &&
          green <= levels.gmax &&
          blue <= levels.bmax
        ) {
          // take it out!
          pixels.data[i + 3] = 0;
        }
      }

      return pixels;
    },
  };

  //   function applyEffect(pixels) {
  //     const getEffect = videoEffects(effect);
  //     return getEffect(pixels);
  //   }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    getCanvas(canvas);

    //Webcam component sets the effect on click by buttons
    chosenEffect(setEffect);

    const displaying = setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);
      setPixels(ctx.getImageData(0, 0, width, height));

      const applyEffect = videoEffects[effect];

      if (effect === "normal" || "redEffect" || "rgbSplit") {
        applyEffect(pixels);
      } else if (effect === "greenScreen") {
        applyEffect(pixels);
      }

      if (ghostIt) {
        ctx.globalAlpha = 0.1;
      } else {
        ctx.globalAlpha = 0.8;
      }

      ctx.putImageData(pixels, 0, 0);
    }, 16);

    return () => clearInterval(displaying);
  }, [canvasRef, video, height, width, effect, pixels, chosenEffect]);

  return (
    <canvas
      className="photo"
      ref={canvasRef}
      width={width}
      height={height}
    ></canvas>
  );
};

const Audio = ({ getSnap }) => {
  const audioRef = useRef(HTMLAudioElement);

  useEffect(() => {
    const audio = audioRef.current;

    getSnap(audio);
  });

  return (
    <audio
      className="snap"
      src="https://raw.githubusercontent.com/wesbos/JavaScript30/master/19%20-%20Webcam%20Fun/snap.mp3"
      hidden
      ref={audioRef}
    ></audio>
  );
};

const Strip = ({ imgLinks }) => {
  return (
    <div className="strip">
      {imgLinks.length > 0
        ? imgLinks.map((imgLink, i) => {
            return (
              <>
                <a key={i} href={imgLink} target="_bank" download>
                  <img src={imgLink} alt={`picture${i}`} />
                </a>
              </>
            );
          })
        : null}
    </div>
  );
};

//main container where all components go in
export const Webcam = () => {
  const [canvasSize, setCanvasSize] = useState({});
  const [canvas, setCanvas] = useState();
  const [snapIt, setSnap] = useState();
  const [data, setData] = useState([]);
  const [effect, setEffect] = useState("");
  const [ghost, setGhost] = useState(false);
  //   const [ctx, setCtx] = useState({});

  const handleVideo = (width, height, videoRef) => {
    setCanvasSize({ ...canvasSize, width, height, video: videoRef });
  };

  const handleSnap = (audio) => {
    setSnap(audio);
  };

  const handleCanvas = (canvas) => {
    setCanvas(canvas);
  };

  //plays sound
  function takePhoto() {
    snapIt.currentTime = 0;
    snapIt.play();

    setData((prevState) => {
      const capturedURL = canvas.toDataURL("image/jpeg");
      return [...prevState, capturedURL];
    });
  }

  const handleEffect = (setState) => {
    return setState(effect);
  };

  const handleGhost = () => {
    return ghost ? setGhost(false) : setGhost(true);
  };

  return (
    <>
      <div className="photobooth">
        <div className="controls">
          <button onClick={takePhoto}>Take Photo</button>
          <button onClick={() => setEffect("redEffect")}>RedEffect</button>
          <button onClick={() => setEffect("rgbSplit")}>RGB Split</button>
          <button onClick={handleGhost}>Ghost Effect</button>
          <button onClick={() => setEffect("greenScreen")}>Green Screen</button>
          <button onClick={() => setEffect("normal")}>Default</button>

          <div className="rgb">
            <label htmlFor="rmin">Red Min:</label>
            <input type="range" min={0} max={255} name="rmin" />
            <label htmlFor="rmax">Red Max:</label>
            <input type="range" min={0} max={255} name="rmax" />
            <br />
            <label htmlFor="gmin">Green Min:</label>
            <input type="range" min={0} max={255} name="gmin" />
            <label htmlFor="gmax">Green Max:</label>
            <input type="range" min={0} max={255} name="gmax" />
            <br />
            <label htmlFor="bmin">Blue Min:</label>
            <input type="range" min={0} max={255} name="bmin" />
            <label htmlFor="bmax">Blue Max:</label>
            <input type="range" min={0} max={255} name="bmax" />
          </div>
        </div>
        <Canvas
          videoToCanvas={canvasSize}
          getCanvas={handleCanvas}
          chosenEffect={handleEffect}
          ghostIt={ghost}
          //   context={handleContext}
        />
        <Video element={handleVideo} />
        <Strip imgLinks={data} />
        <Audio getSnap={handleSnap} />
      </div>
    </>
  );
};

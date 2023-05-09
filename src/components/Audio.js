import React, { useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
// import axios from "axios";
function Audio() {
  const recorderControls = useAudioRecorder();
  const [text, setText] = useState("");

  //api to be used----------------
  // const sendFile = async (data, config) => {
  //   await axios
  //     .post("", data, config)    --put api link in double quotes
  //     .then((res) => {
  //       setText(res.data);
  //     })
  //     .catch((e) => console.log(e));
  // };

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");

    const data = new FormData();
    data.append("wavfile", blob, "rec.wav");

    // let axiosconfig = {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // };

    // sendFile(data, axiosconfig);
    for (var pair of data.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "30vh",
          left: "30vw",
        }}
      >
        <AudioRecorder
          // downloadOnSavePress= {true}
          downloadFileExtension="wav"
          onRecordingComplete={(blob) => addAudioElement(blob)}
          recorderControls={recorderControls}
        />
        <br />
      </div>
      <div
        style={{
          border: "1px solid black",
          minHeight: "30vh",
          minWidth: "40vw",
          position: "absolute",
          top: "40vh",
          left: "30vw",
        }}
      >
        {text}
      </div>
    </>
  );
}

export default Audio;

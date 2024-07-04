import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { OpenAI } from 'openai';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { storage } from './firebaseConfig';

import noCam from './nocam.png'; // Replace with the actual path to your fallback image

const openai = new OpenAI({
  //@ts-ignore
  apiKey: import.meta.env.VITE_REACT_SECRET_API,
  dangerouslyAllowBrowser: true
});

const CameraCapture = () => {
  const webcamRef = useRef<Webcam>(null);
  const [image, setImage] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);
  const [webcamAvailable, setWebcamAvailable] = useState(true);

  useEffect(() => {
    // Check if webcam is available
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => setWebcamAvailable(true))
      .catch(() => setWebcamAvailable(false));
  }, []);
  
  const capture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
        setImage(imageSrc);
      } else {
        console.error('Failed to capture image');
      }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        if (typeof base64Image === 'string') {
            setImage(base64Image);
          } else {
            console.error('Failed to read file as a string');
          }
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImageToServer = async (base64Image) => {
    const storageRef = ref(storage, `images/${Date.now()}.jpg`);
    await uploadString(storageRef, base64Image, 'data_url');
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  const confirmImage = async () => {
    if (image) {
      try {
        const imageURL = await uploadImageToServer(image);

        const response = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: [
            {
              role: "user",
              content: [
                { type: "text", text: "You will send nothing but a JSON file raw text so dont try and format it for my webiste purpose (ex. ```json), This is a receipt split bill website, you will seperate this into a json file such as {Person 1: $12.41 (Name of the food), Person 2 (Name of food #2): $12.31}, if an item has 3 of the same thing its mostly likey 3 different people also figure out so the tax and tips is split evenlly and add a section for it. Again the message you are return should not include \`\`\` json\`\`\` in it because it messes up my code"},
                {
                  type: "image_url",
                  image_url: {
                    url: imageURL,
                  },
                },
              ],
            },
          ],
          max_tokens: 3000,
        });

        console.log(response)
        setResponse(response.choices[0].message.content);
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    }
  };

  return (
    <div>
      {webcamAvailable ? (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={640}
          height={480}
        />
      ) : (
        <img src={noCam} alt="Fallback" width={640} height={480} />
      )}
      <button onClick={capture}>Capture</button>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {image && <img src={image} className='w-[100px] h-[100px]' alt="Selected" />}
      {image && <button onClick={confirmImage}>Confirm and Upload</button>}
      {response && <pre>{response}</pre>}
    </div>
  );
};

export default CameraCapture;
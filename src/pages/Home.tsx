import React, { useState, useRef, useEffect } from 'react';
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from '@/components/ui/input';
import Webcam from 'react-webcam';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebaseConfig';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import noCam from '../nocam.png'; // Replace with the actual path to your fallback image
import { OpenAI } from 'openai';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const openai = new OpenAI({
  //@ts-ignore
  apiKey: import.meta.env.VITE_REACT_SECRET_API,
  dangerouslyAllowBrowser: true
});


const Home = () => {

  const webcamRef = useRef<Webcam>(null);
  const [image, setImage] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);
  const [webcamAvailable, setWebcamAvailable] = useState(true);
  const [request, setRequest] = useState(false);
  const navigate = useNavigate();

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

  const deleteImage = () => {
    setImage(null);
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
        setRequest(true)
        const imageURL = await uploadImageToServer(image);
        const response = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: [
            {
              role: "user",
              content: [
                { type: "text", text: "You will send nothing but a JSON file raw text so dont try and format it for my webiste purpose (ex. ```json), This is a receipt split bill website, you will seperate this into a json file such as {Person 1: $12.41 (Name of the food), Person 2 (Name of food #2): $12.31}, if an item has 3 of the same thing its mostly likey 3 different people also figure out so the tax and tips is split evenlly and add a section for it. Again the message you are return should not include \`\`\` json\`\`\` in it because it messes up my code, If you do not recoginze a receipt give a json with error" },
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
        const responseContent = response.choices[0].message.content;

        if (responseContent === null) {
          toast.warn('No response received. Please try again.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setRequest(false);
          return;
        }
    
        // Parse the response content to JSON
        const parsedResponse = JSON.parse(responseContent);
        if (parsedResponse.error) {
          console.error('Error:', parsedResponse.error);
          toast.warn('Error: ' + parsedResponse.error, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          console.log('Valid response:', parsedResponse);
          navigate('/response', { state: { response: parsedResponse }})
          setResponse(responseContent);
        }
        setRequest(false)

      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    }
  };

  return (

    <div className="flex flex-col items-center justify-center h-screen bg-background">
      
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Split the Bill</h1>
          <p className="mt-2 text-muted-foreground">Easily divide expenses with friends and family.</p>
        </div>
        <Card className="p-6 space-y-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full rounded-lg overflow-hidden">
              <div className="relative">
                {image ? (
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <img src={image} alt="Captured" style={{ width: '100%', height: 'auto' }} />
                    <button
                      onClick={deleteImage}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        backgroundColor: 'red',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '16px',
                        padding: '5px 10px',
                      }}
                    >
                      X
                    </button>
                  </div>
                ) : (
                  <>
                    {webcamAvailable ? (
                      <div>
                        <Webcam
                          audio={false}
                          ref={webcamRef}
                          screenshotFormat="image/jpeg"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                    ) : (
                      <img src={noCam} alt="Fallback" width={640} height={480} />
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" onClick={capture}>
                <CameraIcon className="mr-2 h-4 w-4" />
                Take Photo
              </Button>
              <ToastContainer />
            </div>
          </div>
          <Separator />
          <div className="text-center">
            <p className="text-muted-foreground">Or you can upload an existing receipt image.</p>
            <Input type="file" className="mt-4" onChange={handleFileChange} />
          </div>
          {image &&

            <div className="text-center">
              <Separator />
              <div className="mt-4 flex justify-center gap-2">
                {request ? (

                  <Button disabled variant="outline">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Confirm and Submit
                  </Button>
                ) : (
                  <Button variant="outline" onClick={confirmImage}>
                    Confirm and Submit
                  </Button>
                )}
              </div>
            </div>

          }
        </Card>
      </div>
    </div>
  );
};

function CameraIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}

export default Home;
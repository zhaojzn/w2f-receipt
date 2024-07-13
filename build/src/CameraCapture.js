"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_webcam_1 = __importDefault(require("react-webcam"));
const openai_1 = require("openai");
const storage_1 = require("firebase/storage");
const firebaseConfig_1 = require("./firebaseConfig");
const nocam_png_1 = __importDefault(require("./nocam.png")); // Replace with the actual path to your fallback image
const openai = new openai_1.OpenAI({
    //@ts-ignore
    apiKey: import.meta.env.VITE_REACT_SECRET_API,
    dangerouslyAllowBrowser: true
});
const CameraCapture = () => {
    const webcamRef = (0, react_1.useRef)(null);
    const [image, setImage] = (0, react_1.useState)(null);
    const [response, setResponse] = (0, react_1.useState)(null);
    const [webcamAvailable, setWebcamAvailable] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        // Check if webcam is available
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(() => setWebcamAvailable(true))
            .catch(() => setWebcamAvailable(false));
    }, []);
    const capture = () => {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
            setImage(imageSrc);
        }
        else {
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
                }
                else {
                    console.error('Failed to read file as a string');
                }
            };
            reader.readAsDataURL(file);
        }
    };
    const uploadImageToServer = async (base64Image) => {
        const storageRef = (0, storage_1.ref)(firebaseConfig_1.storage, `images/${Date.now()}.jpg`);
        await (0, storage_1.uploadString)(storageRef, base64Image, 'data_url');
        const downloadURL = await (0, storage_1.getDownloadURL)(storageRef);
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
                                { type: "text", text: "You will send nothing but a JSON file raw text so dont try and format it for my webiste purpose (ex. ```json), This is a receipt split bill website, you will seperate this into a json file such as {Person 1: $12.41 (Name of the food), Person 2 (Name of food #2): $12.31}, if an item has 3 of the same thing its mostly likey 3 different people also figure out so the tax and tips is split evenlly and add a section for it. Again the message you are return should not include \`\`\` json\`\`\` in it because it messes up my code" },
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
                console.log(response);
                setResponse(response.choices[0].message.content);
            }
            catch (error) {
                console.error("Error uploading image: ", error);
            }
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [webcamAvailable ? ((0, jsx_runtime_1.jsx)(react_webcam_1.default, { audio: false, ref: webcamRef, screenshotFormat: "image/jpeg", width: 640, height: 480 })) : ((0, jsx_runtime_1.jsx)("img", { src: nocam_png_1.default, alt: "Fallback", width: 640, height: 480 })), (0, jsx_runtime_1.jsx)("button", { onClick: capture, children: "Capture" }), (0, jsx_runtime_1.jsx)("input", { type: "file", accept: "image/*", onChange: handleFileChange }), image && (0, jsx_runtime_1.jsx)("img", { src: image, className: 'w-[100px] h-[100px]', alt: "Selected" }), image && (0, jsx_runtime_1.jsx)("button", { onClick: confirmImage, children: "Confirm and Upload" }), response && (0, jsx_runtime_1.jsx)("pre", { children: response })] }));
};
exports.default = CameraCapture;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FtZXJhQ2FwdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DYW1lcmFDYXB0dXJlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpQ0FBMkQ7QUFDM0QsZ0VBQWtDO0FBQ2xDLG1DQUFnQztBQUNoQyw4Q0FBcUU7QUFDckUscURBQTJDO0FBSTNDLDREQUFnQyxDQUFDLHNEQUFzRDtBQUV2RixNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQztJQUN4QixZQUFZO0lBQ1osTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQjtJQUM3Qyx1QkFBdUIsRUFBRSxJQUFJO0NBQzlCLENBQUMsQ0FBQztBQUVILE1BQU0sYUFBYSxHQUFHLEdBQUcsRUFBRTtJQUN6QixNQUFNLFNBQVMsR0FBRyxJQUFBLGNBQU0sRUFBUyxJQUFJLENBQUMsQ0FBQztJQUN2QyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBZ0IsSUFBSSxDQUFDLENBQUM7SUFDeEQsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQWdCLElBQUksQ0FBQyxDQUFDO0lBQzlELE1BQU0sQ0FBQyxlQUFlLEVBQUUsa0JBQWtCLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFFN0QsSUFBQSxpQkFBUyxFQUFDLEdBQUcsRUFBRTtRQUNiLCtCQUErQjtRQUMvQixTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNqRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDcEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQyxFQUFF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LEVBQUUsS0FBSyxFQUNaLEdBQUcsRUFBRSxTQUFTLEVBQ2QsZ0JBQWdCLEVBQUMsWUFBWSxFQUM3QixLQUFLLEVBQUUsR0FBRyxFQUNWLE1BQU0sRUFBRSxHQUFHLEdBQ1gsQ0FDSCxDQUFDLENBQUMsQ0FBQyxDQUNGLGdDQUFLLEdBQUcsRUFBRSxtQkFBSyxFQUFFLEdBQUcsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFJLENBQzVELEVBQ0QsbUNBQVEsT0FBTyxFQUFFLE9BQU8sd0JBQWtCLEVBQzFDLGtDQUFPLElBQUksRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUUsZ0JBQWdCLEdBQUksRUFDakUsS0FBSyxJQUFJLGdDQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLHFCQUFxQixFQUFDLEdBQUcsRUFBQyxVQUFVLEdBQUcsRUFDM0UsS0FBSyxJQUFJLG1DQUFRLE9BQU8sRUFBRSxZQUFZLG1DQUE2QixFQUNuRSxRQUFRLElBQUksMENBQU0sUUFBUSxHQUFPLElBQzlCLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGtCQUFlLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXZWJjYW0gZnJvbSAncmVhY3Qtd2ViY2FtJztcclxuaW1wb3J0IHsgT3BlbkFJIH0gZnJvbSAnb3BlbmFpJztcclxuaW1wb3J0IHsgcmVmLCB1cGxvYWRTdHJpbmcsIGdldERvd25sb2FkVVJMIH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSc7XHJcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL2ZpcmViYXNlQ29uZmlnJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIlxyXG5cclxuXHJcbmltcG9ydCBub0NhbSBmcm9tICcuL25vY2FtLnBuZyc7IC8vIFJlcGxhY2Ugd2l0aCB0aGUgYWN0dWFsIHBhdGggdG8geW91ciBmYWxsYmFjayBpbWFnZVxyXG5cclxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSSh7XHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgYXBpS2V5OiBpbXBvcnQubWV0YS5lbnYuVklURV9SRUFDVF9TRUNSRVRfQVBJLFxyXG4gIGRhbmdlcm91c2x5QWxsb3dCcm93c2VyOiB0cnVlXHJcbn0pO1xyXG5cclxuY29uc3QgQ2FtZXJhQ2FwdHVyZSA9ICgpID0+IHtcclxuICBjb25zdCB3ZWJjYW1SZWYgPSB1c2VSZWY8V2ViY2FtPihudWxsKTtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3dlYmNhbUF2YWlsYWJsZSwgc2V0V2ViY2FtQXZhaWxhYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQ2hlY2sgaWYgd2ViY2FtIGlzIGF2YWlsYWJsZVxyXG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyB2aWRlbzogdHJ1ZSB9KVxyXG4gICAgICAudGhlbigoKSA9PiBzZXRXZWJjYW1BdmFpbGFibGUodHJ1ZSkpXHJcbiAgICAgIC5jYXRjaCgoKSA9PiBzZXRXZWJjYW1BdmFpbGFibGUoZmFsc2UpKTtcclxuICB9LCBbXSk7XHJcbiAgXHJcbiAgY29uc3QgY2FwdHVyZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGltYWdlU3JjID0gd2ViY2FtUmVmLmN1cnJlbnQ/LmdldFNjcmVlbnNob3QoKTtcclxuICAgIGlmIChpbWFnZVNyYykge1xyXG4gICAgICAgIHNldEltYWdlKGltYWdlU3JjKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY2FwdHVyZSBpbWFnZScpO1xyXG4gICAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYmFzZTY0SW1hZ2UgPSByZWFkZXIucmVzdWx0O1xyXG4gICAgICAgIGlmICh0eXBlb2YgYmFzZTY0SW1hZ2UgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHNldEltYWdlKGJhc2U2NEltYWdlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byByZWFkIGZpbGUgYXMgYSBzdHJpbmcnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBsb2FkSW1hZ2VUb1NlcnZlciA9IGFzeW5jIChiYXNlNjRJbWFnZSkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmFnZVJlZiA9IHJlZihzdG9yYWdlLCBgaW1hZ2VzLyR7RGF0ZS5ub3coKX0uanBnYCk7XHJcbiAgICBhd2FpdCB1cGxvYWRTdHJpbmcoc3RvcmFnZVJlZiwgYmFzZTY0SW1hZ2UsICdkYXRhX3VybCcpO1xyXG4gICAgY29uc3QgZG93bmxvYWRVUkwgPSBhd2FpdCBnZXREb3dubG9hZFVSTChzdG9yYWdlUmVmKTtcclxuICAgIHJldHVybiBkb3dubG9hZFVSTDtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtSW1hZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoaW1hZ2UpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBpbWFnZVVSTCA9IGF3YWl0IHVwbG9hZEltYWdlVG9TZXJ2ZXIoaW1hZ2UpO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9wZW5haS5jaGF0LmNvbXBsZXRpb25zLmNyZWF0ZSh7XHJcbiAgICAgICAgICBtb2RlbDogXCJncHQtNG9cIixcclxuICAgICAgICAgIG1lc3NhZ2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICByb2xlOiBcInVzZXJcIixcclxuICAgICAgICAgICAgICBjb250ZW50OiBbXHJcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwidGV4dFwiLCB0ZXh0OiBcIllvdSB3aWxsIHNlbmQgbm90aGluZyBidXQgYSBKU09OIGZpbGUgcmF3IHRleHQgc28gZG9udCB0cnkgYW5kIGZvcm1hdCBpdCBmb3IgbXkgd2ViaXN0ZSBwdXJwb3NlIChleC4gYGBganNvbiksIFRoaXMgaXMgYSByZWNlaXB0IHNwbGl0IGJpbGwgd2Vic2l0ZSwgeW91IHdpbGwgc2VwZXJhdGUgdGhpcyBpbnRvIGEganNvbiBmaWxlIHN1Y2ggYXMge1BlcnNvbiAxOiAkMTIuNDEgKE5hbWUgb2YgdGhlIGZvb2QpLCBQZXJzb24gMiAoTmFtZSBvZiBmb29kICMyKTogJDEyLjMxfSwgaWYgYW4gaXRlbSBoYXMgMyBvZiB0aGUgc2FtZSB0aGluZyBpdHMgbW9zdGx5IGxpa2V5IDMgZGlmZmVyZW50IHBlb3BsZSBhbHNvIGZpZ3VyZSBvdXQgc28gdGhlIHRheCBhbmQgdGlwcyBpcyBzcGxpdCBldmVubGx5IGFuZCBhZGQgYSBzZWN0aW9uIGZvciBpdC4gQWdhaW4gdGhlIG1lc3NhZ2UgeW91IGFyZSByZXR1cm4gc2hvdWxkIG5vdCBpbmNsdWRlIFxcYFxcYFxcYCBqc29uXFxgXFxgXFxgIGluIGl0IGJlY2F1c2UgaXQgbWVzc2VzIHVwIG15IGNvZGVcIn0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VfdXJsXCIsXHJcbiAgICAgICAgICAgICAgICAgIGltYWdlX3VybDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogaW1hZ2VVUkwsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgbWF4X3Rva2VuczogMzAwMCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgc2V0UmVzcG9uc2UocmVzcG9uc2UuY2hvaWNlc1swXS5tZXNzYWdlLmNvbnRlbnQpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGxvYWRpbmcgaW1hZ2U6IFwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3dlYmNhbUF2YWlsYWJsZSA/IChcclxuICAgICAgICA8V2ViY2FtXHJcbiAgICAgICAgICBhdWRpbz17ZmFsc2V9XHJcbiAgICAgICAgICByZWY9e3dlYmNhbVJlZn1cclxuICAgICAgICAgIHNjcmVlbnNob3RGb3JtYXQ9XCJpbWFnZS9qcGVnXCJcclxuICAgICAgICAgIHdpZHRoPXs2NDB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezQ4MH1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxpbWcgc3JjPXtub0NhbX0gYWx0PVwiRmFsbGJhY2tcIiB3aWR0aD17NjQwfSBoZWlnaHQ9ezQ4MH0gLz5cclxuICAgICAgKX1cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjYXB0dXJlfT5DYXB0dXJlPC9idXR0b24+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX0gLz5cclxuICAgICAge2ltYWdlICYmIDxpbWcgc3JjPXtpbWFnZX0gY2xhc3NOYW1lPSd3LVsxMDBweF0gaC1bMTAwcHhdJyBhbHQ9XCJTZWxlY3RlZFwiIC8+fVxyXG4gICAgICB7aW1hZ2UgJiYgPGJ1dHRvbiBvbkNsaWNrPXtjb25maXJtSW1hZ2V9PkNvbmZpcm0gYW5kIFVwbG9hZDwvYnV0dG9uPn1cclxuICAgICAge3Jlc3BvbnNlICYmIDxwcmU+e3Jlc3BvbnNlfTwvcHJlPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1lcmFDYXB0dXJlOyJdfQ==
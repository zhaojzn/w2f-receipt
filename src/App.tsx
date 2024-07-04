import React from 'react';
import CameraCapture from './CameraCapture';
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from '@/components/ui/input';

const App = () => {
  return (
    
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Split the Bill</h1>
          <p className="mt-2 text-muted-foreground">Easily divide expenses with friends and family.</p>
        </div>
        <Card className="p-6 space-y-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <CameraCapture/>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline">
                <CameraIcon className="mr-2 h-4 w-4" />
                Take Photo
              </Button>
            </div>
          </div>
          <Separator />
          <div className="text-center">
            <p className="text-muted-foreground">Or you can upload an existing receipt image.</p>
            <Input type="file" className="mt-4" />
          </div>
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

export default App;
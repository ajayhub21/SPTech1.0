import React from 'react';
import { ScanLine } from 'lucide-react';

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
      <div className="text-white flex flex-col items-center">
        <ScanLine className="w-16 h-16 animate-bounce" />
        <div className="mt-4 text-2xl font-semibold">SP Technology</div>
        <div className="w-48 h-2 bg-blue-300/30 rounded-full mt-4 overflow-hidden">
          <div className="h-full bg-white animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};
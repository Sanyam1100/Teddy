import React, { useState } from 'react';
import { Heart, Bean as Bear } from 'lucide-react';
import backgroundImage from './asset/Back.jpg';

function App() {
  const [message, setMessage] = useState('');
  const [loveMessages, setLoveMessages] = useState<string[]>([]);

  const showTeddyMessage = () => {
    setMessage("Happy Teddy Day!🧸 Motki Bubu 💝");
    setLoveMessages([]);
  };

  const showLoveMessages = () => {
    setMessage('');
    setLoveMessages(Array(100).fill("I Love You! BUBU Rani 💖"));
  };

  return (
    <div 
      className="min-h-screen p-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-pink-600 mb-4 flex items-center justify-center gap-3">
            <Bear className="w-10 h-10" />
            <p>Surprise</p>
            <Bear className="w-10 h-10" />
          </h1>
          <p className="text-lg text-gray-700">🧸</p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={showTeddyMessage}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Bear className="w-5 h-5" />
            !!First Check Here!!
          </button>

          <button
            onClick={showLoveMessages}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Heart className="w-5 h-5" />
            Check Here Baby
          </button>
        </div>

        {message && (
          <div className="mt-8 p-6 bg-pink-100 rounded-xl text-center animate-fade-in">
            <p className="text-xl text-pink-800">{message}</p>
          </div>
        )}

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {loveMessages.map((msg, index) => (
            <div 
              key={index}
              className="bg-red-100 p-3 rounded-lg text-center text-red-600 animate-bounce"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {msg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
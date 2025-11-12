import React, { useState } from "react";
import { HiMicrophone, HiSpeakerWave } from "react-icons/hi2";
import { HiArrowsRightLeft } from "react-icons/hi2";

function Conversation() {
  const [lang1, setLang1] = useState("English");
  const [lang2, setLang2] = useState("Spanish");
  const [isListening, setIsListening] = useState(false);

  const swapLanguages = () => {
    const temp = lang1;
    setLang1(lang2);
    setLang2(temp);
  };

  return (
    <div className="bg-gray-950 min-h-screen flex flex-col items-center px-4 py-10 text-white">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-400 mb-2">
        Conversation Mode
      </h1>
      <p className="text-gray-400 mb-8 text-center max-w-2xl">
        Real-time voice translation for face-to-face conversations.
      </p>

      {/* Main Card */}
      <div className="bg-gray-900 w-full max-w-5xl rounded-2xl p-8 shadow-lg flex flex-col gap-8">
        {/* Language Selection */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Speaker 1 */}
          <div className="flex flex-col w-full md:w-1/3">
            <label className="text-gray-300 mb-2">Speaker 1</label>
            <select
              value={lang1}
              onChange={(e) => setLang1(e.target.value)}
              className="p-2 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Chinese</option>
            </select>
          </div>

          {/* Swap button */}
          <button
            onClick={swapLanguages}
            className="bg-blue-600 hover:bg-blue-500 transition p-2 rounded-full shadow-md transform hover:rotate-180 duration-300"
            title="Swap Languages"
          >
            <HiArrowsRightLeft size={22} />
          </button>

          {/* Speaker 2 */}
          <div className="flex flex-col w-full md:w-1/3">
            <label className="text-gray-300 mb-2">Speaker 2</label>
            <select
              value={lang2}
              onChange={(e) => setLang2(e.target.value)}
              className="p-2 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Chinese</option>
            </select>
          </div>
        </div>

        {/* Conversation Display Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Speaker 1 Area */}
          <div className="flex flex-col items-center bg-gray-800 rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold mb-3 text-blue-400">
              {lang1} Speaker
            </h2>
            <div className="w-full h-40 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400">
              “Hello! How are you?”
            </div>
            <button
              onClick={() => setIsListening(!isListening)}
              className={`mt-4 flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                isListening
                  ? "bg-red-600 hover:bg-red-500"
                  : "bg-blue-600 hover:bg-blue-500"
              }`}
            >
              <HiMicrophone size={20} />
              {isListening ? "Stop Listening" : "Start Listening"}
            </button>
          </div>

          {/* Speaker 2 Area */}
          <div className="flex flex-col items-center bg-gray-800 rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold mb-3 text-blue-400">
              {lang2} Speaker
            </h2>
            <div className="w-full h-40 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400">
              “¡Hola! ¿Cómo estás?”
            </div>
            <button className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 font-medium transition">
              <HiSpeakerWave size={20} />
              Speak Translation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversation;

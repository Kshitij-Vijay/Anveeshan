import React, { useState } from "react";
import { HiArrowsRightLeft } from "react-icons/hi2";

function Translate() {
  const [fromLang, setFromLang] = useState("English");
  const [toLang, setToLang] = useState("Spanish");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const swapLanguages = () => {
    setFromLang(toLang);
    setToLang(fromLang);
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  return (
    <div className="bg-gray-950 min-h-screen flex flex-col items-center px-4 py-10 text-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-400 mb-2">AI Translator</h1>
        <p className="text-gray-400">
          Instantly translate text between multiple languages
        </p>
      </div>

      <div className="bg-gray-900 w-full max-w-5xl rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex flex-col w-full md:w-1/3">
            <label className="text-gray-300 mb-1">From</label>
            <select
              value={fromLang}
              onChange={(e) => setFromLang(e.target.value)}
              className="p-2 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Chinese</option>
            </select>
          </div>

          <button
            onClick={swapLanguages}
            className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition transform hover:rotate-180 duration-300"
            title="Swap languages"
          >
            <HiArrowsRightLeft size={22} />
          </button>

          <div className="flex flex-col w-full md:w-1/3">
            <label className="text-gray-300 mb-1">To</label>
            <select
              value={toLang}
              onChange={(e) => setToLang(e.target.value)}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <textarea
              rows="8"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to translate..."
              className="bg-gray-800 text-gray-200 p-4 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          <div className="flex flex-col">
            <textarea
              rows="8"
              value={translatedText}
              readOnly
              placeholder="Translation will appear here..."
              className="bg-gray-800 text-gray-400 p-4 rounded-xl resize-none cursor-not-allowed focus:border-none outline-none"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
            onClick={() =>
              setTranslatedText("🚀 Translated text will appear here!")
            }
          >
            Translate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Translate;

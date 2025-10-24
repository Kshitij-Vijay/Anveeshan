import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Translate from "./pages/Translate.jsx";
import Conversation from "./pages/Conversation.jsx";
import Chat from "./pages/Chat.jsx";
import About from "./pages/About.jsx";
import WorldMap from "./pages/Worldmap.jsx";

function App() {
  return (
    <Routes>
      {/* Layout Route */}
      <Route path="/" element={<Layout />}>
        {/* Nested Routes */}
        <Route path="home" element={<Home />} />
        <Route path="translate" element={<Translate />} />
        <Route path="conversation" element={<Conversation />} />
        <Route path="chat" element={<Chat />} />
        <Route path="about" element={<About />} />
        <Route path="worldmap" element={<WorldMap />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
export default function App() {

  var api_token = "essu_YlVJeWRtRkpNRUoxUzI1SFJESlRjMjF6UmpFNmVUUlpiVVZOVG5oVGNVZEtWMVJEYkdSWWFWRkxkdz09AAAAAJHzlR8="
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

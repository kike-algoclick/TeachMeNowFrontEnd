import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown'
import "../CSS/mainpage.css";
 
// Importación de imágenes (solo una vez)
import p1 from "/Herramientas_img/1.png";
import p2 from "/Herramientas_img/2.png";
import p3 from "/Herramientas_img/3.png";
import p4 from "/Herramientas_img/4.png";
import p5 from "/Herramientas_img/5.png";
import p6 from "/Herramientas_img/6.png";
import p7 from "/Herramientas_img/7.png";
import p8 from "/Herramientas_img/8.png";
import p9 from "/Herramientas_img/9.png";
import p10 from "/Herramientas_img/10.png";
import p11 from "/Herramientas_img/11.png";
import p12 from "/Herramientas_img/12.png";
import p13 from "/Herramientas_img/13.png";
 
export default function MainPageT() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("checking");
 
  // Prompts predefinidos para cada herramienta
  const toolPrompts = {
    planLessons: "Hello! I want to plan lessons. Please tell me:\n1. What subject or specific topic?\n2. What educational level?\n3. How many lessons do you need?\n4. Duration of each lesson?",
    planLessonDetails: "Perfect! Let's create detailed lessons. I need:\n1. Specific topic?\n2. Age or level of students?\n3. How long should each lesson last?\n4. How many total lessons?",
    createGuides: "Excellent! I'll help you create study guides. Tell me:\n1. What topic?\n2. Level of detail? (basic, intermediate, advanced)\n3. For what age/level?\n4. Do you want me to convert it to PDF?",
    createPresentation: "Great! Let's create a presentation. I need:\n1. Main topic?\n2. How many slides?\n3. For what audience?\n4. Preferred style?",
    createRubric: "Perfect! Let's create an evaluation rubric. Tell me:\n1. For what activity?\n2. What criteria are important?\n3. How many performance levels?\n4. Specific subject?",
    findVideo: "Excellent! I'll help you find educational videos. Tell me:\n1. What specific topic?\n2. For what level?\n3. Preferred duration?\n4. Language?",
    planExam: "Let's create an exam. I need:\n1. Subject?\n2. Topics?\n3. Type of questions?\n4. Exam duration?\n5. Difficulty level?",
    planUnit: "Let's plan a complete didactic unit. Tell me:\n1. Central theme?\n2. How many weeks?\n3. Learning objectives?\n4. Subject and level?",
    planClass: "Let's plan a specific class. Tell me:\n1. Class topic?\n2. Duration?\n3. Objectives?\n4. Resources?\n5. Student level?",
    planTest: "Let's create a test. Tell me:\n1. Topics?\n2. Type of test?\n3. Duration?\n4. Difficulty level?",
    planWorkshop: "Let's design a workshop. I need:\n1. Topic?\n2. Duration?\n3. Participants?\n4. Objectives?\n5. Materials?",
    planActivity: "Let's create an activity. Tell me:\n1. Type of activity?\n2. Topic?\n3. Duration?\n4. Objectives?\n5. Age of participants?"
  };
 
  // Verificar conexión con el backend al cargar
  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/test");
        if (response.ok) {
          setConnectionStatus("connected");
        } else {
          setConnectionStatus("error");
          console.error("Backend error:", response.status);
        }
      } catch (error) {
        setConnectionStatus("error");
        console.error("Connection failed:", error.message);
      }
    };
    testConnection();
  }, []);
 
  // Enviar mensaje al backend
  const sendMessageToAI = async (messageContent) => {
    if (!messageContent.trim()) return;
 
    const userMessage = { role: "user", content: messageContent };
    setMessages((prev) => [...prev, userMessage]);
 
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/generateIdea", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: messageContent }),
      });
 
      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
 
      const data = await res.json();
      if (data.response) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
 
        // Si es búsqueda de videos
        if (messageContent.includes("video") || messageContent.includes("Video")) {
          setTimeout(() => {
            handleVideoAction(data.response);
          }, 2000);
        }
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: "No response received from server." }]);
      }
    } catch (error) {
      console.error("Send message error:", error.message);
      setMessages((prev) => [...prev, {
        role: "assistant",
        content: `Connection error: ${error.message}. Please verify that the backend is running on http://localhost:5000`,
      }]);
    } finally {
      setLoading(false);
    }
  };
 
  // Manejar clic en las herramientas
  const handleToolClick = (toolType) => {
    const prompt = toolPrompts[toolType];
    if (prompt) sendMessageToAI(prompt);
  };
 
  // Buscar videos en YouTube automáticamente
  const handleVideoAction = (aiResponse) => {
    const videoQuery = extractVideoTopic(aiResponse);
    if (videoQuery) {
      const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(videoQuery + " educational tutorial")}`;
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `🎥 Perfect! Opening YouTube to search for "${videoQuery}". Recommended channels: Khan Academy, Crash Course, TED-Ed, National Geographic Education.`,
        },
      ]);
      setTimeout(() => {
        window.open(youtubeUrl, "_blank");
      }, 1000);
    }
  };
 
  // Extraer tema de video del texto
  const extractVideoTopic = (text) => {
    const patterns = [
      /topic[:\s]+(.+?)[\.\,\n]/i,
      /about[:\s]+(.+?)[\.\,\n]/i,
      /search[:\s]+(.+?)[\.\,\n]/i,
      /looking for[:\s]+(.+?)[\.\,\n]/i,
    ];
    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match) return match[1].trim();
    }
    return "educational content";
  };
 
  // Manejar envío de mensajes
  const handleSend = async () => {
    if (!input.trim()) return;
    const inputToSend = input;
    setInput("");
    await sendMessageToAI(inputToSend);
  };
 
  return (
    <div className="body">
      {/* Panel izquierdo */}
      <div className="left-panel">
        <div className="logo">
          Teach<span className="highlight">Me</span>
          <span className="highlight2">Now</span>
        </div>
 
        {/* Estado de conexión */}
        <div className="connection-status">
          {connectionStatus === "checking" && "🔄 Checking connection..."}
          {connectionStatus === "connected" && "Welcome to TeachMeNow Assistant"}
          {connectionStatus === "error" && "❌ Backend disconnected"}
        </div>
 
        {/* Chat */}
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              <strong>{message.role === "user" ? "You: " : "Assistant: "}</strong>
              <p>{message.content}</p>
            </div>
          ))}
          {loading && (
            <div className="message assistant">
              <strong>Assistant: </strong>
              <p>🤔 Thinking...</p>
            </div>
          )}
        </div>
 
        {/* Caja de texto */}
        <div className="chat-box">
          <input
            type="text"
            placeholder="Type here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !loading && handleSend()}
            disabled={loading || connectionStatus === "error"}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim() || connectionStatus === "error"}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
 
      {/* Panel derecho */}
      <div className="right-panel overflow-hidden">
        <h2>Tools</h2>
        <div className="tools">
          <div className="tool">
            <div className="Icon"><img src={p1} alt="Icon" width="50" height="50" /></div>
            Plan Classes
            <button onClick={() => handleToolClick("planLessons")}>Start</button>
          </div>
 
          <div className="tool">
            <div className="Icon"><img src={p13} alt="Icon" width="50" height="50" /></div>
            Plan Lessons
            <button onClick={() => handleToolClick("planLessonDetails")}>Start</button>
          </div>
 
          <div className="tool">
            <div className="Icon"><img src={p2} alt="Icon" width="50" height="50" /></div>
            Create Guides
            <button onClick={() => handleToolClick("createGuides")}>Start</button>
          </div>
 
          <div className="tool">
            <div className="Icon"><img src={p8} alt="Icon" width="50" height="50" /></div>
            Create Presentation
            <button onClick={() => handleToolClick("createPresentation")}>Start</button>
          </div>
 
          <div className="tool">
            <div className="Icon"><img src={p3} alt="Icon" width="50" height="50" /></div>
            Rubric
            <button onClick={() => handleToolClick("createRubric")}>Start</button>
          </div>
 
          <div className="tool">
            <div className="Icon"><img src={p9} alt="Icon" width="50" height="50" /></div>
            Video
            <button onClick={() => handleToolClick("findVideo")}>Search</button>
          </div>
 
          <div className="tool">
            <div className="Icon"><img src={p4} alt="Icon" width="50" height="50" /></div>
            Plan Exam
            <button onClick={() => handleToolClick("planExam")}>Start</button>
          </div>
 
          <div className="tool">
            <div className="Icon"><img src={p10} alt="Icon" width="50" height="50" /></div>
            Plan Unit
            <button onClick={() => handleToolClick("planUnit")}>Start</button>
          </div>
 
          <div className="tool">
            <div className="Icon"><img src={p5} alt="Icon" width="50" height="50" /></div>
            Plan Class
            <button onClick={() => handleToolClick("planClass")}>Start</button>
          </div>
 
          <div className="tool">
            <div className="Icon"><img src={p11} alt="Icon" width="50" height="50" /></div>
            Plan Test
            <button onClick={() => handleToolClick("planTest")}>Start</button>
          </div>
 
          <div className="tool">
            <div className="Icon"><img src={p6} alt="Icon" width="50" height="50" /></div>
            Plan Workshop
            <button onClick={() => handleToolClick("planWorkshop")}>Start</button>
          </div>
 
          <div className="tool">
            <div className="Icon"><img src={p12} alt="Icon" width="50" height="50" /></div>
            Plan Activity
            <button onClick={() => handleToolClick("planActivity")}>Start</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
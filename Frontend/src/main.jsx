// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { UserProvider } from "./context/Usercontext.jsx";
// import { ChatProvider } from "./context/Chatcontext.jsx";

// export const server = "http://localhost:5000";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <UserProvider>
//       <ChatProvider>
//         <App />
//       </ChatProvider>
//     </UserProvider>
//   </StrictMode>
// );
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/UserContext.jsx"; // Exact match
import { ChatProvider } from "./context/ChatContext.jsx"; // Exact match

export const server = "http://localhost:5000";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </UserProvider>
  </StrictMode>
);

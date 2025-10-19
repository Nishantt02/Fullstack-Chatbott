
import express from 'express';
import router from './Routes/UserRoutes.js';
import Chatroutes from './Routes/ChatRoutes.js';
import path from 'path';
import cors from 'cors';

const app = express();
const __dirname = path.resolve();

app.use(express.json());



// const corsOption={
//   origin:"https://fullstack-chatbott-11.onrender.com",
//   Credential:true
// }
// app.use(cors(corsOption));

const allowedOrigins = [
  "https://fullstack-chatbott-85.onrender.com", // frontend deployed URL
  "https://fullstack-chatbott-11.onrender.com", // backend URL (optional)
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow Postman or curl requests
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = "The CORS policy for this site does not allow access from the specified Origin.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});


// API routes
app.use('/User', router);
app.use('/Chat', Chatroutes);

// Serve frontend
app.use(express.static(path.join(__dirname, "Frontend/dist")));

// Catch-all for React/Vite frontend routing (Express 5 safe)
app.use((req, res) => {
   res.sendFile(path.join(__dirname, "Frontend/dist/index.html"));
});

export default app;


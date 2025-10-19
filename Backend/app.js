
// import express from 'express';
// import router from './Routes/UserRoutes.js';
// import Chatroutes from './Routes/ChatRoutes.js';
// import path from 'path';
// import cors from 'cors';

// const app = express();
// const __dirname = path.resolve();

// app.use(express.json());



// // const corsOption={
// //   origin:"https://fullstack-chatbott-11.onrender.com",
// //   Credential:true
// // }
// // app.use(cors(corsOption));


// app.use((req, res, next) => {
//   res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
//   next();
// });


// // API routes
// app.use('/User', router);
// app.use('/Chat', Chatroutes);

// // Serve frontend
// app.use(express.static(path.join(__dirname, "Frontend/dist")));

// // Catch-all for React/Vite frontend routing (Express 5 safe)
// app.use((req, res) => {
//    res.sendFile(path.join(__dirname, "Frontend/dist/index.html"));
// });

// export default app;
import express from 'express';
import router from './Routes/UserRoutes.js';
import Chatroutes from './Routes/ChatRoutes.js';
import path from 'path';
import cors from 'cors';

const app = express();
const __dirname = path.resolve();

app.use(express.json());

// ✅ Allowed frontend URLs
const allowedOrigins = [
  "https://fullstack-chatbott-98.onrender.com", // current frontend
  "https://fullstack-chatbott-11.onrender.com", // older frontend (optional)
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow curl/Postman
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("CORS error: this origin is not allowed"), false);
  },
  credentials: true
}));

// Prevent caching
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});

// API routes
app.use('/User', router);
app.use('/Chat', Chatroutes);

// Serve frontend
app.use(express.static(path.join(__dirname, "Frontend/dist")));

app.use((req, res) => {
   res.sendFile(path.join(__dirname, "Frontend/dist/index.html"));
});

export default app;

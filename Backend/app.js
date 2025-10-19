
// import express from 'express';
// import router from './Routes/UserRoutes.js';
// import Chatroutes from './Routes/ChatRoutes.js';
// import path from 'path';
// import cors from 'cors';

// const app = express();
// const __dirname = path.resolve();

// app.use(express.json());

// const corsoption={
//     origin:"https://fullstack-chatbott-4.onrender.com",
//     credentials:true
// }
// // app.use(cors(corsoption))
// app.use(cors({
//   origin: function(origin, callback){
//     if(!origin) return callback(null, true); // allow requests like mobile apps or curl
//     if(allowedOrigins.indexOf(origin) === -1){
//       const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   },
//   credentials: true
// }));

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

// ✅ Define allowed origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://fullstack-chatbott-9.onrender.com",
  "https://fullstack-chatbott-10.onrender.com",
  "https://fullstack-chatbott-11.onrender.com",
  // Add your deployed frontend URLs here
];

// ✅ Dynamic CORS
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow tools like Postman or curl
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
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

// Catch-all for React/Vite frontend routing
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "Frontend/dist/index.html"));
});

export default app;

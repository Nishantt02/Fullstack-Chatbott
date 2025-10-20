
import express from 'express';
import router from './Routes/UserRoutes.js';
import Chatroutes from './Routes/ChatRoutes.js';
import path from 'path';
import cors from 'cors';

const app = express();
const __dirname = path.resolve();

app.use(express.json());

app.use(cors());


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


// import cors from "cors";
// import express from "express";
// import path from "path";
// import router from "./Routes/UserRoutes.js";
// import Chatroutes from "./Routes/ChatRoutes.js";

// const app = express();
// const __dirname = path.resolve();

// app.use(express.json());

// // ✅ Allow dynamic frontend URLs (Render & Localhost)
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (
//         !origin || // Allow mobile apps, Postman, etc.
//         origin.includes("onrender.com") || // ✅ Any Render domain (frontend)
//         origin.includes("localhost") // ✅ Local development
//       ) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"), false);
//       }
//     },
//     credentials: true,
//   })
// );

// // Disable caching
// app.use((req, res, next) => {
//   res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
//   next();
// });

// // Routes
// app.use("/User", router);
// app.use("/Chat", Chatroutes);

// // Serve static frontend (if included)
// app.use(express.static(path.join(__dirname, "Frontend/dist")));
// app.use((req, res) =>
//   res.sendFile(path.join(__dirname, "Frontend/dist/index.html"))
// );

// export default app;

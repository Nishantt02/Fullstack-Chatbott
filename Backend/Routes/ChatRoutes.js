// import express from 'express';
// import {createChat,getallchat,addconversation,getconverstion,deletechat} from '../Controllers/ChatContollers.js';
// const router=express.Router();
// import { isAuth } from "../Middlewares/IsAuth.js";


// router.post('/create',isAuth,createChat)
// router.get('/getallchat',isAuth,getallchat)
// router.post('/add/:id',isAuth,addconversation)
// router.get('/getchat/:id',isAuth,getconverstion)
// router.delete('/delete/:id',isAuth,deletechat)

// export default router;


import express from "express";
import { isAuth } from "../Middlewares/IsAuth.js";
import {
  addConversation,
  createChat,
  deleteChat,
  getAllChats,
  getConversation,
} from '../Controllers/ChatContollers.js'

const router = express.Router();

router.post("/new", isAuth, createChat);
router.get("/all", isAuth, getAllChats);
router.post("/add/:id", isAuth, addConversation);
router.get("/:id", isAuth, getConversation);
router.delete("/:id", isAuth, deleteChat);

export default router;
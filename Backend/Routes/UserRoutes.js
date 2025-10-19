// import express from 'express';
// // import {Loginuser, Profile, verifyUser} from '../Controllers/UserControllers.js';

// import isAuth from '../Middlewares/IsAuth.js';
// const router=express.Router();

//  router.post('/login',Loginuser)



// router.post('/verify',verifyUser)
// router.get('/me',isAuth,Profile)

// export default router;  

import express from "express";
import {
  loginUser,
  myProfile,
  verifyUser,
} from '../Controllers/UserControllers.js';
import { isAuth } from "../Middlewares/IsAuth.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/verify", verifyUser);
router.get("/me", isAuth,myProfile);

export default router;
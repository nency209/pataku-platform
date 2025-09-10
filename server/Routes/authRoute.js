import { signIn,signUp ,logout} from "../controllers/authControl.js";
import express from 'express'
const route=express.Router()

route.post('/signin',signIn)
route.post('/signup',signUp)
route.post("/logout", logout);


export default route
import express from "express";
import { register} from "../controllers/auth/register.controller";
import { login } from "../controllers/auth/login.controller";
import { refreshToken } from "../controllers/auth/refresh.controller";
import { logout } from "../controllers/auth/logout.controller";
import { me } from "../controllers/auth/me.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshToken);
router.post("/logout", logout);
router.get("/me",authMiddleware, me);

export default router;
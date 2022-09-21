import express, { Request, Response } from "express";
import passport from "passport";

const router = express.Router();

const CLIENT_URL = "http://localhost:5173";

router.get("/login/failed", (_req: Request, res: Response) => {
  return res.status(401).json({
    status: false,
    message: "Login failed",
  });
});

router.get("/login/success", (req: Request, res: Response) => {
  if (req.user) {
    return res.status(200).json({
      status: 200,
      message: "Login success",
      user: req.user,
      // cookie: req.cookies,
    });
  }
  return res.status(403).json({ status: 403, message: "Not authorized" });
});

router.get("/logout", (req: Request, res: Response) => {
  req.logout({ keepSessionInfo: false }, (err) => err);

  return res.status(200).redirect(CLIENT_URL);
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

export default router;

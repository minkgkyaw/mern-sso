import express from "express";
import http from "http";
import consola from "consola";
import cors from "cors";
import passport from "passport";
// import cookieSession from "cookie-session";
import authRoute from "./routes/auth.routes";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST"],
  })
);
app.use(morgan("tiny"));
app.use(passport.initialize());
// app.use(
//   cookieSession({
//     name: "session",
//     keys: ["lama"],
//     maxAge: 24 * 60 * 60 * 1000,
//   })
// );
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true },
  })
);
app.use(cookieParser());
app.use(passport.session());

require("./passport");

app.use("/auth", authRoute);

const server = http.createServer(app);

server.listen(3000, () => consola.success(`Server listening on 3000`));

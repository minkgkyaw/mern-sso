import passport from "passport";
import oAuthGoogle from "passport-google-oauth20";

const GoogleStrategy = oAuthGoogle.Strategy;

const GOOGLE_CLIENT_ID =
  "82894013200-t4t0od5u6hpj79tg135646notmgqi5g1.apps.googleusercontent.com";

const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (_accessToken, _refreshToken, profile, done) {
      console.log("profile", profile);
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  process.nextTick(() => done(null, user));
});

passport.deserializeUser(function (user: any, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

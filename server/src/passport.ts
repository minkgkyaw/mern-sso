import passport from "passport";
import oAuthGoogle from "passport-google-oauth20";
import gitHub from "passport-github2";
import facebook from "passport-facebook";

const GoogleStrategy = oAuthGoogle.Strategy;

const GitHubStrategy = gitHub.Strategy;

const GOOGLE_CLIENT_ID =
  "82894013200-t4t0od5u6hpj79tg135646notmgqi5g1.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "3aba11f91772ce613646";
const GITHUB_CLIENT_SECRET = "e46baa49f8d9749d658c165725dd6a6aa1bfb60d";

const FACEBOOK_CLIENT_ID = "611706080422430";
const FACEBOOK_CLIENT_SECRET = "d3af4d038293a53cb4dbdc47fb3e5ded";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (_accessToken, _refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/github/callback",
    },
    function (
      _accessToken: string,
      _refreshToken: string,
      profile: any,
      done: (arg0: null, arg1: any) => any
    ) {
      return done(null, profile);
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

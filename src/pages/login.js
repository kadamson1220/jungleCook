import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";

export default function login() {
  return `
    <section class="login-page" aria-label="Log in or create an account">
      <div class="auth-layout">
        <section class="auth-panel auth-panel--login" aria-labelledby="loginTitle">
          <h1 id="loginTitle">Login Here!</h1>
          <form id="loginForm" class="auth-form">
            <label class="auth-field">
              <span>Email Address</span>
              <input name="email" type="email" autocomplete="email" required aria-label="Login email address">
            </label>
            <label class="auth-field">
              <span>Password</span>
              <input name="password" type="password" autocomplete="current-password" required aria-label="Login password">
            </label>
            <button class="script-button auth-button" type="submit">Login</button>
          </form>
        </section>

        <section class="auth-panel auth-panel--signup" aria-labelledby="signupTitle">
          <p class="auth-panel__eyebrow">don't have an account?</p>
          <h2 id="signupTitle">Sign Up!</h2>
          <form id="signupForm" class="auth-form auth-form--signup">
            <label class="auth-field">
              <span>First Name</span>
              <input name="firstName" type="text" autocomplete="given-name" required aria-label="First name">
            </label>
            <label class="auth-field">
              <span>Last Name</span>
              <input name="lastName" type="text" autocomplete="family-name" required aria-label="Last name">
            </label>
            <label class="auth-field">
              <span>Email Address</span>
              <input name="email" type="email" autocomplete="email" required aria-label="Sign up email address">
            </label>
            <label class="auth-field">
              <span>Password</span>
              <input name="password" type="password" autocomplete="new-password" minlength="6" required aria-label="Create a password">
            </label>
            <button class="script-button auth-button" type="submit">Sign Up</button>
          </form>
        </section>
      </div>
      <footer class="site-footer site-footer--login">
        <span class="site-footer__copyright">Copyright © 2019 The Jungle Cook</span>
        <nav class="site-footer__links" aria-label="Footer navigation">
          <a href="#login">Login</a>
          <a href="#browse" data-coming-soon>Recipes by Category</a>
          <a href="#privacy" data-coming-soon>Privacy and Copyright</a>
          <a href="#create" data-coming-soon>Create Recipe</a>
          <a href="#recipes" data-coming-soon>Your Recipes</a>
        </nav>
        <div class="site-footer__social" aria-label="Social media">
          <a href="#facebook" data-coming-soon aria-label="Facebook"><img src="${facebookIcon}" alt=""></a>
          <a href="#instagram" data-coming-soon aria-label="Instagram"><img src="${instagramIcon}" alt=""></a>
        </div>
      </footer>
    </section>
  `;
}

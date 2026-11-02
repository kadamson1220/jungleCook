import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";

export default function home() {
  return `
    <section class="home-page" aria-labelledby="homeTitle">
      <div class="home-page__shade"></div>
      <div class="home-page__content">
        <div class="home-page__note">Want to be a Jungle Cook? Go ahead and add the kitchen to yours!</div>
        <div class="home-page__circle">
          <h1 id="homeTitle">The Jungle Cook</h1>
          <p>The home to various recipes of your choice. Add your own recipe today and fill the world with joy!</p>
        </div>
      </div>
      <footer class="site-footer site-footer--home">
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

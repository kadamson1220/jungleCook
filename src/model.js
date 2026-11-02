import home from "./pages/home.js";
import login from "./pages/login.js";

const pages = { home, login };

export function loadPage(pageID) {
  return (pages[pageID] || pages.home)();
}

export function getPageID() {
  const pageID = window.location.hash.slice(1);
  return pages[pageID] ? pageID : "home";
}

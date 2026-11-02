import "./scss/styles.scss";
import { auth, firebaseReady } from "./firebase.js";
import { loadPage, getPageID } from "./model.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const app = document.querySelector("#app");
const menuButton = document.querySelector("#menuButton");
const mainNav = document.querySelector("#mainNav");
const toast = document.querySelector("#toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("toast--visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    toast.classList.remove("toast--visible");
  }, 3200);
}

function closeMenu() {
  mainNav.classList.remove("site-nav--open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open menu");
}

function changeRoute() {
  const pageID = getPageID();
  app.innerHTML = loadPage(pageID);
  document.body.dataset.page = pageID;
  closeMenu();
  window.scrollTo(0, 0);
  attachPageListeners();
}

function attachPageListeners() {
  document.querySelectorAll().forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      closeMenu();
    });
  });

  const loginForm = document.querySelector("#loginForm");
  if (loginForm) loginForm.addEventListener("submit", handleLogin);

  const signupForm = document.querySelector("#signupForm");
  if (signupForm) signupForm.addEventListener("submit", handleSignup);
}

function getAuthErrorMessage(error) {
  const messages = {
    "auth/invalid-credential": "The email or password is incorrect.",
    "auth/user-not-found": "No account was found for this email.",
    "auth/wrong-password": "The email or password is incorrect.",
    "auth/email-already-in-use": "An account already uses this email.",
    "auth/invalid-email": "Enter a valid email address.",
    "auth/weak-password": "Choose a password with at least 6 characters.",
    "auth/network-request-failed":
      "Check your internet connection and try again.",
  };
  return messages[error.code] || "Something went wrong. Please try again.";
}

async function handleLogin(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value;

  if (!firebaseReady) {
    showToast("Add your Firebase settings to the .env file first.");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    showToast("You are logged in.");
    window.setTimeout(() => {
      window.location.hash = "home";
    }, 500);
  } catch (error) {
    showToast(getAuthErrorMessage(error));
  }
}

async function handleSignup(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const firstName = form.elements.firstName.value.trim();
  const lastName = form.elements.lastName.value.trim();
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value;

  if (!firebaseReady) {
    showToast("Add your Firebase settings to the .env file first.");
    return;
  }

  try {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(credential.user, {
      displayName: `${firstName} ${lastName}`,
    });
    showToast("Your account was created.");
    window.setTimeout(() => {
      window.location.hash = "home";
    }, 500);
  } catch (error) {
    showToast(getAuthErrorMessage(error));
  }
}

menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("site-nav--open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

window.addEventListener("hashchange", changeRoute);
changeRoute();

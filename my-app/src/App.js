// Install necessary packages:
// npm install @clerk/clerk-react react-router-dom

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, SignUp, SignIn } from "@clerk/clerk-react";

const clerkFrontendApi = "your-clerk-frontend-api"; // Replace with your Clerk frontend API

function App() {
  return (
    <ClerkProvider frontendApi={clerkFrontendApi} navigate={(to) => window.history.pushState(null, "", to)}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/sign-up"
            element={
              <SignedOut>
                <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
              </SignedOut>
            }
          />
          <Route
            path="/sign-in"
            element={
              <SignedOut>
                <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
              </SignedOut>
            }
          />
          <Route
            path="/"
            element={
              <SignedIn>
                <Home />
              </SignedIn>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  );
}

function Home() {
  return <h1>Welcome! You are signed in.</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

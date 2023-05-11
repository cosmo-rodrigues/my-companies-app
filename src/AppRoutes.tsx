import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { SignInSignUp } from "./pages/SignInSignUp";

import { Container, Hero } from "./App.ts";
import { Private } from "./components/Private/index.tsx";

export function AppRoutes() {
  return (
    <Container>
      <Hero>
        <Routes>
          <Route path="/sign-in" element={<SignInSignUp />} />
          <Route path="/sign-up" element={<SignInSignUp />} />
          <Route
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route path="*" element={<SignInSignUp />} />
        </Routes>
      </Hero>
    </Container>
  );
}

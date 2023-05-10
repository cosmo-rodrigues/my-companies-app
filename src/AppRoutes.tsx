import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";

import { Container, Hero } from "./App.ts";
import { Private } from "./components/Private/index.tsx";

export function AppRoutes() {
  return (
    <Container>
      <Hero>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route path="*" element={<SignIn />} />
        </Routes>
      </Hero>
    </Container>
  );
}

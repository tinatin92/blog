import { Suspense } from "react";
import { Route } from "react-router-dom";
import { APP_PATHS } from "./index.enum";
import { LoginPage } from "./login";

import { HomePage } from "./home";
import { RegistrationPage } from "./registration";
import { AboutPage } from "./about";
import { BlogPage } from "./blogs";
import { ProfilePage } from "./profile";
import { BlogView } from "./blog-view";
import { AuthorPage } from "./author";

export const ROUTES = [
  <Route
    index
    element={
      <Suspense fallback={<div>...Loading</div>}>
        <HomePage />
      </Suspense>
    }
  />,
  <Route
    path={APP_PATHS.REGISTER}
    element={
      <Suspense fallback={<div>...Loading</div>}>
        <RegistrationPage />
      </Suspense>
    }
  />,
  <Route
    path={APP_PATHS.LOGIN}
    element={
      <Suspense fallback={<div>...Loading</div>}>
        <LoginPage />
      </Suspense>
    }
  />,
  <Route
    path={APP_PATHS.ABOUT}
    element={
      <Suspense fallback={<div>...Loading</div>}>
        <AboutPage />
      </Suspense>
    }
  />,
  <Route
    path={APP_PATHS.WRITE_BLOG}
    element={
      <Suspense fallback={<div>...Loading</div>}>
        <BlogPage />
      </Suspense>
    }
  />,
  <Route
    path={APP_PATHS.PROFILE}
    element={
      <Suspense fallback={<div>...Loading</div>}>
        <ProfilePage />
      </Suspense>
    }
  />,
  <Route
    path={APP_PATHS.BLOGS_LIST}
    element={
      <Suspense fallback={<div>...Loading</div>}>
        <BlogView />
      </Suspense>
    }
  />,
  <Route
    path={APP_PATHS.AUTHOR + "/:id"}
    element={
      <Suspense fallback={<div>...Loading</div>}>
        <AuthorPage />
      </Suspense>
    }
  />,
];

import React, { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loading from "./components/loading/Loading";

const LazyJoinFirstPage = lazy(() => import("./pages/join/JoinFirstPage"));
const LazyJoinPage = lazy(() => import("./pages/join/JoinPage"));
const LazyJoinLastPage = lazy(() => import("./pages/join/JoinLastPage"));
const LazyLoginPage = lazy(() => import("./pages/login/LoginPage"));

const LazyMyPage = lazy(() => import("./pages/my/MyPage"));

const LazyAddEditPage = lazy(() => import("./pages/addedit/AddEditPage"));

const LazyMainPage = lazy(() => import("./pages/main/MainPage"));

const LazyPayPage = lazy(() => import("./pages/pay/PayPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="main"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMainPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <LazyLoginPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/join/1"
          element={
            <Suspense fallback={<Loading />}>
              <LazyJoinFirstPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/join/2"
          element={
            <Suspense fallback={<Loading />}>
              <LazyJoinPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/join/3"
          element={
            <Suspense fallback={<Loading />}>
              <LazyJoinLastPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/my/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMyPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/addedit/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyAddEditPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/pay/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyPayPage />
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;

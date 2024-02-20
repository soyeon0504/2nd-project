import React, { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Loading from "./components/loading/Loading";
// import "antd/dist/antd.css";

const LazyJoinSelectPage = lazy(() => import("./pages/join/JoinSelectPage"));
const LazyJoinFirstPage = lazy(() => import("./pages/join/JoinFirstPage"));
const LazyJoinPage = lazy(() => import("./pages/join/JoinPage"));
const LazyJoinEnterprisePage = lazy(() => import("./pages/join/JoinEnterprisePage"));
const LazyJoinLastPage = lazy(() => import("./pages/join/JoinLastPage"));
const LazyLoginPage = lazy(() => import("./pages/login/LoginPage"));

const LazyMyPage = lazy(() => import("./pages/my/MyPage"));

const LazyCompanyPage = lazy(() => import("./pages/company/CompanyPage"))


const LazyAdminPage = lazy(() => import("./pages/admin/AdminPage"));

const LazyMainPage = lazy(() => import("./pages/main/MainPage"));

const LazyProfilePage = lazy(() => import("./pages/profile/UserProfile"));

const LazyMainMorePage = lazy(() => import("./pages/main/MainMorePage"));
const LazyMainSearchPage = lazy(() =>
  import("./pages/main/MainMoreSearchPage"),
);

const LazyPayPage = lazy(() => import("./pages/pay/PayPage"));

const LazyDetailsPage = lazy(() => import("./pages/details/DetailsPage"));
const LazyChatPage = lazy(() => import("./pages/chat/ChatPage"));


const LazyFreePage = lazy(() => import("./pages/free/FreePage"));
const LazyFreeRegisterPage = lazy(() => import("./pages/free/FreeRegisterPage"));
const LazyFreeModifyPage = lazy(() => import("./pages/free/FreeModifyPage"));
const LazyFreeDetailsPage = lazy(() => import("./pages/free/FreeDetailsPage"));

const LazyCustomerPage = lazy(() =>
  import("./pages/Customer/CustomerServicePage"),
);
const LazyErrorPage = lazy(() => import("./pages/ErrorPage"));
//등록
const LazyWrite = lazy(() => import("./pages/prod/Write"));
const LazyModify = lazy(() => import("./pages/prod/Modify"));
//기업등록
const LazyEnterprise = lazy(() => import("./pages/promootion/EnterpriseWrite"));
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMainPage />
            </Suspense>
          }
        ></Route>
        <Route
          // path="/more/:id/:subid/:page"
          path="/more"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMainMorePage />
            </Suspense>
          }
        ></Route>

        <Route
          path="/search"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMainSearchPage />
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
          path="/join/select"
          element={
            <Suspense fallback={<Loading />}>
              <LazyJoinSelectPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/join/step_1"
          element={
            <Suspense fallback={<Loading />}>
              <LazyJoinFirstPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/join/step_2/individual"
          element={
            <Suspense fallback={<Loading />}>
              <LazyJoinPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/join/step_2/enterprise"
          element={
            <Suspense fallback={<Loading />}>
              <LazyJoinEnterprisePage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/join/step_3"
          element={
            <Suspense fallback={<Loading />}>
              <LazyJoinLastPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/my"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMyPage />
            </Suspense>
          }
        >
        </Route>
        <Route
          path="/company"
          element={
            <Suspense fallback={<Loading />}>
              <LazyCompanyPage />
            </Suspense>
          }
        >
        </Route>
        <Route
          path="/admin"
          element={
            <Suspense fallback={<Loading />}>
              <LazyAdminPage />
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
        <Route
          path="/write/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyWrite />
            </Suspense>
          }
        ></Route>
        <Route
          path="/modify"
          element={
            <Suspense fallback={<Loading />}>
              <LazyModify />
            </Suspense>
          }
        ></Route>
        <Route
          path="/enterprise"
          element={
            <Suspense fallback={<Loading />}>
              <LazyEnterprise />
            </Suspense>
          }
        ></Route>
        <Route
          path="/details/:mainCategory/:subCategory/:productId"
          element={
            <Suspense fallback={<Loading />}>
              <LazyDetailsPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <Suspense fallback={<Loading />}>
              <LazyProfilePage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/chat/:iuser"
          element={
            <Suspense fallback={<Loading />}>
              <LazyChatPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/free"
          element={
            <Suspense fallback={<Loading />}>
              <LazyFreePage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/free/register"
          element={
            <Suspense fallback={<Loading />}>
              <LazyFreeRegisterPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/free/modify"
          element={
            <Suspense fallback={<Loading />}>
              <LazyFreeModifyPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/free/details"
          element={
            <Suspense fallback={<Loading />}>
              <LazyFreeDetailsPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/customer"
          element={
            <Suspense fallback={<Loading />}>
              <LazyCustomerPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <LazyErrorPage />
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;

import { lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "destyle.css";
import "antd/dist/antd.css";
import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";
import { store } from "app/store";
import LoadingScreen from "components/LoadingScreen";

const CreateAccountPage = lazy(
  () => import("modules/exterior/registration/pages/CreateAccountPage")
);
const AccountSetupPage = lazy(
  () => import("modules/exterior/registration/pages/AccountSetupPage")
);
const VerifyEmailPage = lazy(
  () => import("modules/exterior/registration/pages/VerifyEmailPage")
);
const LoginPage = lazy(() => import("modules/exterior/LoginPage"));
const ForgotPasswordPage = lazy(
  () => import("modules/exterior/forgotPassword/pages/ForgotPasswordPage")
);

const MainApp = lazy(() => import("modules/mainApp/MainApp"));
const CreateProjectPage = lazy(
  () => import("modules/mainApp/CreateProjectPage")
);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>

        <Suspense fallback={<LoadingScreen />}>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>

            <Route path="/account-setup">
              <AccountSetupPage />
            </Route>

            <Route path="/create-account">
              <CreateAccountPage />
            </Route>

            <Route path="/verify-email">
              <VerifyEmailPage />
            </Route>

            <Route path="/create-project">
              <CreateProjectPage />
            </Route>

            <Route path="/forgot-password">
              <ForgotPasswordPage />
            </Route>

            <Route path="/app">
              <MainApp />
            </Route>
          </Switch>
        </Suspense>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

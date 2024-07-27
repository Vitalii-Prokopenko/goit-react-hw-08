import { useEffect, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import Layout from "./Layout";
import { RestrictedRoute } from "./RestictredRoute";
import { PrivateRoute } from "./PrivateRoute";

// Pages
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

function App() {
  // const contacts = useSelector(selectFilteredContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(signUpUser());
  // }, [dispatch]);

  return (
    <div style={{height: "100%"}}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
      </Layout>

      {/* <RegistrationForm /> */}
      {/* <h1>Phonebook</h1>
      <p>Number of contacts: {contacts.length}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          columnGap: "10px",
          width: "100%",
        }}
      >
        <ContactForm />
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <SearchBox />
          {isLoading && <Loader />}
          {error && <ErrorMessage />}
          {contacts.length > 0 && <ContactList style={{ width: "100%" }} />}
        </div>
      </div> */}
    </div>
  );
}

export default App;

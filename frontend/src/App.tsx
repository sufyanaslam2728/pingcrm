import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Organizations from "./components/Organizations";
// import NotFound from "./components/NotFound";
import Contacts from "./components/Contacts";
import Layout from "./components/Layout";
import CreateOrganization from "./components/CreateOrganization";
import UpdateOrganization from "./components/UpdateOrganization";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default path redirect */}
        <Route path="/" element={<Navigate to="/organizations" replace />} />

        <Route
          path="/organizations"
          element={
            <Layout>
              <Organizations />
            </Layout>
          }
        />
        <Route
          path="/organizations/create"
          element={
            <Layout>
              <CreateOrganization />
            </Layout>
          }
        />
        <Route
          path="/organizations/edit/:id"
          element={
            <Layout>
              <UpdateOrganization />
            </Layout>
          }
        />
        <Route
          path="/organizations/create"
          element={
            <Layout>
              <CreateOrganization />
            </Layout>
          }
        />

        <Route
          path="/contacts"
          element={
            <Layout>
              <Contacts />
            </Layout>
          }
        />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Companies from "./components/Companies";
import NotFound from "./components/NotFound";
import Contacts from "./components/Contacts";
import Layout from "./components/Layout";
import CreateCompany from "./components/CreateCompany";
import UpdateCompany from "./components/UpdateCompany";
import { Toaster } from "react-hot-toast";
import UpdateContact from "./components/UpdateContact";
import CreateContact from "./components/CreateContact";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          {/* Default path redirect */}
          <Route path="/" element={<Navigate to="/companies" replace />} />

          <Route
            path="/companies"
            element={
              <Layout>
                <Companies />
              </Layout>
            }
          />
          <Route
            path="/companies/create"
            element={
              <Layout>
                <CreateCompany />
              </Layout>
            }
          />
          <Route
            path="/companies/edit/:id"
            element={
              <Layout>
                <UpdateCompany />
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
          <Route
            path="/contacts/create"
            element={
              <Layout>
                <CreateContact />
              </Layout>
            }
          />
          <Route
            path="/contacts/edit/:id"
            element={
              <Layout>
                <UpdateContact />
              </Layout>
            }
          />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

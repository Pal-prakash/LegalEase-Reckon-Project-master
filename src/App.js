import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import {ExpertConsultation} from "./Components/ExpertConsultation";
import {SignUp} from "./Components/SignUp";
import {HowItWorks} from "./Components/HowItWorks";
import GenerateLegalDocuments from "./Components/GenerateLegalDocuments";
import InputFields1 from "./Components/InputFields1"
import StreamlitEmbed from "./Components/ChatWithBot";
import DocumentStorage from "./Components/DocumentStorage";
import ContractInteraction from "./Components/ContractInteraction";

export default function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/expertconsultation" element={<ExpertConsultation />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route
            path="/generatelegaldocuments"
            element={<GenerateLegalDocuments />}
          />
          <Route path="/userinput" element={<InputFields1 />} />
          <Route path="/chatwithbot" element={<StreamlitEmbed />} />
          <Route path="/documentstorage" element={<DocumentStorage />} />
          <Route path="/storeToETH" element={<ContractInteraction />} />
        </Routes>
      </Router>
    );
}

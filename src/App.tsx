import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import SimpleCalculator from "./pages/SimpleCalculator";
import PrimeNumbers from "./pages/PrimeNumbers";
import Factorial from "./pages/Factorial";
import Palindrome from "./pages/Palindrome";
import Table from "./pages/Table";
import VowelCounter from "./pages/VowelCounter";
import GradeAverage from "./pages/GradeAverage";
import InterestCalculation from "./pages/InterestCalculation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/simple-calculator" element={<SimpleCalculator />} />
        <Route path="/prime-numbers" element={<PrimeNumbers />} />
        <Route path="/factorial" element={<Factorial />} />
        <Route path="/palindrome" element={<Palindrome />} />
        <Route path="/table" element={<Table />} />
        <Route path="/vowel-counter" element={<VowelCounter />} />
        <Route path="/grade-average" element={<GradeAverage />} />
        <Route path="/interest-calculation" element={<InterestCalculation />} />
      </Routes>
    </BrowserRouter>
  );
}

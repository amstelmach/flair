import styled from "styled-components";
import Pricing from "./components/Pricing";
import PageHeader from "./components/PageHeader";
import { useState } from "react";

const PricingContainer = styled.div`
  height: 100vh;
  width: 80%;
  background: linear-gradient(
    360deg,
    rgba(255, 255, 255, 0.056) 0%,
    rgba(37, 67, 136, 0.1) 42.16%,
    rgba(107, 180, 221, 0) 92.38%
  );
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto 200px;
`;

const month = {
  value: "8$",
};

const year = {
  value: "90$",
};

function App() {
  const [monthly, setMonthly] = useState(true);

  const data = monthly ? month : year;
  return (
    <>
      <PageHeader pageTitle="Base plan" />

      <PricingContainer>
        <Pricing
          headerText={data.headerText}
          descriptionText="Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s, and show meaningful appreciation when it matters most using High Fives."
          value={data.value}
          duration="per month"
          text="per employee"
          buttonText="Select Plan"
          list={["Core HR", "Payroll", "Recruiting", "Employee HUB"]}
          info={[]}
        />
        <Pricing
          headerText="Growth"
          descriptionText="Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s, and show meaningful appreciation when it matters most using High Fives."
          value="14€"
          duration="per month"
          text="per employee"
          buttonText="Select Plan"
          info={[
            "Core HR",
            "Payroll",
            "Recruiting",
            "Employee HUB",
            "Performance management",
            "Shift planning",
          ]}
          list={[]}
        />
        <Pricing
          headerText="Performance"
          descriptionText="Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s, and show meaningful appreciation when it matters most using High Fives."
          value="20€"
          duration="per month"
          text="per employee"
          buttonText="Select Plan"
          info={[
            "Core HR",
            "Payroll",
            "Recruiting",
            "Employee HUB",
            "Performance management",
            "Shift planning",
            "Componsation management",
          ]}
          list={[]}
        />
      </PricingContainer>
    </>
  );
}

export default App;

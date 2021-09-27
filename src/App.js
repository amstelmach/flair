import styled from "styled-components";
import Pricing from "./components/Pricing";
// import "./App.css";
import PageHeader from "./components/PageHeader";

const PricingContainer = styled.div`
  height: 100vh;
  width: 80%;
  background-color: #e5e5e5;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin: 0 auto 200px;
`;

// const PageHeaderA = styled.div`
//   width: 100%;
//   height: 200px;
//   background-color: red;
// `;

function App() {
  return (
    <>
      {/* <PageHeaderA /> */}
      <PageHeader pageTitle="Base plan" />

      <PricingContainer>
        <Pricing
          headerText="Essential"
          descriptionText="Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s, and show meaningful appreciation when it matters most using High Fives."
          value="8€"
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

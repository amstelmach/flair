import styled from "styled-components";
import Pricing from "./components/Pricing";
import PageHeader from "./components/PageHeader";

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

const PageHeaderComponent = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(
    360deg,
    rgba(255, 255, 255, 0.056) 0%,
    rgba(37, 67, 136, 0.1) 42.16%,
    rgba(107, 180, 221, 0) 92.38%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 40px;
  line-height: 45px;
  font-weight: 700;
  color: #1f2643;
  margin-bottom: 24px;
`;

const SubDurationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SubDurationBtn = styled.button`
  font-size: 15px;
  line-height: 17.66px;
  color: #1f2643;
  font-weight: 400;
  margin-left: 10px;
  margin-right: 10px;
`;

const SmallForwardSlash = styled.div`
  width: 3.52px;
  height: 28.51px;
  background-color: #ced1d9;
  border-radius: 100px;
  transform: rotate(20deg);
  /* margin: 0 20px; */
`;

const month = [
  {
    value: "8€",
  },
  {
    value: "14€",
  },
  {
    value: "20€",
  },
];

const year = [
  {
    value: "96€",
  },
  {
    value: "168€",
  },
  {
    value: "240€",
  },
];

function App() {
  return (
    <>
      <PageHeaderComponent>
        <Title>Base plan</Title>
        <SubDurationContainer>
          <SubDurationBtn>Monthly</SubDurationBtn>
          <SmallForwardSlash />
          <SubDurationBtn>Yearly</SubDurationBtn>
        </SubDurationContainer>
      </PageHeaderComponent>

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

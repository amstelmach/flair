import styled from "styled-components";
import Pricing from "./components/Pricing";

const PricingContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

function App() {
  return (
    <PricingContainer>
      <Pricing />
    </PricingContainer>
  );
}

export default App;

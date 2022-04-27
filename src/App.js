import styled from 'styled-components';
import Pricing from './components/Pricing';
import { useEffect, useState } from 'react';

const PricingContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    360deg,
    rgba(255, 255, 255, 0.056) 0%,
    rgba(37, 67, 136, 0.1) 42.16%,
    rgba(107, 180, 221, 0) 92.38%
  );
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin: 0 auto 100px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    height: min-content;
    margin-left: 10px;
    margin-right: 10px;
  }
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
  border: none;
  background-color: transparent;
  font-family: 'Poppins';
  cursor: pointer;
`;

const SmallForwardSlash = styled.div`
  width: 3.52px;
  height: 28.51px;
  background-color: #ced1d9;
  border-radius: 100px;
  transform: rotate(20deg);
`;

const month = [
  {
    value: '8€',
  },
  {
    value: '14€',
  },
  {
    value: '20€',
  },
  {
    duration: 'per month',
  },
];

const year = [
  {
    value: '96€',
  },
  {
    value: '168€',
  },
  {
    value: '240€',
  },
  {
    duration: 'per year',
  },
];

function App() {
  const [monthly, setMonthly] = useState('monthly');
  const [data, setData] = useState(monthly === 'monthly' ? month : year);

  const handleClick = (e) => {
    setMonthly(e.target.value);
    // console.log(e.target);
  };

  useEffect(() => {
    setData(monthly === 'monthly' ? month : year);
  }, [monthly]);

  return (
    <>
      <PageHeaderComponent>
        <Title>Base plan</Title>
        <SubDurationContainer>
          <SubDurationBtn value='monthly' onClick={handleClick}>
            Monthly
          </SubDurationBtn>
          <SmallForwardSlash />
          <SubDurationBtn value='yearly' onClick={handleClick}>
            Yearly
          </SubDurationBtn>
        </SubDurationContainer>
      </PageHeaderComponent>

      <PricingContainer>
        <Pricing
          headerText='Essential'
          descriptionText='Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s, and show meaningful appreciation when it matters most using High Fives.'
          value={data[0].value}
          duration={data[3].duration}
          text='per employee'
          buttonText='Select Plan'
          list={['Core HR', 'Payroll', 'Recruiting', 'Employee HUB']}
          info={[]}
        />
        <Pricing
          headerText='Growth'
          descriptionText='Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s, and show meaningful appreciation when it matters most using High Fives.'
          value={data[1].value}
          duration={data[3].duration}
          text='per employee'
          buttonText='Select Plan'
          info={[
            'Core HR',
            'Payroll',
            'Recruiting',
            'Employee HUB',
            'Performance management',
            'Shift planning',
          ]}
          list={[]}
        />
        <Pricing
          headerText='Performance'
          descriptionText='Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s, and show meaningful appreciation when it matters most using High Fives.'
          value={data[2].value}
          duration={data[3].duration}
          text='per employee'
          buttonText='Select Plan'
          info={[
            'Core HR',
            'Payroll',
            'Recruiting',
            'Employee HUB',
            'Performance management',
            'Shift planning',
            'Componsation management',
          ]}
          list={[]}
        />
      </PricingContainer>
    </>
  );
}

export default App;


import styled from "styled-components";


const Pricing = () => {
    return (
        <PricingComponent>

        </PricingComponent>
    )
};


const PricingComponent = styled.div`
width: 389px;
min-height: 690px;
border-radius: 5px;
height: max-content;
background-color: #ffffff;
display: flex;
flex-direction: column;
box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
transition: 0.3s ease-in-out;
&:hover {
    box-shadow: 0px 40px 50px rgba(0, 0, 0, 0.2);
}
`;


export default Pricing;
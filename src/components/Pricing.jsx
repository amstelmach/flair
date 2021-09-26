
import styled from "styled-components";



const Pricing = ({headerText, descriptionText, value, duration, text, buttonText, list, img}) => {
    
    return (
        <PricingComponent>
            <Header>{headerText}</Header>
            <Description>{descriptionText}</Description>
            <PriceContainer>
                <Value>{value}</Value>
                <ForwardSlash></ForwardSlash>
                <Info>
                    <Duration>{duration}</Duration>
                    <Text>{text}</Text>
                </Info>
            </PriceContainer>
            <Line></Line>
            <ListContainerChecked>
                {list.map((listItem, index) => {
                    return (
                        
                        <ListItemCheckedElement key={index}>
                            <img src={"images/Oval.jpg"} style={{marginRight: '12px'}} />
                            {listItem}
                            
                        </ListItemCheckedElement>
                    )
                
                }
                )}
            </ListContainerChecked>
            
            <Button>{buttonText}</Button>

        </PricingComponent>
    )
};


const PricingComponent = styled.div`
width: 389px;
min-height: 650px;
border-radius: 5px;
height: max-content;
background-color: #ffffff;
display: flex;
flex-direction: column;
box-shadow: 0px 3px 15px rgba(199, 164, 164, 0.2);
transition: 0.3s ease-in-out;
&:hover {
    box-shadow: 0px 40px 50px rgba(0, 0, 0, 0.2);
}
`;


const Header = styled.header`
font-size: 26px;
line-height: 45px;
font-weight: 600;
margin-bottom: 10px;
padding-top: 20px;
padding-left: 42px;
`;

const Description = styled.div`
width: 300px;
height: 150px;
margin-bottom: 15px;
font-size: 15px;
line-height: 28px;
color: #7a7e92;
padding-left: 42px;

`;

const PriceContainer = styled.div`
display: flex;
align-items: center;
padding-bottom: 40px;
`;

const Value = styled.span`
font-size: 45px;
line-height: 54.5px;
font-weight: 700;
color: #1f2643;
padding-left: 42px;
`;

const ForwardSlash = styled.div`
width: 6px;
height: 48.59px;
background-color: #f2f3f8;
border-radius: 100px;
transform: rotate(20deg);
margin: 0 20px;

`;

const Info = styled.div`
display: flex;
flex-direction: column;
font-size: 15px;
line-height: 20px;
color: #7a7e92;
`;

const Duration = styled.span`
font-size: 15px;
color: #7A7E92;
font-weight: 400;
`;

const Text = styled.span`
font-size: 15px;
color: #7A7E92;
font-weight: 400;
`;

const Line = styled.div`
height: 1px;
width: 298px;
background-color: #CFD1E3BF;
align-self: center;
`;

const ListContainerChecked = styled.div`
display: flex;
flex-direction: column;
padding-left: 42px;
padding-top: 35px;
padding-bottom: 50px;
padding-right: 42px;
align-content: center;
`;

const ListItemCheckedElement = styled.span`
font-size: 15px;
display: flex;
align-items: center;
margin-top: 12px;
`;


const Button = styled.div`
width: 297.68px;
height: 43.56px;
background-color: #1388c9;
border-radius: 97px;
color: #ffffff;
font-size: 16px;
line-height: 43.56px;
display: flex;
justify-content: center;
font-weight: 500;
margin-left: 42px;
margin-bottom: 44.44px;
cursor: pointer;
`;



export default Pricing;
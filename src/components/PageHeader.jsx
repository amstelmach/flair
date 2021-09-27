import styled from "styled-components";


const PageHeader = ({pageTitle}) => {
    
    return (
        <PageHeaderComponent>
            <Title>{pageTitle}</Title>
            <SubDurationContainer>
                <SubDuration>Monthly</SubDuration>
                <SmallForwardSlash/>
                <SubDuration>Yearly</SubDuration>
            </SubDurationContainer>
        </PageHeaderComponent>
    )
};


export default PageHeader;


const PageHeaderComponent = styled.div`
width: 100%;
height: 200px;
background-color: #E5E5E5;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Title = styled.div`
font-size: 40px;
line-height: 45px;
font-weight: 700;
color:#1F2643;
margin-bottom: 24px;
`;

const SubDurationContainer = styled.div`
display: flex;
align-items: center;
`;

const SubDuration = styled.span`
font-size: 15px;
line-height: 17.66px;
color:#1F2643;
font-weight: 400;
margin-left: 10px;
margin-right: 10px;
`;

const SmallForwardSlash = styled.div`
width: 3.52px;
height: 28.51px;
background-color: #EEF0F6;
border-radius: 100px;
transform: rotate(20deg);
/* margin: 0 20px; */
`;

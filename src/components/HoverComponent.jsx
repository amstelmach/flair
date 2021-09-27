

const TriggerComponent = () => {
    return (
        <div style={{width: '410px', height: '297px', backgroundColor: '#203C86', borderRadius: '5px', color: '#ffffff', display: 'flex', flexDirection: 'column' }}>
            <header style={{fontSize: '20px', lineHeight: '45px', fontWeight: '600', marginTop: '10px', marginLeft: '29px' }}>Core HR</header>
            <main style={{fontSize: '15px', lineHeight: '27.2px', fontWeight: '400', opacity: '0.7', marginLeft: '29px', marginRight: '70px'}}>Minimize HR headaches so you can get back to business.</main>
            <ol style={{fontSize: '15px', color: '#ffffff', fontWeight: '400', listStyleImage: 'url(./images/OvalBlue.jpg)', marginLeft: '16px' , verticalAlign: 'text-top'}}>
                <li style={{ alignContent: 'center', paddingLeft: '10px'}}>Hiring and Onboarding</li>
                <li style={{paddingLeft: '10px'}}>Employee database</li>
                <li style={{paddingLeft: '10px'}}>Document management</li>
                <li style={{paddingLeft: '10px'}}>Reporting</li>
            </ol>

            <span style={{textTransform: 'uppercase', fontSize: '15px', lineHeight: '25px', fontWeight: '600', color: '#95BCF2', marginLeft: '29px', marginBottom: '80px'}}>all features</span>
        </div>
    )
}

export default TriggerComponent;

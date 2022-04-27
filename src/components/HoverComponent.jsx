
const TriggerComponent = () => {
    return (
        <div style={{width: '410px', minHeight: '297px', backgroundColor: '#203C86', borderRadius: '5px', color: '#ffffff', display: 'flex', flexDirection: 'column' }}>
            <header style={{fontSize: '20px', lineHeight: '45px', fontWeight: '600', marginTop: '10px', marginLeft: '29px' }}>Core HR</header>
            <main style={{fontSize: '15px', lineHeight: '27.2px', fontWeight: '400', opacity: '0.7', marginLeft: '29px', marginRight: '70px'}}>Minimize HR headaches so you can get back to business.</main>
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '29px', marginTop: '15px', marginBottom: '15px', justifyContent: 'center'}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '9px'}}>
                    <img alt='icon' style={{width: '24px', height: '25px', marginRight: '12px'}}src="../images/OvalBlue.svg"></img><span>Hiring and Onboarding</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '9px'}}>
                    <img alt='icon' style={{width: '24px', height: '25px', marginRight: '12px'}}src="../images/OvalBlue.svg"></img><span>Employee database</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '9px'}}>
                    <img alt='icon' style={{width: '24px', height: '25px', marginRight: '12px'}}src="../images/OvalBlue.svg"></img><span>Document management</span>
                </div>
                    
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img alt='icon' style={{width: '24px', height: '25px', marginRight: '12px'}}src="../images/OvalBlue.svg"></img><span>Reporting</span>
                </div>
            </div>
            <span style={{textTransform: 'uppercase', fontSize: '15px', lineHeight: '25px', fontWeight: '600', color: '#95BCF2', marginLeft: '29px', marginBottom: '15px'}}>all features</span>
        </div>
    )
}

export default TriggerComponent;

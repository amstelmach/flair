import info from '../images/Info.jpg';

const TriggerComponent = () => {
    return (
        <div >
            <img alt='additional info' style={{cursor: 'pointer'}} src={info} />
        </div>
    )
}

export default TriggerComponent;
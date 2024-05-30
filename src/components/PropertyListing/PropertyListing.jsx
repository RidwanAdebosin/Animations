import PropTypes from 'prop-types';
import './PropertyListing.css'
const HabibatHouse = "'../../../public/images/HabibatHouse.jpg"; 
const ClearencePlace = '../../../public/images/Clearance Place.jpg';
const HoltHart = '../../../public/images/Holt and Hart.jpg';
const CooperHouse = '../../../public/images/Cooper Place.jpg';
const PaddingtonPlace= '../../../public/images/PaddingtonPlace.jpg'
const LisgarHouse = '../../../public/images/Lisgar House.jpg';


const Property = ({image, imageName, imageAddress }) => {
    return (
        <section className="image-container">
            <span className="tag">Commercial</span>
            <div className="image">
                <img src={image} alt={imageName} />
                <p className="image-name">{imageName}</p>
                <p className="image-address">{imageAddress}</p>
            </div>
        </section>
    );
}

// The PropertyListing component that uses the Property component
const PropertyListing = () => {
    return (
        <section className='images-wrapper'>
            <Property image={HabibatHouse} alt='Habibat House' imageName='HABIBAT HOUSE' imageAddress= '64 Kippax St, Surry Hills NSW 2010'/>
            <Property image={ClearencePlace} alt='Clearance Place' imageName='CLARENCE PLACE' imageAddress= '222 Clarence St, Sydney NSW 2000'/>
            <Property image={HoltHart} alt='Holt & Hart' imageName='HOLT & HART' imageAddress= '50 Holt St, Surry Hills NSW 2010'/>
            <Property image={CooperHouse} alt='Cooper House'imageName='80 COOPER' imageAddress= '80 Cooper St, Surry Hills NSW 2010' />
            <Property image={PaddingtonPlace} alt='Paddington Place' imageName='PADDINGTON PLACE' imageAddress= '188 Oxford St, Paddington NSW 2021'/>
            <Property image={LisgarHouse} alt='Lisgar House' imageName='LISGAR HOUSE' imageAddress= '32 Carrington Street, Sydney NSW 2000'/>
        </section>
    );
};

Property.propTypes= {
    propertytype: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
    imageName: PropTypes.node.isRequired,
    imageAddress: PropTypes.node.isRequired,
};

export default PropertyListing;

import PropTypes from 'prop-types';
import './PropertyListing.css'


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
            <Property image={'https://www.aprilgroup.com.au/media/d4ldjscb/feature-habitat-house-2.jpg'} alt='Habibat House' imageName='HABIBAT HOUSE' imageAddress= '64 Kippax St, Surry Hills NSW 2010'/>
            <Property image={'https://www.aprilgroup.com.au/media/q4sngvjh/clarence-og.jpg'} alt='Clearance Place' imageName='CLARENCE PLACE' imageAddress= '222 Clarence St, Sydney NSW 2000'/>
            <Property image= {'https://www.aprilgroup.com.au/media/mwmhk44s/feature-holt-and-hart.jpg'} alt='Holt & Hart' imageName='HOLT & HART' imageAddress= '50 Holt St, Surry Hills NSW 2010'/>
            <Property image={'https://www.aprilgroup.com.au/media/iltlvral/feature-80cooper.jpg'} alt='Cooper House'imageName='80 COOPER' imageAddress= '80 Cooper St, Surry Hills NSW 2010' />
            <Property image={'https://www.aprilgroup.com.au/media/rivlyxsu/feature-paddington-place-2.jpg'} alt='Paddington Place' imageName='PADDINGTON PLACE' imageAddress= '188 Oxford St, Paddington NSW 2021'/>
            <Property image={'https://www.aprilgroup.com.au/media/f52pgg23/lisgar-house_website-slideshow.png'} alt='Lisgar House' imageName='LISGAR HOUSE' imageAddress= '32 Carrington Street, Sydney NSW 2000'/>
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

import PropTypes from 'prop-types';
import './UsersReview.css';

const UserReview= ({userComment, userName}) => {
    return (
        <div className='user-review'>
            <span>&quot;</span>
        <p>{userComment}</p>
        <p className='user-name'>{userName}</p>
        <hr/>
        </div>
    )
};

const UsersReviews = () => {
    return(
        <section>
             <hr/>
            <h1>WHAT THEY SAY</h1>
            <UserReview userComment='April provides us the opportunity to invest into smart and unique, value add property deals.' userName="BEN RITCHIE, MPA"/>
            <UserReview userComment='Having worked with David since 1998 and April since its inception in 2009 we are proud of our relationship, the assets they have created and the resulting benefits to my investment portfolio have been life changing.' userName='ALAN FROST, AFM DEVELOPMENTS'/>
        </section>
    )
};

UserReview.propTypes= {
    userComment: PropTypes.node.isRequired,
    userName: PropTypes.node.isRequired,
};



export default UsersReviews;

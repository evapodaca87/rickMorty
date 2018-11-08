import React from 'react';

const Card = ({ cards }) => {
    return cards.map((card) => {
        return (
            <figure className='snip1579'>
                <img className='boxes' src={card.image} alt='profile-sample2' />
                <figcaption>
                    <h1>{card.name}</h1>
                    <br />
                    {/* <div className='split'> */}
                        {/* <div className="left"> */}
                            {card.species}
                            <div>{card.type}</div>
                            <div>{card.status}</div>
                        {/* </div> */}
                        {/* <div className="right"> */}
                            {card.location.name}
                            
                        {/* </div> */}
                    {/* </div> */}
                    <div>{card.gender}</div>
                    <br />
                    <div className="episode">Last Seen</div>
                    <div className='episode'>last episode</div>
                    <br />
                </figcaption>
            </figure>
        );
    });
};

export default Card;

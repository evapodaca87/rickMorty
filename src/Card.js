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
                    <div className='type'>{card.type}</div>
                    <div className='status'>
                        {card.status}
                        <br />
                        {card.gender}
                    </div>
                    {/* </div> */}
                    {/* <div className="right"> */}
                    {card.location.name}

                    {/* </div> */}
                    {/* </div> */}
                    <br />
                    <br />
                    <hr />
                    <div className='episode'>
                        Last Seen:<br />
                        {card.location.name}
                    </div>
                </figcaption>
            </figure>
        );
    });
};

export default Card;

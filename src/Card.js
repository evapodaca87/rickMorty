import React from 'react';

const Card = ({ cards }) => {
    return cards.map((card) => {
        return (
            <figure className='snip1579'>
                <img
                    className='boxes'
                    src='https://rickandmortyapi.com/api/character/avatar/150.jpeg'
                    alt='profile-sample2'
                />
                <figcaption>
                    <h1>{card.name}</h1>
                    <br />
                    <div className='split'>
                        <div>
                            Species
                            <div>Type</div>
                            <div>Alive?</div>
                        </div>
                        <div>
                            Planet
                            <div>Origin</div>
                            <div>Last Seen</div>
                        </div>
                    </div>
                    <div>Gender</div>
                    <br />
                    <div className='episode'>Episode</div>
                    <br />
                </figcaption>
            </figure>
        );
    });
};

export default Card;

import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {
    return (
        <div>
            {cards.map((card) => {
                return <Card />;
            })}
        </div>
    );
};

export default CardList;

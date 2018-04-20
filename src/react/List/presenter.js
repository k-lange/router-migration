import React from 'react';
import { map } from 'lodash/fp';
import './style.css';

const renderShow = show => (
    <li key={show.id}>
        <a href={`/show/${show.id}`}>
            <img
                src={show.image.original}
                alt={show.name}
                className="list-image"
            />
        </a>
    </li>
);

export default function List({ shows }) {
    return <ul className="list-container">{map(renderShow, shows)}</ul>;
}

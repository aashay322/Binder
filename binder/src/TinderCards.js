import React, {useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';

function TinderCards(){
    //People array 
    const [people, setPeople] = useState([]);
useEffect(() => {

    //This is where we use the info in the database 
    //Everytime database is updated, the "person" is added to the people array
    database.collection('people').onSnapshot(snapshot => (
        setPeople(snapshot.docs.map(doc => doc.data()))
    ))
}, [people]);

    return(
        <div>
            <div classname ="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard
                    className ="swipe"
                    key = {person.name}
                    preventSwipe={['up', 'down']}
                >
                   <div 
                        style={{backgroundImage: `url(${person.url})`}}
                        className ="card"
                    >
                        <h1>{person.name}</h1>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards;
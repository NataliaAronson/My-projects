import React from 'react';
import './App.css';
import Card from './components/Card';
import Matroskin from './components/Catpictures/Matroskin.jpg';
import Ucheniy from './components/Catpictures/Ucheniy.jpg';
import Puss from './components/Catpictures/Puss.jpg';
import Leopold from './components/Catpictures/Leopold.jpg';
import  Tom from './components/Catpictures/Tom.jpg';
import  Cheshire from './components/Catpictures/ Cheshire.jpg';

class CardList extends React.Component {
  render() {
      return (
        <React.Fragment>

        <Card
        src={Matroskin} 
        name="Matroskin "
        description="A can who can talk , business savvy and responsible for Dyada Fedor and Sharik"
        location="Prostokvashino"
         />
         <Card
        src={Ucheniy} 
        name="Ucheniy"
        description="A cat who is the best in IT and able to do magic"
        location=" Itgirlschool"
         />
         <Card
        src={Puss}
        name="Puss "
        description=" Shek's  best friend "
        location="Shek's Neverland"
         />
         <Card
        src={Leopold}
        name="Leopold"
        description=" Podliy Trus. Not really.Believes friendship rules. A peacemaker."
        location="Souzmultfilm"
         />
         <Card
        src={Tom}
        name=" Tom"
        description="A can who gets in trouble almost all the time because of his neighbour Jerry"
        location=" Tom and Jerry cartoon"
         />
         <Card
        src={Cheshire}
        name="Cheshire"
        description="A can who knows life philosophy and he is Alice's best friend"
        location=" Alice in Wodrerland"
         />

        </React.Fragment>


 );
 }
}
export default CardList;



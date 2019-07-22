import React from 'react';
import Card from './Card'

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }

        let suits = ['H', 'S', 'C', 'D'];
        let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];

        suits.forEach((suit) => {
            values.forEach((value) => {
                this.state.cards.push({suit, value, used: false, degree: Math.random*360});
            });
        });
        // this.state = {
        //     cards: [
        //         {suit:'H', value:'A', used:false, degree:0.0},
        //         {suit:'H', value:'1', used:false, degree:0.0},
        //         {suit:'H', value:'2', used:false, degree:0.0},
        //         {suit:'H', value:'3', used:false, degree:0.0},
        //         {suit:'H', value:'4', used:false, degree:0.0},
        //         {suit:'H', value:'5', used:false, degree:0.0},
        //         {suit:'H', value:'6', used:false, degree:0.0},
        //         {suit:'H', value:'7', used:false, degree:0.0},
        //         {suit:'H', value:'8', used:false, degree:0.0},
        //         {suit:'H', value:'9', used:false, degree:0.0},
        //         {suit:'H', value:'T', used:false, degree:0.0},
        //         {suit:'H', value:'J', used:false, degree:0.0},
        //         {suit:'H', value:'Q', used:false, degree:0.0},
        //         {suit:'H', value:'K', used:false, degree:0.0},
        //         {suit:'H', value:'A', used:false, degree:0.0},
        //         {suit:'S', value:'1', used:false, degree:0.0},
        //         {suit:'S', value:'2', used:false, degree:0.0},
        //         {suit:'S', value:'3', used:false, degree:0.0},
        //         {suit:'S', value:'4', used:false, degree:0.0},
        //         {suit:'S', value:'5', used:false, degree:0.0},
        //         {suit:'S', value:'6', used:false, degree:0.0},
        //         {suit:'S', value:'7', used:false, degree:0.0},
        //         {suit:'S', value:'8', used:false, degree:0.0},
        //         {suit:'S', value:'9', used:false, degree:0.0},
        //         {suit:'S', value:'T', used:false, degree:0.0},
        //         {suit:'S', value:'J', used:false, degree:0.0},
        //         {suit:'S', value:'Q', used:false, degree:0.0},
        //         {suit:'S', value:'K', used:false, degree:0.0},
        //         {suit:'C', value:'A', used:false, degree:0.0},
        //         {suit:'C', value:'1', used:false, degree:0.0},
        //         {suit:'C', value:'2', used:false, degree:0.0},
        //         {suit:'C', value:'3', used:false, degree:0.0},
        //         {suit:'C', value:'4', used:false, degree:0.0},
        //         {suit:'C', value:'5', used:false, degree:0.0},
        //         {suit:'C', value:'6', used:false, degree:0.0},
        //         {suit:'C', value:'7', used:false, degree:0.0},
        //         {suit:'C', value:'8', used:false, degree:0.0},
        //         {suit:'C', value:'9', used:false, degree:0.0},
        //         {suit:'C', value:'T', used:false, degree:0.0},
        //         {suit:'C', value:'J', used:false, degree:0.0},
        //         {suit:'C', value:'Q', used:false, degree:0.0},
        //         {suit:'C', value:'K', used:false, degree:0.0},
        //         {suit:'D', value:'A', used:false, degree:0.0},
        //         {suit:'D', value:'1', used:false, degree:0.0},
        //         {suit:'D', value:'2', used:false, degree:0.0},
        //         {suit:'D', value:'3', used:false, degree:0.0},
        //         {suit:'D', value:'4', used:false, degree:0.0},
        //         {suit:'D', value:'5', used:false, degree:0.0},
        //         {suit:'D', value:'6', used:false, degree:0.0},
        //         {suit:'D', value:'7', used:false, degree:0.0},
        //         {suit:'D', value:'8', used:false, degree:0.0},
        //         {suit:'D', value:'9', used:false, degree:0.0},
        //         {suit:'D', value:'T', used:false, degree:0.0},
        //         {suit:'D', value:'J', used:false, degree:0.0},
        //         {suit:'D', value:'Q', used:false, degree:0.0},
        //         {suit:'D', value:'K', used:false, degree:0.0}
        //     ]
        // }
    }

    render() {
        return(
            this.state.cards.map((card) => (
                <Card suit={card.suit} value={card.value} used={card.value} degree={card.degree} />
            ))
        );
    }
}

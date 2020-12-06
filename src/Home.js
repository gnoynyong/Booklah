import React from 'react';
import Card from './Card';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="card-section">
                <Card
                    src="https://www.utm.my/studentaffairs/files/2016/03/10633163_1277064402309187_4333930804711932635_o.jpg"
                    location="UTM Sport Hall"
                    description="10.00am-5.00pm"
                    price="RM 5.00 PER HOUR"
                />
                <Card 
                    src="https://sc02.alicdn.com/kf/HTB107TfX5nrK1RjSsziq6xptpXaM.jpg"
                    location="UTM Badminton Court"
                    description="10.00am-10.00pm"
                    price="RM6.00 PER HOUR"
                />
                <Card 
                    src="https://images.squarespace-cdn.com/content/v1/5cc38ed74d546e12255c5add/1556345147692-FNVZEQNBW3DDW8X3QP7Z/ke17ZwdGBToddI8pDm48kJRqFJ19D4P4EwsC9z3fiewUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dkV64dCjSK7Zaaf7dwPYPO_gHf_vjqrS5WJoq1nmwotrP7cJNZlDXbgJNE9ef52e8w/tennis-court-hd-wallpapers-75094-4102224.png?format=2500w"
                    location="UTM Tennis Court"
                    description="10.00am-6.00pm"
                    price="RM8.00 PER HOUR"
                />
            </div>
            
        </div>
    )
}

export default Home

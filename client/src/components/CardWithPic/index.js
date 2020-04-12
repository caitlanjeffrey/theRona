import React from 'react'
import './style.css';

function CardWithPic() {

    return (
        <div className="cardwithpic">
            <div className="card-deck">
                <div className="card">
                    <img src="https://thumbs-prod.si-cdn.com/mGzVOiub9nq8OQFc0Q_q90D1JWw=/fit-in/1600x0/https://public-media.si-cdn.com/filer/79/4a/794a7e74-8c99-4fde-abcd-a303bc302ba1/sars-cov-19.jpg" className="card-img-top" alt="CoV-2 Virus" />
                    <div className="card-body">
                        <h5 className="card-title">What is Coronavirus?</h5>
                        <p className="card-text">A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), is not the same as the coronaviruses that commonly circulate among humans and cause mild illness, like the common cold.</p>
                        <p className="card-text">On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China.</p>
                        <p className="card-text"><small className="text-muted">From the Centers for Disease Control and Prevention</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://static01.nyt.com/newsgraphics/2020/04/08/weekly-jobless-claims/475b24dd8caa656b935f83a4a96ee18ca15755eb/jobless-claims-1050.png" className="card-img-top" alt="Jobs Map" />
                    <div className="card-body">
                        <h5 className="card-title">Jobless Rate Spikes</h5>
                        <p className="card-text">The harsh economic toll of the social distancing measures put in place to curb the deadly spread of the pandemic was underscored Thursday when the Labor Department reported that another 6.6 million people had filed for unemployment benefits last week.</p>
                        <p className="card-text"> That brought the number of Americans who had lost their jobs over the past three weeks to more than 16 million, which is more job losses than the most recent recession produced over two years. The dire figures suggested that Washington’s recent $2 trillion relief package was not working quickly enough to halt the economic devastation and the hemorrhaging of jobs in nearly every type of industry.</p>
                        <p className="card-text"><small className="text-muted">From The New York Times</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://static01.nyt.com/images/2020/04/09/us/09virus-briefing-calif/merlin_171075732_8f0c289b-99bd-45c0-a7f3-d004e4c388dd-superJumbo.jpg?quality=90&auto=webp" className="card-img-top" alt="CA Govenor" />
                    <div className="card-body">
                        <h5 className="card-title">In California, there’s concern over the governor’s decision to ship ventilators to other states.</h5>
                        <p className="card-text">California’s decision to ship hundreds of ventilators to other states this week has been met with alarm by some local officials, who expressed concern about a shortage.</p>
                        <p className="card-text">Readying the supplies for heavily-hit states like New York and New Jersey, workers packed the equipment in cardboard boxes and wrote messages of support in black marker. “Prayers from the West Coast,” said one message.</p>
                        <p className="card-text"><small className="text-muted">From The New York Times</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardWithPic;

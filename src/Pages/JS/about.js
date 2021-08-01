import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../CSS/about.css';

export default function About() {
    return (
        <div>
            <div id="about-page">
                <div className="about-text">
                        <p>
                            Ko Rebecca tōku ingoa. He kaihoahoa ahau no Te Whanganui-a-Tara. <br/>
                            My name is Rebecca. I'm a Designer from Wellington.
                        </p>
                        <p> I'm a recent Interaction Design grad, and a former Visual Merchandiser with a bunch of management experience.</p> 
                        <p>I'm analytical, inquisitive, logical and whimsical. I love UX Design and research because I love gathering and considering tons of information to help solve problems.</p>
                        <p>In my retail visual merchandising career, I would approach problems in store displays and layouts by observing customer interactions with the displays, making changes based on what I saw. Afterwards, I loved checking the stats and listening to staff feedback to make small improvements until we got it right. <br/>
                            When I learned UX Design was in 2017, I was inspired to go and study ASAP, so I could combine the problem-solving approach I'd naturally come to with my love of technology.
                        </p>
                        <p>
                            In my spare time I love knitting and crocheting, learning Te Reo, learning all about freshwater fish, and trying to garden.
                        </p>            
                        <p>Check out my <Link to="#workworkwork" className="link">work</Link> and contact me at <a href="mailto:bexkingdesign@gmail.com" className="link">bexkingdesign@gmail.com</a></p>
                </div>
            </div>    
        </div>
    )
}

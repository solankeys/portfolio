import React from 'react';
import Header from '../Components/Header';
import './Homepage.css';

import {Intro} from '../Components/Intro';
import { About } from '../Components/About';
import { Timeline } from '../Components/Timeline';
import { Offerings } from '../Components/Offerings';

function Homepage() {
    return (
        <div className="home-page">
            <header>
                <Header />
            </header>
            <section>
            <   Intro></Intro>
            </section>
            <section>
                <About />
            </section>
            <section className="timeline">
                <Timeline />
            </section>
            <section >
                <Offerings />
            </section>
        </div>
    )
}

export default Homepage;

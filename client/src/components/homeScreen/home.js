import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/home/home.css';
import SideBar from './sidebar';


function Home() {

    return (
        <div className="home-page">
            <div className="background-image"></div>
            <header>
                <SideBar />
            </header>
            <main>
                <div>
                    <Link to="/newpatient">
                        new patient
                    </Link>
                    <p></p>
                    <Link to="oldpatient">
                        old patient
                    </Link>
                    <Link to="/comingpatient">
                        coming patient
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Home;

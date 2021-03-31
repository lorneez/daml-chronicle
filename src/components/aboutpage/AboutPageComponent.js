import React, { useState } from "react"
import axios from "axios";

function AboutPageComponent() {

    const options = {
        headers: {
            'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTY4MDMwMTksImlhdCI6MTYxNjc4MTQxOSwibmJmIjoxNjE2NzgxNDE5LCJpZGVudGl0eSI6MX0.YCjBkb93Y4koFoYJa0nZI88PuL2X9Pmsv_-HssJ6dxM',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
        }
    };

    axios.get("https://chronicle-daml.herokuapp.com/allcontentfifty/1", {}, options)
        .then(response => {
            console.log(JSON.stringify(response.data));
        })
        .catch(error => {
            console.log(error);
        });
    // let config = {
    //     method: 'get',
    //     url: 'allcontentfifty/1',
    //     headers: {
    //         'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTY4MDMwMTksImlhdCI6MTYxNjc4MTQxOSwibmJmIjoxNjE2NzgxNDE5LCJpZGVudGl0eSI6MX0.YCjBkb93Y4koFoYJa0nZI88PuL2X9Pmsv_-HssJ6dxM',
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
    //         'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'

    //     }
    // };


    // axios(config)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });




    return (
        <div>
            <h1 className="about-title" style={{ fontSize: 40 }}>About</h1>
            <h2 className="what-we-do">What We Do</h2>
            <p>

                Duke University’s student newspaper, The Chronicle, has kept an archive of all it’s editions dating back to 1900, with those after 1995 being digitized. Leaders of this project aim to digitize all editions of The Chronicle via the image to text technology Optical Character Recognition (OCR), in order to be able to run semantic analysis on all of the archives using BERT, a natural language processing tool. Leaders of the project hope to develop a front facing app that allows students to search the archive by topic and therefore study the how the opinions of the student body has evolved over the years. There is promise in applying this project to other universities with large newspaper archives. Additionally, this project also aims to provide Chronicle staffers and the Duke community analysis and visualizations of how trends towards various topics in public discourse have evolved over the past 100 years of university journalism through correlating NLP techniques with readership and demographic data.

            </p>
            <h2 className="by-the-numbers">By The Numbers</h2>
            <p>
                34
            </p>


        </div>
    )

}

export default AboutPageComponent
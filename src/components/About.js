import React from 'react';

const About = () => (
    <div id="body">
    <div className="article">
        <div className="about_title">
            <h2>Meet the team</h2>
        </div>
        <div className="row">
            <div className="column">
                <div className="card">
                    <img className="about_pic" src={require('./../styles/Pictures/suli.jpeg')} alt="Suli" />
                    <div className="container">
                        <h2 className="card_name">Suli Huang</h2>
                        <p className="article_desc">Web Developer</p>
                        <p className="article">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur placerat euismod. Pellentesque sagittis nisl non ex ultricies egestas. Pellentesque tincidunt nisi sit amet rutrum consectetur. Proin consectetur ante
                            eget nunc rutrum hendrerit. Cras quis ligula in arcu consequat malesuada ac in velit. Phasellus porttitor lorem vel nulla laoreet bibendum. Nullam tincidunt magna eget pellentesque pellentesque. Sed tempus felis id feugiat
                            mattis. Etiam ante tellus, efficitur ornare ante vitae, ultricies efficitur orci. In ultricies odio at mauris congue imperdiet.</p>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img className="about_pic" src={require('./../styles/Pictures/ben.jpeg')} alt="Ben" />
                    <div className="container">
                        <h2 className="card_name">Ben Chafik</h2>
                        <p className="article_desc">Web Developer</p>
                        <p className="article">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur placerat euismod. Pellentesque sagittis nisl non ex ultricies egestas. Pellentesque tincidunt nisi sit amet rutrum consectetur. Proin consectetur ante
                            eget nunc rutrum hendrerit. Cras quis ligula in arcu consequat malesuada ac in velit. Phasellus porttitor lorem vel nulla laoreet bibendum. Nullam tincidunt magna eget pellentesque pellentesque. Sed tempus felis id feugiat
                            mattis. Etiam ante tellus, efficitur ornare ante vitae, ultricies efficitur orci. In ultricies odio at mauris congue imperdiet.</p>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                <img className="about_pic" src={require('./../styles/Pictures/yen.jpeg')} alt="Yen" />
                    <div className="container">
                        <h2 className="card_name">Yen Le</h2>
                        <p className="article_desc">Web Developer</p>
                        <p className="article">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur placerat euismod. Pellentesque sagittis nisl non ex ultricies egestas. Pellentesque tincidunt nisi sit amet rutrum consectetur. Proin consectetur ante
                            eget nunc rutrum hendrerit. Cras quis ligula in arcu consequat malesuada ac in velit. Phasellus porttitor lorem vel nulla laoreet bibendum. Nullam tincidunt magna eget pellentesque pellentesque. Sed tempus felis id feugiat
                            mattis. Etiam ante tellus, efficitur ornare ante vitae, ultricies efficitur orci. In ultricies odio at mauris congue imperdiet.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
);
export default About;
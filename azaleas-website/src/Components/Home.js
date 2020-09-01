import React from 'react';
import Text from './Text';

const Home = () => {
    return (
        <div className="cont">
        <div className="home">HOME</div>
        <Text startText='Hi I am Azelea and I sell dogs' name='text' edit={true}/>
        </div>
    )
}  

export default Home;
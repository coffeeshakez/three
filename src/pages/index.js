import React, { Component } from 'react';
import '../styles/main.css';
import Layout from '../components/layout/layout';
import Card from '../components/card/Card';



class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <Layout>
                <Card
                    url="/game"
                    linkState={{id: "grid-shot"}}
                    title="GridShot"
                    description="improve your aiming skills"
                    imageUrl="./sprekkjaglass.jpg"
                />
            </Layout>
         );
    }
}
 
export default Dashboard;
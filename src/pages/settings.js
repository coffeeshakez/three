import React, { Component } from 'react';
import Header from '../components/header/header';
import Layout from '../components/layout/layout';
import PageSection from '../components/pageSection/PageSection';
import Slider from '../components/forms/slider/Slider';

class Settings extends Component {
    constructor(props){
        super(props);
        this.state = { 
            sensitivity: undefined,
            localStorage: undefined,   
         }

         this.handleSensitivityChange = this.handleSensitivityChange.bind(this);
    }

    componentDidMount(){
        this.setState({localStorage: window.localStorage, sensitivity: window.localStorage.getItem("sensitivity") * 1000});
    }

    handleSensitivityChange(e){
        console.log(e.target.value);

        this.state.localStorage.setItem("sensitivity", e.target.value * 0.001);
        this.setState({sensitivity: this.state.localStorage.getItem("sensitivity") * 1000});
    }
    render() { 
        return ( 
            <Layout>
                <PageSection title="Settings">
                    <h2>Sensitivity</h2>
                    <Slider onChange={this.handleSensitivityChange} value={this.state.sensitivity}></Slider>
                </PageSection>
              
            </Layout>
         );
    }
}
 
export default Settings;
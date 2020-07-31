import React from 'react';

// import Cards from "./components/Cards/Cards"
// import Chart from "./components/Chart/Chart"
// import CountryPicker from "./components/CountryPicker/CountryPicker"

//works because of the ./components/index.js
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {
    //although could have constructor, just 'state' does it in the back end
    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){//needs async to use await, but need to be infront of func *special*
        const fetchedData = await fetchData();
        
        //console.log(data);
        this.setState({ data: fetchedData})
    }

    //
    handleCountryChange = async (country) => {
        //fetch data (pass this method as prop to country picker) then set state
       // console.log(country);
       const fetchedData = await fetchData(country);

       this.setState({data: fetchedData, country: country});

    }

    render() {
        const{data, country} = this.state;

        return(
            <div className={styles.container}>
                <h1>Corona Tracker</h1>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Cards data={data} />
                <Chart data={data} country={country}/> 
            </div>
        );
    }
}

export default App;
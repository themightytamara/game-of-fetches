import axios from 'axios';

import React,{Component} from 'react';



class App extends Component {

  constructor () {

super () 

this.state = {

data: [],
loading: true

}

  }

  componentDidMount () {

    let mary = "http://anapioficeandfire.com/api/characters/16"
    let targaryen = "http://www.anapioficeandfire.com/api/houses/378"
    let lannister = "http://www.anapioficeandfire.com/api/houses/229"
    let baratheon = "http://www.anapioficeandfire.com/api/houses/17"
    let robert = "http://www.anapioficeandfire.com/api/characters/901"
    let stark = " http://www.anapioficeandfire.com/api/houses/362"
    let catelyn = "http://www.anapioficeandfire.com/api/characters/232"
    let founder = "https://www.anapioficeandfire.com/api/characters/209"
    
    const requestMary = axios.get(mary);
    const requestTargaryen = axios.get(targaryen);
    const requestLannister = axios.get(lannister);
    const requestBaratheon = axios.get(baratheon);
    const requestRobert = axios.get(robert);
    const requestStark = axios.get(stark);
    const requestCatelyn = axios.get(catelyn);
    const requestFounder = axios.get(founder);
    
    axios.all([requestMary, requestTargaryen, requestLannister, requestBaratheon, requestRobert, requestStark, requestCatelyn, requestFounder]).then(axios.spread((...responses) => {
      const responseMary = responses[0];
      const responseTargaryen = responses[1];
      const responseLannister = responses[2];
      const responseBaratheon = responses[3];
      const responseRobert = responses[4];
      const responseStark = responses[5];
      const responseCatelyn = responses[6];
      const responseFounder = responses[7];
      // use/access the results 

      this.setState ({data:[...responses],loading:false}) 
    
      console.log([...responses]);
      // console.log(responseMary, responseTargaryen, responseLannister,responseBaratheon, responseRobert, responseStark, responseCatelyn, responseFounder);
    })).catch(errors => {
      // react on errors.
    });

  }
  render () {
    return (
    
<div>
  <p><b>Where was Margaery Tyrell born?: </b>{!this.state.loading ? this.state.data[0].data.born : ''}</p>
  <p><b>What region is House Targaryen in?: </b>{!this.state.loading ? this.state.data[1].data.region : ''}</p>
    <p><b>What's the coat of arms of House Lannister?: </b>{!this.state.loading ? this.state.data[2].data.coatOfArms : ''}</p>
    <p><b>What is the second seat of House Baratheon?: </b>{!this.state.loading ? this.state.data[3].data.seats[1] : ''}</p>
    <p><b>What is Robert Baratheon's second alias?</b>{!this.state.loading ? this.state.data[4].data.aliases[1] : ''}</p>
    <p><b>What's the name of the founder of House Stark? (You have to chain fetch requests!): </b>{!this.state.loading ? this.state.data[5].data.founder : ''}</p>
    <p><b>What are the titles of Catelyn Stark's three POV books? (Look into Promise.all to request these simultaniously)</b>{!this.state.loading ? this.state.data[6].data.books : ''}</p>
   
</div>

    )
  }
}

export default App;

/*Where was Margaery Tyrell born?
URL: http://anapioficeandfire.com/api/characters/16

What region is House Targaryen in?
URL: http://www.anapioficeandfire.com/api/houses/378

What's the coat of arms of House Lannister?
URL: http://www.anapioficeandfire.com/api/houses/229

What is the second seat of House Baratheon?
URL: http://www.anapioficeandfire.com/api/houses/17

What is Robert Baratheon's second alias?
URL: http://www.anapioficeandfire.com/api/characters/901

What's the name of the founder of House Stark? (You have to chain fetch requests!)
URL: http://www.anapioficeandfire.com/api/houses/362

What are the titles of Catelyn Stark's three POV books? (Look into Promise.all to request these simultaniously)
URL: http://www.anapioficeandfire.com/api/characters/232
*/


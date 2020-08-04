import axios from 'axios';


let mary = "http://anapioficeandfire.com/api/characters/16"
let targaryen = "http://www.anapioficeandfire.com/api/houses/378"
let lannister = "http://www.anapioficeandfire.com/api/houses/229"
let baratheon = "http://www.anapioficeandfire.com/api/houses/17"
let robert = "http://www.anapioficeandfire.com/api/characters/901"
let stark = " http://www.anapioficeandfire.com/api/houses/362"
let catelyn = "http://www.anapioficeandfire.com/api/characters/232"

const requestMary = axios.get(mary);
const requestTargaryen = axios.get(targaryen);
const requestLannister = axios.get(lannister);
const requestBaratheon = axios.get(baratheon);
const requestRobert = axios.get(robert);
const requestStark = axios.get(stark);
const requestCatelyn = axios.get(catelyn);

axios.all([requestMary, requestTargaryen, requestLannister, requestBaratheon, requestRobert, requestStark, requestCatelyn]).then(axios.spread((...responses) => {
  const responseMary = responses[0];
  const responseTargaryen = responses[1];
  const responseLannister = responses[2];
  const responseBaratheon = responses[3];
  const responseRobert = responses[4];
  const responseStark = responses[5];
  const responseCatelyn = responses[6];

  // use/access the results 

  console.log(responseMary, responseTargaryen, responseLannister,responseBaratheon, responseRobert, responseStark, responseCatelyn);
})).catch(errors => {
  // react on errors.
});


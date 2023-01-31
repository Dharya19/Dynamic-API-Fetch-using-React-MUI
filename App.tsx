import './App.css'
import Table1 from "./Table1";
// import Table2 from './Table2';
import Rating from './Rating';
import Images from "./Background";
const App=() => {
   
    return(
        <>
             <Images />
            < Table1 link="https://api.wazirx.com/sapi/v1/tickers/24hr" />
            <Table1 link="http://universities.hipolabs.com/search?country=India"/>
            {/* <Table2 /> */}
            <Rating />
           
        </>
    )
}
 
export default App;
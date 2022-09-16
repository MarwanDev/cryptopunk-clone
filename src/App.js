import "./App.css";
// import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
// import { useState, useEffect } from "react";
// import axios from "axios";
import PunkList from "./components/PunkList";

function App() {
  // const [punkListData, setPunkListData] = useState([]);
  // useEffect(() => {
  //   const getMyNfts = async () => {
  //     const openseaData = await axios.get(
  //       "https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x27766AdF40f7a259fb548Eb342B9db29eC751E52&order_direction=asc"
  //     );
  //     console.log(openseaData.data.assets);
  //     setPunkListData(openseaData.data.assets);
  //   };
  //   getMyNfts().catch(console.error);
  // }, []);

  return (
    <div className="app">
      <Header />
      {/* <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[{ value: 7 }]}
        image="https://i.seadn.io/gae/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q?auto=format&dpr=1.25&w=500"
      /> */}
      {/* <PunkList punkListDAta={punkListData} /> */}
      <PunkList />
    </div>
  );
}

export default App;

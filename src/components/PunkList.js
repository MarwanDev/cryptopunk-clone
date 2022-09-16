import React from "react";
import CollectionCard from "./CollectionCard";
import "./PunkList.css";
const PunkList = () => {
  // const PunkList = ({ punkListData }) => {
  return (
    <div className="punkList">
      {/* {punkListData.map((punk) => ( */}
      {/* <div> */}
      {/* <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_url}
          /> */}
      <div>
        <CollectionCard
          id={0}
          name={"Bandana Punk"}
          traits={[{ value: 7 }]}
          image="https://i.seadn.io/gae/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q?auto=format&dpr=1.25&w=500"
        />
      </div>
      <div>
        <CollectionCard
          id={0}
          name={"Bandana Punk"}
          traits={[{ value: 7 }]}
          image="https://i.seadn.io/gae/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q?auto=format&dpr=1.25&w=500"
        />
      </div>
      <div>
        <CollectionCard
          id={0}
          name={"Bandana Punk"}
          traits={[{ value: 7 }]}
          image="https://i.seadn.io/gae/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q?auto=format&dpr=1.25&w=500"
        />
      </div>
      <div>
        <CollectionCard
          id={0}
          name={"Bandana Punk"}
          traits={[{ value: 7 }]}
          image="https://i.seadn.io/gae/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q?auto=format&dpr=1.25&w=500"
        />
      </div>
      <div>
        <CollectionCard
          id={0}
          name={"Bandana Punk"}
          traits={[{ value: 7 }]}
          image="https://i.seadn.io/gae/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q?auto=format&dpr=1.25&w=500"
        />
      </div>
      {/* </div> */}
      {/* ))} */}
    </div>
  );
};

export default PunkList;

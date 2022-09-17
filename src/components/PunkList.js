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
      <div onClick={() => console.log(CollectionCard)}>
        <CollectionCard
          id={0}
          name={"Bandana Punk"}
          traits={[{ value: 7 }]}
          image="https://i.seadn.io/gae/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q?auto=format&dpr=1.25&w=500"
        />
      </div>
      <div>
        <CollectionCard
          id={1}
          name={"Cyber Punk"}
          traits={[{ value: 16 }]}
          image="https://i.seadn.io/gae/Q1Y5C8jdc828wkjPuNf_DAz3cm90bh9CK6LZQLZzB3thOdegbRt3600vz5PhMnVggKddQD3rCH6JEGOd3VxidQ5H54SmBMg64eMpzw?w=500&auto=format"
        />
      </div>
      <div>
        <CollectionCard
          id={2}
          name={"Green Punk"}
          traits={[{ value: 18 }]}
          image="https://i.seadn.io/gae/m-Ws730SPYfr1hhPi44UWd923AthhSYnetE8x32yJf1b4GPOTOwdsgK9yXN7naVm7Y884R7e7yTxzMjDGfwpZaRQmfgA4Zo5CXy_jg?w=500&auto=format"
        />
      </div>
      <div>
        <CollectionCard
          id={3}
          name={"Colored Hair Punk"}
          traits={[{ value: 12 }]}
          image="https://i.seadn.io/gae/hJKQWDj6ZUlEnBsdxH-_gK7sAosVTJjBLP_UE4TD-wVBFATfXgRJheHy1CGwp8Ly3Gz3yNvW7H9fJOjbyYt6qsmDzcld6ObliXouJz8?w=500&auto=format"
        />
      </div>
      <div>
        <CollectionCard
          id={4}
          name={"Ice Hat Punk"}
          traits={[{ value: 15 }]}
          image="https://i.seadn.io/gae/cFebPRhI6RMwGCHOtuGwvvNu4JFH_GRJpCG_0zFiHn03XAm-lCT__emfiZqdDCkkwRkg33ZP6avBv9iNDK8gtY4EKzvGz7jxA0DQxQ?w=500&auto=format"
        />
      </div>
      <div>
        <CollectionCard
          id={5}
          name={"Crown Punk"}
          traits={[{ value: 20 }]}
          image="https://i.seadn.io/gae/WrmpbMJMKmGfjJRCu2b0Bp_Pk2iPZcuRXyqPj7p3-I19DKHlIluigjdiwsnUZA28ssIQcydOnYgD2f6Qra05gFMZHWuojV1JSbM?w=500&auto=format"
        />
      </div>
      {/* </div> */}
      {/* ))} */}
    </div>
  );
};

export default PunkList;

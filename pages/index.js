import React, { Component } from "react";
import Link from "next/link";
import axios from "axios";
var temp = {};
import InfiniteScroll from "react-infinite-scroll-component";
const fetchMoreData = async () => {
  const r = await axios.get(
    "https://api.unsplash.com/photos/random?client_id=oPeX2b24aAVWiEmjKq0I2RRr6XbF_KpwUutWmFufaGU&count=41"
  );
  var r2 = r.data;
  temp = Object.assign(temp, r2);
  return temp;
};

const Index = ({ photos }) => {
  // getting the photos as a parameter from the initialprops method and assigning it to the global temp object
  temp = photos;
  console.log("in index");
  return (
    <div>
      <h1>Yellow Class React Assignment</h1>
      <hr />
      <InfiniteScroll
        // using the infinte scroll fro the infinite scrolling
        dataLength={temp.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h3>Loading more images please wait......</h3>}
      >
        {/* mapping over the images and displaying them */}
        {temp.map((photo) => (
          <div key={photo.id}>
            <Link href={`/photo?id=${photo.urls.small}`} as="photo">
              {/* <p>{photo.id}</p> */}
              <img src={photo.urls.small} width="500" height="300"></img>
            </Link>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};
Index.getInitialProps = async (ctx) => {
  //Calling the unsplash api using axios
  const res = await axios.get(
    "https://api.unsplash.com/photos/random?client_id=oPeX2b24aAVWiEmjKq0I2RRr6XbF_KpwUutWmFufaGU&count=30"
  );
  const { data } = res;
  temp = Object.assign({}, res);
  console.log("In initial props");
  // returning the object containing information about the images
  return { photos: data };
};
export default Index;

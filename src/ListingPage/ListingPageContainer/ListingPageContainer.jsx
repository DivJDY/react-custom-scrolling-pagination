import React, { useRef, useEffect, useState } from "react";
import ListigPageComponent from "../ListingPageComponent/ListigPageComponent";
import axios from "axios";

function ListingPageContainer() {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [data, setData] = useState([]);
  const [lastList, setLastList] = useState(false);

  // useEffect
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://dummyjson.com/products?skip=${currPage}&limit=10`
      );

      // .then((response) =>
      //   console.log(response.data.products, "response data")
      // );

      if (!response.data.products.length) {
        setLastList(true);
        return;
      }

      setPrevPage(currPage);
      setData([...data, ...response.data.products]);
    };
    if (!lastList && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, lastList, prevPage, data]);

  // onScroll function
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };

  return (
    // sending an props
    <ListigPageComponent
      onScroll={onScroll}
      listInnerRef={listInnerRef}
      data={data}
    />
  );
}

export default ListingPageContainer;

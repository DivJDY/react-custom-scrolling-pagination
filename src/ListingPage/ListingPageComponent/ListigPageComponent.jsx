import { React } from "react";

function ListingPageComponent({ onScroll, listInnerRef, data }) {
  // console.log("list", data);
  return (
    <div className="outside">
      <div className="container">
        <ul>
          <div
            onScroll={onScroll}
            ref={listInnerRef}
            style={{
              height: "100vh",
              overflowY: "auto",
            }}
          >
            {data.map((item, index) => {
              return (
                <li>
                  <div
                    key={index}
                    style={{
                      margin: "40px",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      src={item.images[0]}
                      alt="Image"
                      style={{ width: 200, height: 100, paddingBottom: 0 }}
                    />
                    <p>{item.brand}</p>
                  </div>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default ListingPageComponent;

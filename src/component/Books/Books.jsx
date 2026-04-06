import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../ListedBooks/ReadList.jsx";
import Wishlist from "../ListedBooks/Wishlist.jsx";
import { FaArrowCircleDown } from "react-icons/fa";
import { useState } from "react";

const Books = () => {
  const [sortingType, setSortingType] = useState("");
  console.log(sortingType);

  return (
    <div className="max-w-[1320px] mx-auto lg:py-20 py-10">
      <h2 className="bg-gray-200 text-3xl text-[#444444] font-bold text-center py-7 mb-6 rounded-lg">
        Books
      </h2>
      {/* Dropdown */}
      <div className="flex justify-center">
        <div className="dropdown dropdown-start ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 btn-success text-white font-bold"
          >
            Sort by <FaArrowCircleDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType("pages")}>
              <a className="font-bold">Page</a>
            </li>
            <li onClick={() => setSortingType("rating")}>
              <a className="font-bold">Rating</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read list</Tab>
          <Tab>Wish list</Tab>
        </TabList>

        <TabPanel>
          <ReadList sortingType={sortingType}></ReadList>
        </TabPanel>
        <TabPanel>
          <Wishlist sortingType={sortingType}></Wishlist>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;

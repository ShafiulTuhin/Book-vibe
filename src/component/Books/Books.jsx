import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../ListedBooks/ReadList.jsx";
import Wishlist from "../ListedBooks/Wishlist.jsx";

const Books = () => {
  return (
    <div className="max-w-[1320px] mx-auto lg:py-20 py-10">
      <h2 className="bg-gray-200 text-3xl text-[#444444] font-bold text-center py-7 mb-6 rounded-lg">
        Books
      </h2>
      <Tabs>
        <TabList>
          <Tab>Read list</Tab>
          <Tab>Wish list</Tab>
        </TabList>

        <TabPanel>
          <ReadList></ReadList>
        </TabPanel>
        <TabPanel>
          <Wishlist></Wishlist>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;

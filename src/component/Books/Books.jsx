import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../ListedBooks/ReadList.jsx";
import Wishlist from "../ListedBooks/Wishlist.jsx";

const Books = () => {
  return (
    <div className="max-w-[1320px] mx-auto lg:py-20 py-10">
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

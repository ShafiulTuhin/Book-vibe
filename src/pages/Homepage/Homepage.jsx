import React, { Suspense } from "react";
import Banner from "../../component/Homepage/Banner";
import AllBooks from "../../component/Homepage/Allbooks";
import Loader from "../../component/Loader/Loader";

const Homepage = () => {
  return (
    <div className="max-w-[1320px] mx-auto lg:py-20 py-10">
      <Banner></Banner>
      <Suspense fallback={<Loader></Loader>}>
        <AllBooks></AllBooks>
      </Suspense>
    </div>
  );
};

export default Homepage;

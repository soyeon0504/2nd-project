import React, { useState } from "react";
import MyList from "../../components/my/MyList";
import MyListBtn from "../../components/my/MyListBtn";
import MyProfile from "../../components/my/MyProfile";

const MyRentalList = () => {
  const [activeBtn, setActiveBtn] = useState(true);

  return (
    <div>
      <MyProfile />
      <MyListBtn activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>
      <MyList />
    </div>
  );
};

export default MyRentalList;

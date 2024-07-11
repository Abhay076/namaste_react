import { useEffect, useState } from "react";

import { MENU_URL } from "../utils/constants";

const userRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fectData();
  }, []);

  const fectData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default userRestaurantMenu;

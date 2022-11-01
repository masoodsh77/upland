import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import HomeCard from "./Components/HomeCard";

type HomeFinder = {
  count: number;
  properties: Property[];
};

type Property = {
  area: number;
  city: Object;
  currency: "USD" | "UPX";
  full_address: string;
  owner: string;
  price: number;
  prop_id: number;
  state: Object;
  status: string;
};

export default function App() {
  const [home, setHome] = useState<HomeFinder[]>([]);
  useEffect(() => {
    axios
      .get(
        "https://api.prod.upland.me/api/properties/list-view?north=84.39243318879079&south=-42.05054344623297&east=-0.439818943672069&west=-211.4368506439341&offset=0&limit=100&sort=asc"
      )
      .then((res) => setHome(res.data));
  }, []);
  console.log(home);
  return (
    <div className="App">
      <h1>Hello and welcom to Upland Home Finder</h1>
      <h2>we are find {home.count} Home for you </h2>
      <Grid container xs={12}>
        {home?.properties
          ?.filter((i: any) => i.currency === "USD")
          .map((item: Property) => {
            return (
              <Grid xs={3}>
                <HomeCard item={item} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

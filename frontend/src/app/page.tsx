import type { GetStaticProps, InferGetStaticPropsType } from "next";

import BrandBar from "@/components/BrandBar";
import DeviceList from "@/components/DeviceList";
import TypeBar from "@/components/TypeBar";
import Grid from "@mui/material/Grid";
import { getAllTypes } from "@/http/typesAPI";
import type { Types } from "@/types/types-api";
import { Brands } from "@/types/brands-api";
import { getAllBrands } from "@/http/brandsAPI";

async function getData() {
  const types: Types[] = await getAllTypes();
  const brands: Brands[] = await getAllBrands();

  const items = [types, brands];

  if (items.some(item => !item)) {
    throw new Error('Failed to fetch data');
  }
  return { types, brands };
}

export default async function Home() {
  const { types, brands } =  await getData();

  return (
    <main>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-around"
        alignItems="start"
        className="lg:p-16 md:p-8 p-4"
      >
        <Grid item xs={12} md={3} spacing={3}>
         <TypeBar types={types} />
        </Grid>
        <Grid item xs={12} md={9} spacing={3}>
          <BrandBar brands={brands} />
          <DeviceList />
        </Grid>
      </Grid>
    </main >
  )
}

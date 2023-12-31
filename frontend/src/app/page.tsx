import BrandBar from "@/components/BrandBar";
import DeviceList from "@/components/DeviceList";
import TypeBar from "@/components/TypeBar";
import Grid from "@mui/material/Grid";

import { fetchAllDevices } from "@/http/devicesAPI";
import { fetchAllBrands } from "@/http/brandsAPI";
import { fetchAllTypes } from "@/http/typesAPI";

import { Brands } from "@/types/brands-api";
import type { PaginationDevicesList } from "@/types/product-devices";
import type { Types } from "@/types/types-api";

async function getData() {
  const types: Types[] = await fetchAllTypes();
  const brands: Brands[] = await fetchAllBrands();
  const devices: PaginationDevicesList = await fetchAllDevices(null, null, 1, 2);

  const items = [types, brands, devices];

  if (items.some(item => !item)) {
    throw new Error('Failed to fetch data');
  }
  return { types, brands, devices };
}

export default async function Home() {
  const { types, brands, devices } =  await getData();

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
          <DeviceList initialDevices={devices}/>
        </Grid>
      </Grid>
    </main >
  )
}

import type { GetStaticProps, InferGetStaticPropsType } from "next";

import BrandBar from "@/components/BrandBar";
import DeviceList from "@/components/DeviceList";
import TypeBar from "@/components/TypeBar";
import Grid from "@mui/material/Grid";
import { getAllTypes } from "@/http/typesAPI";
import type { Types } from "@/types/types-api";

interface StaticProps {
  types: Types[];
}

async function getData() {
  const types: Types[] = await getAllTypes();

  if (!types) {
    throw new Error('Failed to fetch data');
  }
  return { types };
}

/* export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const types:Types[] = await getAllTypes();
  return {
    props: { 
      types: [
      {
        id: 1,
        name: 'TVs',
        createdAt: new Date().toLocaleDateString(),
        updatedAt: ''
      }
    ] }
  }
} */

export default async function Home() {
  const { types } =  await getData();

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
          <BrandBar />
          <DeviceList />
        </Grid>
      </Grid>
    </main >
  )
}

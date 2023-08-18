import BrandBar from "@/components/BrandBar";
import TypeBar from "@/components/TypeBar";
import Grid from "@mui/material/Grid";

export default function Home() {
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
          <TypeBar />
        </Grid>
        <Grid item xs={12} md={9} spacing={3}>
          <BrandBar />
        </Grid>
      </Grid>
    </main >
  )
}

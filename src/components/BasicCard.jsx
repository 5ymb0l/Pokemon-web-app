import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard({ pokemon, loading, infoPokemon }) {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", 
                flexDirection: "column",
                backgroundColor: "#9EDEF9",
                borderRadius: "1rem",
                boxShadow: "0 5px 5px rgba(0,0,0,0.5)",
                padding: "0 1.5rem",
                boxSizing: "border-box"
              }}
              key={item.id}
              onClick={() => infoPokemon(item)}
            >
              <CardContent>
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default} alt="" />
                <Typography variant="h2" display= "block" sx = {{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      fontStyle : "normal",
                      color : "crimson"
                    }} >{item.name}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained"> Details</Button>
              </CardActions>
            </Card>
          );
        })
      )}
    </>
  );
}

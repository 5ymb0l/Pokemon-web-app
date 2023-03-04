import { Box, Typography } from "@mui/material";
import React from "react";
import "./Style.css"
const Pokeinfo = ({ data }) => {
   
    return (
        <>
        {
            (!data) ? "" : (
                <>
                    <Typography variant="h1" display= "block" sx = {{
                      fontSize: "25px"
                    }}>{data.name}</Typography>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    <Box className="abilities">
                        {
                            data.abilities.map(poke=>{
                                return(
                                    <>
                                     <Box className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </Box>
                                    </>
                                )
                            })
                        }
                    </Box>
                    <Box className="base-stat">
                        {
                            data.stats.map(poke=>{
                                return(
                                    <Box>
                                        <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </>
            )
        }

        </>
    )
}
export default Pokeinfo
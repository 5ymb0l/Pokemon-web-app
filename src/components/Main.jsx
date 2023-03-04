import React from "react";
import Pokeinfo from "./PokeInfo";
import BasicCard from "./BasicCard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Box, Button } from "@mui/material";
import "./Style.css"

const Main=()=>{
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon=async(res)=>{
       res.map(async(item)=>{
          const result=await axios.get(item.url)
          setPokeData(state=>{
              state=[...state,result.data]
              state.sort((a,b)=>a.id>b.id?1:-1)
              return state;
          })
       })   
    }
    useEffect(()=>{
        pokeFun();
    },[url])
    return(
        <>
              <Box className="container">
                <Box className="left-content">
                    <BasicCard pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                    <Box className="btn-group">
                        {  prevUrl && <Button onClick={()=>{
                            setPokeData([])
                           setUrl(prevUrl) 
                        }}>Previous</Button>}

                        { nextUrl && <Button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</Button>}

                    </Box>
                </Box>
                <Box className="right-content">
                   <Pokeinfo data={pokeDex}/>
                </Box>
            </Box>
        </>
    )
}
export default Main;
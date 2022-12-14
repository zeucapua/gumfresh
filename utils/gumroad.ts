import { Product } from "./types.ts";
import "https://deno.land/std@0.167.0/dotenv/load.ts";
const GUMROAD_API_URL = "https://api.gumroad.com/v2/";
const GUMROAD_ACCESS_TOKEN = Deno.env.get("GUMROAD_ACCESS_TOKEN");
if (GUMROAD_ACCESS_TOKEN === undefined) {
    throw new Error("No 'GUMROAD_ACCESS_TOKEN' variable set");  
}

export async function fetchGumroadAPI<T>(query : string = "") : Promise<T>{
   const url = GUMROAD_API_URL + query;
   console.log(url);
   const response = await fetch(url, {
       method: 'GET',
       headers: {
           Authorization: `Bearer ${GUMROAD_ACCESS_TOKEN}`
       }
   });
   if (!response.ok) {
       throw new Error(response.statusText);
   }
   const json = await response.json();
   return json;
}

export async function getAllProducts<T>() : Promise<T> {
    const data = await fetchGumroadAPI("products");
    if (!data.success) { return products; }
    const productsData = data.products;
    return productsData;
}


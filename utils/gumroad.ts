const GUMROAD_URL = "https://api.gumroad.com/v2/";
const GUMROAD_ACCESS_TOKEN = Deno.env.get("GUMROAD_ACCESS_TOKEN");
if (GUMROAD_ACCESS_TOKEN === undefined) {
    throw new Error("No 'GUMROAD_ACCESS_TOKEN' variable set");  
}

export async function fetchGumroadAPI<T>(query : string = "") : Promise<T> {
   const url = GUMROAD_URL + query;
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
   if (json.success == "false") { throw new Error(json.message); }
   return json;
}

export async function getAllProducts<T>() : Promise<T> {
    return await fetchGumroadAPI("products");
}


import { Head } from "$fresh/runtime.ts";
import { Product } from "../utils/types.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getAllProducts } from "../utils/gumroad.ts";
import { GumroadCard } from "../components/GumroadCard.tsx";

export const handler: Handlers<Product[]> = {
    async GET(_req, ctx) {
        const data = await getAllProducts();
        return ctx.render(data);
    }
}

export default function Home(ctx: PageProps) {
    const { data } = ctx;
    const products = data;
    return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="flex flex-col gap-8 bg-black w-full min-w-screen h-full min-h-screen p-16">
        <img
          src="/logo.svg"
          class="mx-auto w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
        {
            products.map((product) => <GumroadCard product={product} />)
        }
        </div>
        <a class="bottom-0 mx-auto" href="https://fresh.deno.dev" target="_blank">
            <img width="197" height="37" src="https://fresh.deno.dev/fresh-badge.svg" alt="Made with Fresh" />
        </a> 
      </div>
    </>
  );
}

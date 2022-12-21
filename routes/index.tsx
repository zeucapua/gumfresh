import { Head } from "$fresh/runtime.ts";
import { Product } from "../utils/types.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getAllProducts } from "../utils/gumroad.ts";
import { GumroadCard } from "../components/GumroadCard.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-github.tsx"

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
    <div>
      <Head>
        <title>Gumfresh by zeudev</title>
      </Head>
      <div class="flex flex-col gap-8 bg-black w-full min-w-screen h-full min-h-screen p-8">
        <img
          src="/logo.svg"
          class="mx-auto p-4 rounded-full bg-[#ff90e8] w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit mx-auto justify-center gap-8">
          {
            products.map((product: Product) => <GumroadCard product={product} />)
          }
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-fit mx-auto">
          <a class="mx-auto my-auto border-2 border-white rounded-lg p-0.5" href="https://fresh.deno.dev" target="_blank">
            <img width="197" height="37" src="https://fresh.deno.dev/fresh-badge-dark.svg" alt="Made with Fresh" />
          </a>
          <a href="https://github.com/zeucapua/gumfresh" target="_blank">
            <div class="flex flex-row border-gray-300 border-2 rounded-lg px-4 py-2 w-fit gap-4 mx-auto">
              <IconBrandGithub class="text-white w-6 h-6" />
              <p class="text-white">Source on Github</p>
            </div>
          </a>
        </div>
        <code class="bg-[#1c1c1c] transition-all duration-300 hover:font-bold hover:text-black hover:bg-[#ff90e8] px-8 py-4 rounded-lg w-fit mx-auto text-white">
          gh repo clone zeucapua/gumfresh
        </code>
      </div>
    </div>
  );
}

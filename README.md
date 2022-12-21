# Gumfresh: A Gumroad Storefront built with Fresh

- Built with Deno's Fresh and online via Deno Deploy.
- Customizable using TailwindCSS (specifically twind)

## Getting Started
--------------------
Install the [Deno CLI](https://deno.land). 

Go ahead and clone this repo. If you're using Github's CLI:
```
gh repo clone zeucapua/gumfresh
```

For use with any Gumroad account, just edit the ```.env``` file with your Access Token!
```
// .env
GUMROAD_ACCESS_TOKEN="<your access token here>"
```

From within your project folder, start the development server:
```
deno task start
```

Open your browser to [http://localhost:8000] to see the website. If you're ready to Deploy
this website online, use [Deno Deploy](https://deno.com) with Github to get it up and running!

## TODO
-------------------
[] One Product One Page
[] Multiple Product Pictures (Carousel?)
[] Embedded Checkout

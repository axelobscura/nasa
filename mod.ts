import { Application, send } from "https://deno.land/x/oak@v5.0.0/mod.ts";

const app = new Application();
const PORT = 8000;

app.use(async (ctx, next) => {
    await next();
    const time = ctx.response.headers.get('X-Response-Time');
    console.log(`${ctx.request.method} - ${ctx.request.url}: ${time}`);
});

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const delta = Date.now() - start;
    ctx.response.headers.set('X-Response-Time', `${delta}ms it took to respond...`);
});

app.use(async (ctx) => {
    const filePath = ctx.request.url.pathname;
    const fileWhiteList = [
        "/index.html",
        "/javascript/script.js",
        "/images/favicon.png",
        "/stylesheets/style.css"
    ];
    if (fileWhiteList.includes(filePath)) {
        await send(ctx, filePath, {
            root: `${Deno.cwd()}/public`
        });
    }

});

app.use((ctx) => {
    ctx.response.body = `
               ___
     |     | |
    / \    | |
   |--o|===|-|
   |---|   |d|
  /     \  |w|
 | U     | |b|
 | S     |=| |
 | A     | | |
 |_______| |_|
  |@| |@|  | |
___________|_|_
    `;
});

if (import.meta.main) {
    await app.listen({
        port: PORT
    });
}



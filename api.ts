import { Router } from "https://deno.land/x/oak@v5.0.0/mod.ts";

const router = new Router();

router.get("/", (ctx) => {
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

export default router;

import Koa from "koa";
import koaBodyparser from "koa-bodyparser";

import userRouter from "./routes/user.router.js";
import traderRouter from "./routes/trader.router.js";
import itemRouter from "./routes/items.router.js";
import cartRouter from "./routes/cart.router.js";
import wishListRouter from "./routes/wishlist.router.js";

const app = new Koa();

app.use(koaBodyparser());

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.use(traderRouter.routes());
app.use(traderRouter.allowedMethods());
app.use(itemRouter.routes());
app.use(itemRouter.allowedMethods());
app.use(cartRouter.routes());
app.use(cartRouter.allowedMethods());
app.use(wishListRouter.routes());
app.use(wishListRouter.allowedMethods());

app.use((ctx) => {
  ctx.status = 404;
  console.log("Not Found" + ctx.status);
});

app.listen(8001, (data) => {
  console.log("Application running on port 8000");
});

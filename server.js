import Koa from "koa";
import koaBodyparser from "koa-bodyparser";

import userRouter from "./routes/user.router.js";
import traderRouter from "./routes/trader.router.js";


const app = new Koa();

app.use(koaBodyparser());

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.use(traderRouter.routes());
app.use(traderRouter.allowedMethods());

app.use((ctx) => {
  ctx.status = 404;
  console.log("Not Found" + ctx.status);
});

app.listen(8000, (data) => {
  console.log("Application running on port 8000");
});

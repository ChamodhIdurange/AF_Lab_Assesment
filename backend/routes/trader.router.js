import Router from "@koa/router";
import {
  createTrader,
  getAllTraders,
  getTraderById,
} from "../api/trader.api.js";

const userRouter = new Router({
  prefix: "/traders",
});

userRouter.post("/", (ctx) => {
  let data = ctx.request.body;
  data = createTrader(data);
});

userRouter.get("/", (ctx) => {
  ctx.body = getAllTraders();
  let users = ctx.request.body;
});

userRouter.get("/:id", (ctx) => {
  var id = ctx.params.id;
  ctx.body = getTraderById(id);
  ctx.set("Content-Type", "application.json");
  ctx.status = 201;
});

export default userRouter;

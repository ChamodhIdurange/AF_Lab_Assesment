import Router from "@koa/router";
import {
  addToCart,
  getCartByUserId,
  updateCart,
  removeFromCart,
  getAllcarts,
} from "../api/cart.api.js";

const cartRouter = new Router({
  prefix: "/cart",
});

cartRouter.post("/", (ctx) => {
  let data = ctx.request.body;
  data = addToCart(data);
});

cartRouter.get("/", (ctx) => {
  ctx.body = getAllcarts();
  let items = ctx.request.body;
});

cartRouter.get("/:id", (ctx) => {
  var id = ctx.params.id;
  ctx.body = getCartByUserId(id);
});

cartRouter.put("/:id", (ctx) => {
  var id = ctx.params.id;
  let data = ctx.request.body;

  data = updateCart(id, data);
  ctx.set("Content-Type", "application.json");
  ctx.status = 201;
});

cartRouter.delete("/:id", (ctx) => {
  var id = ctx.params.id;
  ctx.body = removeFromCart(id);
});

export default cartRouter;

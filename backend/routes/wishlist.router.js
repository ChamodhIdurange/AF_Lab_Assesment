import Router from "@koa/router";
import {
  addToWishList,
  getWisListByUserId,
  getAllWishList,
  removeFromWishList,
} from "../api/wishlist.api.js";

const wishlistRouter = new Router({
  prefix: "/wishlist",
});

wishlistRouter.post("/", (ctx) => {
  let data = ctx.request.body;
  data = addToWishList(data);
});

wishlistRouter.get("/", (ctx) => {
  ctx.body = getAllWishList();
  let items = ctx.request.body;
});

wishlistRouter.get("/:id", (ctx) => {
  var id = ctx.params.id;
  ctx.body = getWisListByUserId(id);
  ctx.set("Content-Type", "application.json");
  ctx.status = 201;
});

wishlistRouter.delete("/:id", (ctx) => {
  var id = ctx.params.id;
  ctx.body = removeFromWishList(id);
});

export default wishlistRouter;

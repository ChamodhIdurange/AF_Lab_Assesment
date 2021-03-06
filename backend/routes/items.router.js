import Router from "@koa/router";
import {
  createItem,
  getAllItems,
  getItemsById,
  updateItem,
} from "../api/items.api.js";

const itemRouter = new Router({
  prefix: "/items",
});

itemRouter.post("/", (ctx) => {
  let data = ctx.request.body;
  data = createItem(data);
  if (!data) {
    throw new Error("Item not added");
  } else {
    ctx.body = data;
  }
});

itemRouter.get("/", (ctx) => {
  ctx.body = getAllItems();
  let items = ctx.request.body;
});

itemRouter.get("/:id", (ctx) => {
  var id = ctx.params.id;
  ctx.body = getItemsById(id);
  ctx.set("Content-Type", "application.json");
  ctx.status = 201;
});

itemRouter.put("/:id", (ctx) => {
  var id = ctx.params.id;
  let data = ctx.request.body;

  data = updateItem(id, data);
  ctx.set("Content-Type", "application.json");
  ctx.status = 201;
});

export default itemRouter;

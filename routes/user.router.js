import Router from "@koa/router";
import { createUser, getAllUsers, getUserById } from "../api/user.api.js";

const userRouter = new Router({
  prefix: "/users",
});

userRouter.post("/", (ctx) => {
  let data = ctx.request.body;
  data = createUser(data);
});

userRouter.get("/", (ctx) => {
  ctx.body = getAllUsers();
  let users = ctx.request.body;
});

userRouter.get("/:id", (ctx) => {
  var id = ctx.params.id;
  ctx.body = getUserById(id);
  ctx.set("Content-Type", "application.json");
  ctx.status = 201;
});

export default userRouter;

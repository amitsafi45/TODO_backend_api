import { Router } from "express";


const router = Router();

export type Route = {
  path: string;
  route: Router;
};

const routes: Route[] = [
  // {
  //   // path: "/auth",
  //   // route: authRoutes,
  // },

];

// *Instantiate all the routes
routes.forEach((route) => {
  router.use(route.path, route.route);
});

// *Route to ensure that server is currently running
router.get("/", (req, res) => {
  res.send({
    success: true,
    message:"Welcome",
    data: [],
  });
});

export default router;

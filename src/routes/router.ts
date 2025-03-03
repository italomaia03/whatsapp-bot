import { Request, Response, Router } from "express";

const router = Router();

router.get("/verify-webhook", (req: Request, _res: Response) => {
  console.log(req.query);
});

export { router };

router.get("/", (_req: Request, _res: Response) => {
  console.log("test");
});

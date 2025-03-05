import { Request, Response } from "express";
import { MessagerService } from "../services/messager.service";

export class MessagerController {
    constructor(private readonly service: MessagerService) {} 

    public handle(req: Request, res: Response) {
        const { body } = req;
        this.service.handleRawMessage(body);
        return res.sendStatus(200);
    }
}
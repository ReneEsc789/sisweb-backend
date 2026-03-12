import { Router, Request, Response } from "express";
import productRoutes from "./productRoutes";
import empresaRoutes from "./empresaRoutes";
import rubroRoutes from "./rubroRoutes";
import empresaRubroRoutes from "./empresa_rubroRoutes";

const apiRouter:Router = Router();

apiRouter.use('/product', productRoutes);
apiRouter.use('/empresa', empresaRoutes);
apiRouter.use('/rubro', rubroRoutes);
apiRouter.use('/empresa-rubro', empresaRubroRoutes)

apiRouter.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
});

export default apiRouter;
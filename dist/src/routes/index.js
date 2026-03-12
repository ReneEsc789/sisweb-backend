"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRoutes_1 = __importDefault(require("./productRoutes"));
const empresaRoutes_1 = __importDefault(require("./empresaRoutes"));
const rubroRoutes_1 = __importDefault(require("./rubroRoutes"));
const empresa_rubroRoutes_1 = __importDefault(require("./empresa_rubroRoutes"));
const apiRouter = (0, express_1.Router)();
apiRouter.use('/product', productRoutes_1.default);
apiRouter.use('/empresa', empresaRoutes_1.default);
apiRouter.use('/rubro', rubroRoutes_1.default);
apiRouter.use('/empresa-rubro', empresa_rubroRoutes_1.default);
apiRouter.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = apiRouter;

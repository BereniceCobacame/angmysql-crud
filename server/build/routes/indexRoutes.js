"use strict";
//enrutador
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRouters {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //ruta para la ruta inicial ./ devuelve msg
        this.router.get('/', indexController_1.indexController.index);
    }
}
const indexRoutes = new IndexRouters();
exports.default = indexRoutes.router;

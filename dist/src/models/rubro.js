"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rubro = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const empresa_1 = require("./empresa");
const empresa_rubro_1 = require("./empresa_rubro");
let Rubro = class Rubro extends sequelize_typescript_1.Model {
};
exports.Rubro = Rubro;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Rubro.prototype, "nombre_rubro", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => empresa_1.Empresa, () => empresa_rubro_1.EmpresaRubro),
    __metadata("design:type", Array)
], Rubro.prototype, "empresas", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Rubro.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Rubro.prototype, "updatedAt", void 0);
exports.Rubro = Rubro = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "rubros"
    })
], Rubro);

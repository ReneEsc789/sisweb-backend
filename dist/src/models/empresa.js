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
exports.Empresa = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const rubro_1 = require("./rubro");
const empresa_rubro_1 = require("./empresa_rubro");
let Empresa = class Empresa extends sequelize_typescript_1.Model {
};
exports.Empresa = Empresa;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Empresa.prototype, "nombre", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT
    }),
    __metadata("design:type", String)
], Empresa.prototype, "datos_generales", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Empresa.prototype, "correo_electronico", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Empresa.prototype, "contacto", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Empresa.prototype, "nombre_contacto", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Empresa.prototype, "tier_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        defaultValue: 'default_logo_png'
    }),
    __metadata("design:type", String)
], Empresa.prototype, "logo", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => rubro_1.Rubro, () => empresa_rubro_1.EmpresaRubro),
    __metadata("design:type", Array)
], Empresa.prototype, "rubros", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Empresa.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Empresa.prototype, "updatedAt", void 0);
exports.Empresa = Empresa = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "empresas"
    })
], Empresa);

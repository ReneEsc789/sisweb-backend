import { Sequelize } from "sequelize-typescript";
import { Product } from "../models/product"
import { Empresa } from "../models/empresa";
import { Rubro } from "../models/rubro";
import { EmpresaRubro } from "../models/empresa_rubro";

const connection = new Sequelize ({
    database: 'sisweb_db',
    dialect: 'postgres',
    username: 'sisweb_user',
    password: 'HDK#$%Ljkwerff.89',
    storage: ':memory',
    models: [ 
        Product,
        Empresa,
        Rubro,
        EmpresaRubro
    ] 
});

async function connectionDB() {
    try {
        await connection.sync();
    } catch (e) {
        console.log(e)
    }
}

export default connectionDB;
import { Table, Model, Column, ForeignKey } from 'sequelize-typescript';
import { Empresa } from './empresa';
import { Rubro } from './rubro';

@Table ({
    tableName: "empresa_rubro"
})

export class EmpresaRubro extends Model {
    @ForeignKey(() => Empresa)
    @Column 
    empresa_id!: number; 

    @ForeignKey(() => Rubro)
    @Column
    rubro_id!: number; 
}
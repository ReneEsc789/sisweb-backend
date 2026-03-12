import { Table, Model, Column, CreatedAt, UpdatedAt, DataType, BelongsToMany } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Empresa } from './empresa';
import { EmpresaRubro } from './empresa_rubro';

interface RubroAttributes {
    id_rubro: number;
    nombre_rubro: string;
}

interface RubroCreationAttributes extends Optional<RubroAttributes, 'id_rubro'> {}

@Table ({
    tableName: "rubros"
})

export class Rubro extends Model<RubroAttributes, RubroCreationAttributes> {

    @Column
    nombre_rubro!: string;

    @BelongsToMany(() => Empresa, () => EmpresaRubro)
    empresas?: Empresa[];

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}
import { Table, Model, Column, CreatedAt, UpdatedAt, DataType, BelongsToMany } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Rubro } from './rubro';
import { EmpresaRubro } from './empresa_rubro';

interface EmpresaAttributes {
    id_empresa: number;
    nombre: string;
    datos_generales: string;
    correo_electronico: string;
    contacto: number;
    nombre_contacto: string; 
    tier_id: number;
    logo: string;   
}

interface EmpresaCreationAttributes extends Optional<EmpresaAttributes, 'id_empresa'> {}

@Table ({
    tableName: "empresas"
})

export class Empresa extends Model <EmpresaAttributes, EmpresaCreationAttributes> {
    @Column
    nombre!: string;

    @Column({
        type: DataType.TEXT
    })
    datos_generales?: string;

    @Column
    correo_electronico?: string;

    @Column
    contacto?: string;

    @Column
    nombre_contacto?: string;

    @Column
    tier_id?: number;

    @Column({
        defaultValue: 'default_logo_png'
    })
    logo?: string;
    
    @BelongsToMany(() => Rubro, () => EmpresaRubro)
    rubros?: Rubro[];

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;
}
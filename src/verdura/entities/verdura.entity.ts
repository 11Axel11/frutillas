import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('verdura')
export class Verdura {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 500 })
    name: string;

    @Column()
    descripcion: string;
}

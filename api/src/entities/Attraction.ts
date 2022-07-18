import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Attraction {
    @PrimaryColumn({ type: "uuid" })
    id: string

    @Column()
    name: string

    @Column()
    countryCode: string

    @CreateDateColumn()
    createdAt: Date

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
};

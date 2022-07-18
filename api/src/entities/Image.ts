import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Attraction } from "./Attraction";

@Entity()
export class Image {
    @PrimaryColumn({ type: "uuid" })
    id: string

    @Column()
    link: string

    @CreateDateColumn()
    createdAt: Date

    @Column()
    attractionId: string

    @ManyToOne(() => Attraction, (attraction) => attraction.id)
    attraction: Attraction

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    };
};

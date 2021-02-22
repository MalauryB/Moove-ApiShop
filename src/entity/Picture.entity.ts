import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Shop } from './Shop.entity';

@Entity()
export class Picture{

    @PrimaryGeneratedColumn()
    id : number;

    @Column("text")
    link : string;

    @ManyToOne(type => Shop, shop => shop.pictures)
    shop : Shop;
    
}
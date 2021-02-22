import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Shop } from './Shop.entity';

@Entity()
export class OpenShop {

    @PrimaryGeneratedColumn()
    id : number;
    
    @Column("text")
    dayWeek : string;
    
    @Column("text")
    hourStart : string;

    @Column("text")
    endHour : string;

    @Column()
    order: number;
    
    @ManyToOne(type => Shop, shop => shop.openShop)
    shop : Shop;
}
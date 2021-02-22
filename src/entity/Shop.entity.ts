import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { OpenShop } from './OpenShop.entity';
import { Picture } from './Picture.entity';

@Entity()
export class Shop {

    @PrimaryGeneratedColumn()
    id : number;

    @Column("text")
    name : String;

    @Column("text")
    address : String;

    @Column("text")
    description : String;

    @Column("text")
    email : String;

    @Column("text")
    phone : String;

    @Column("text")
    videoLink: String;

    @Column("text")
    logoPicture : String;

    @OneToMany(type => Picture, picture => picture.shop)
    pictures:  Picture[];

    @OneToMany(type => OpenShop, os => os.shop)
    openShop:  OpenShop[];

    @Column("double")
    lat : number;

    @Column("double")
    long : number;
}
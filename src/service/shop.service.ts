import {Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OpenShop } from "src/entity/OpenShop.entity";
import { Picture } from "src/entity/Picture.entity";
import { Shop } from "src/entity/Shop.entity";
import { Connection, Repository } from "typeorm";

@Injectable()
export class ShopService {

    constructor( @InjectRepository(Shop)private shopsRepository: Repository<Shop>,private connection: Connection) {
      this.initData();
    }

      async initData(){

        let shop1 = new Shop();
        shop1.name = "La piscine Marius-Leclercq";
        shop1.address = "99 Avenue Barbusse, 62440 Harnes";
        shop1.description = "La piscine Marius-Leclercq est située en plein centre de la ville dans la rue Barbusse. Différentes spécialités sportives y sont proposées. Un bassin de 25 mètres de long vous accueille du lundi au dimanche ainsi qu’un petit bain pour les activités comme l’aquagym, l’aquadouce ou le jardin aquatique."
        shop1.email = "piscinemariusleclercq@contact.fr";
        shop1.phone = "03 21 13 96 00";
        shop1.logoPicture = "https://zupimages.net/up/21/06/934y.png";
        shop1.lat = 50.450157165527344;
        shop1.long = 2.898190498352051;
        shop1.videoLink = "https://www.youtube.com/watch?v=rqDEgCBYMxA&ab_channel=AvallonVision";
        shop1.pictures = new Array();
        shop1.openShop = new Array();
    
        let picture1 = new Picture();
        picture1.link = "https://zupimages.net/up/21/02/cpri.jpg";
        shop1.pictures[0] = picture1;
        
        let picture2 = new Picture();
        picture2.link = "https://zupimages.net/up/21/02/3mkk.jpg";
        shop1.pictures[1] = picture2;
    
        let openShop1 = new OpenShop();
        openShop1.dayWeek =  "Monday";
        openShop1.hourStart = "12:00:00";
        openShop1.endHour = "13:00:00";
        openShop1.order = 1;
        shop1.openShop[0] = openShop1;
    
        let openShop2 = new OpenShop();
        openShop2.dayWeek =  "Monday";
        openShop2.hourStart = "16:15:00";
        openShop2.endHour = "19:00:00";
        openShop2.order = 2;
        shop1.openShop[1] = openShop2;
    
        let openShop3 = new OpenShop();
        openShop3.dayWeek =  "Tuesday";
        openShop3.hourStart = "16:15:00";
        openShop3.endHour = "19:00:00";
        openShop3.order = 1;
        shop1.openShop[2] = openShop3;
    
        let openShop4 = new OpenShop();
        openShop4.dayWeek =  "Thursday";
        openShop4.hourStart = "10:00:00";
        openShop4.endHour = "13:30:00";
        openShop4.order = 1;
        shop1.openShop[3] = openShop4;
    
    
        let openShop5 = new OpenShop();
        openShop5.dayWeek =  "Tuesday";
        openShop5.hourStart = "14:00:00";
        openShop5.endHour = "19:00:00";
        openShop5.order = 2;
        shop1.openShop[4] = openShop5;
    
        let openShop6 = new OpenShop();
        openShop6.dayWeek =  "Saturday";
        openShop6.hourStart = "10:00:00";
        openShop6.endHour = "12:00:00";
        openShop6.order = 1;
        shop1.openShop[5] = openShop6;
    
        let openShop7 = new OpenShop();
        openShop7.dayWeek =  "Saturday";
        openShop7.hourStart = "14:00:00";
        openShop7.endHour = "17:00:00";
        openShop7.order = 2;
        shop1.openShop[6] = openShop7;
    
        let openShop8 = new OpenShop();
        openShop8.dayWeek =  "Sunday";
        openShop8.hourStart = "8:00:00";
        openShop8.endHour = "12:00:00";
        openShop8.order = 2;
        shop1.openShop[7] = openShop8;
        
        let shop2 = new Shop();
        shop2.name = "Climb up";
        shop2.address = "Plaine sportive, 110 Rue Jean Jaurès, 59810 Lesquin";
        shop2.description = "Depuis plus de 15 ans nous cultivons la diversité au sein de nos structures. Diversité de profils, de visions et de sensibilités. Nos nombreux échanges ont ainsi donné jour à un concept de salles d’escalade pensées comme des lieux de vie ouverts à tous.";
        shop2.email = "climbup@contact.fr";
        shop2.phone = "03 20 07 57 42";
        shop2.logoPicture = "https://zupimages.net/up/21/06/a8ai.jpg";
        shop2.lat = 50.5865602;
        shop2.long = 3.1071495;
        shop2.videoLink = "https://www.youtube.com/watch?v=3-3a9GghAR0&ab_channel=ClimbUp";
        shop2.pictures = new Array();
        shop2.openShop = new Array();
    
        let picture3 = new Picture();
        picture3.link = "https://zupimages.net/up/21/02/z8st.jpg";
        shop2.pictures[0] = picture3;
        
        let picture4 = new Picture();
        picture4.link = "https://zupimages.net/up/21/02/6yh3.jpg";
        shop2.pictures[1] = picture4;
    
        let openShop9 = new OpenShop();
        openShop9.dayWeek =  "Monday";
        openShop9.hourStart = "8:00:00";
        openShop9.endHour = "23:00:00";
        openShop9.order = 1;
        shop2.openShop[0] = openShop9;
    
        let openShop10 = new OpenShop();
        openShop10.dayWeek =  "Tuesday";
        openShop10.hourStart = "8:00:00";
        openShop10.endHour = "23:00:00";
        openShop10.order = 1;
        shop2.openShop[1] = openShop10;
        
        let openShop11 = new OpenShop();
        openShop11.dayWeek =  "Wednesday";
        openShop11.hourStart = "8:00:00";
        openShop11.endHour = "23:00:00";
        openShop11.order = 1;
        shop2.openShop[2] = openShop11;
    
        let openShop12 = new OpenShop();
        openShop12.dayWeek =  "Thursday";
        openShop12.hourStart = "8:00:00";
        openShop12.endHour = "23:00:00";
        openShop12.order = 1;
        shop2.openShop[3] = openShop12;
    
        let openShop13 = new OpenShop();
        openShop13.dayWeek =  "Friday";
        openShop13.hourStart = "8:00:00";
        openShop13.endHour = "23:00:00";
        openShop13.order = 1;
        shop2.openShop[4] = openShop13;
    
        let openShop14 = new OpenShop();
        openShop14.dayWeek =  "Saturday";
        openShop14.hourStart = "8:00:00";
        openShop14.endHour = "23:00:00";
        openShop14.order = 1;
        shop2.openShop[5] = openShop14;
    
        let openShop15 = new OpenShop();
        openShop15.dayWeek =  "Sunday";
        openShop15.hourStart = "8:00:00";
        openShop15.endHour = "23:00:00";
        openShop15.order = 1;
        shop2.openShop[6] = openShop15;

        await this.connection.transaction(async manager => {
          await manager.save(picture1);
          await manager.save(picture2);
          await manager.save(picture3);
          await manager.save(picture4);
          await manager.save(openShop1);
          await manager.save(openShop2);
          await manager.save(openShop3);
          await manager.save(openShop4);
          await manager.save(openShop5);
          await manager.save(openShop6);
          await manager.save(openShop7);
          await manager.save(openShop8);
          await manager.save(openShop9);
          await manager.save(openShop10);
          await manager.save(openShop11);
          await manager.save(openShop12);
          await manager.save(openShop13);
          await manager.save(openShop14);
          await manager.save(openShop15);
          await manager.save(shop1);
          await manager.save(shop2);
        });
  };
    
      findAll(): Promise<Shop[]> {
        return this.shopsRepository.find();
      };
    /*
      findOne(id: string): Promise<Shop> {
        return this.shopsRepository.findOne(id);
      }*/
}
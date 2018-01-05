import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes:any = [];
  img:any = [];
  activemenu:any = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
  	this.heroService.findAll().subscribe(respone =>{
      // console.log( respone.data );
      let char_name = [];
      var check = 0;
      let  char_array =[];
      var name = [];
       respone.forEach(function (data,index) {
          char_array = data.name.split("_");


           for(let i=0;i<char_array.length;i++){
          if(i == 3){
              char_name[index] = char_array[i];
          }
          if(i > 3){
              char_name[index] += "_"+char_array[i];
          }
          }
            name.push(      
            {  name: char_name[index] }
            //ติดตรงนี้นะ
        );
          

      }, this);

       //console.log(name);
       //this.img = char_name;
       //respone.name_heroes = char_name;
     
       
  		 this.heroes = respone;
       this.img = name;

  	});
  }

}

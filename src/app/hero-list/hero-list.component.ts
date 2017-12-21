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
  constructor(private heroService: HeroService) { }

  ngOnInit() {
  	this.heroService.findAll().subscribe(respone =>{
      // console.log( respone.data );
      let char_name = [];
      var check = 0;
      let  char_array =[];
       respone.forEach(function (data,index) {
          char_array = data.name.split("_");
          if(char_array[3] != ""){
              char_name[index] = char_array[3];
          }
          if(char_array[4] != null){
              char_name[index] += "_"+char_array[4];
          }

            respone.push(      
            {  name: char_name[index] }
            //ติดตรงนี้นะ
        );
          
      }, this);
       //this.img = char_name;
       //respone.name_heroes = char_name;
     
       console.log(respone);
  		 this.heroes = respone;
  	});
  }

}

import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes:any = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
  	this.heroService.findAll().subscribe(respone =>{
     //  console.log( respone.data);
  		this.heroes = respone;
  	});
  }

}

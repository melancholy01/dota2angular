import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
	hero : any;
  constructor(private route:ActivatedRoute,private heroService:HeroService) { }

  ngOnInit() {

  		this.route.params.subscribe(params => {
  			const id = params['id'];
  			this.heroService.findOne(id).subscribe(response => {
  				this.hero = response;

  			}); 
  		});
  }

  like(){
  	console.log('like');
  }

}

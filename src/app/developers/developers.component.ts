import { Component, OnInit } from '@angular/core';
import { DevelopersService } from '../developers-service/developers.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  user:any;
  repos:any;
  username:string;

  constructor(private developersService:DevelopersService) {
    console.log('Developers Component Init...');
  }

  search(){
    this.developersService.getUser().subscribe(user => {
      this.user = user;
    });

    this.developersService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { DevelopersService } from '../developers-service/developers.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  constructor(private developersService:DevelopersService) {
    console.log('Developers Component Init...');

    this.developersService.getUser().subscribe(user => {
      console.log(user);
    })
  }

  ngOnInit() {
  }

}

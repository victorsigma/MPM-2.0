import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  wiki: any;
  constructor(private _user:UsersService) { 
    this._user.getCard().subscribe(data => {
      console.log(data.data);
      this.wiki = data.data;
    })
  }

  ngOnInit(): void {
    
  }

}

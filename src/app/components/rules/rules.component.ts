import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/Users';
import { LoginService } from 'src/app/services/login.service';
import { LocationService } from '../../services/location.service';
import { UsersService } from 'src/app/services/users.service';
import tcg from '../../../assets/data/tcg-banlist.json'
import ocg from '../../../assets/data/tcg-banlist.json'

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  isLogin: boolean;
  user: User = new User();
  region: string = '';
  locate: any;
  wiki: any;
  cardsBan: any;
  cardsLim: any;
  cardsSemLim: any;
  constructor(public login: LoginService, private _locate:LocationService, private _user:UsersService) { 
    this.isLogin = this.login.isLoggin();
    this._locate.getLocate().subscribe(data => {
      this.locate = data;
      if(this.locate.continent == "Asia") {
        this.region = "OCG"
        this.wiki = ocg.data;
        this.cardsBan = ocg.data.filter((info: any) => {
          return info.banlist_info.ban_ocg == 'Banned'
        })
        this.cardsLim = ocg.data.filter((info: any) => {
          return info.banlist_info.ban_ocg == 'Limited'
        })
        this.cardsSemLim = ocg.data.filter((info: any) => {
          return info.banlist_info.ban_ocg == 'Semi-Limited'
        })
      } else {
        this.region = "TCG"
        this.wiki = tcg.data;
        this.cardsBan = tcg.data.filter((info: any) => {
          return info.banlist_info.ban_tcg == 'Banned'
        })
        this.cardsLim = tcg.data.filter((info: any) => {
          return info.banlist_info.ban_tcg == 'Limited'
        })
        this.cardsSemLim = tcg.data.filter((info: any) => {
          return info.banlist_info.ban_tcg == 'Semi-Limited'
        })
      }
    })
  }

  ngOnInit(): void {
    this.isLogin = this.login.isLoggin();
    this.user = this.login.getUser();
  }
}

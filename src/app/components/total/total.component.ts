import { Component, Input, OnInit } from '@angular/core';
import { TotalService } from '../../services/total.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  constructor(public total: TotalService) { }

  ngOnInit(): void {
  }

}

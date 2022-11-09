import { Component, OnInit } from '@angular/core';
import { StructuresService } from 'src/app/services/structures.service';

@Component({
  selector: 'app-expansions',
  templateUrl: './expansions.component.html',
  styleUrls: ['./expansions.component.css']
})
export class ExpansionsComponent implements OnInit {

  structureList: any = [];
  constructor(private structures:StructuresService) { 
    structures.getStructures().subscribe(data => {
      this.structureList = data;
    })
  }

  ngOnInit(): void {
    this.structures.getStructures().subscribe(data => {
      this.structureList = data;
    })
  }

}

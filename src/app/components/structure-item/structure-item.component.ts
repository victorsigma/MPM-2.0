import { Component, Input, OnInit } from '@angular/core';
import { StructuresService } from 'src/app/services/structures.service';
import { StructureModalService } from '../../services/structure-modal.service';
import { Structure } from '../../models/Structures';

@Component({
  selector: 'app-structure-item',
  templateUrl: './structure-item.component.html',
  styleUrls: ['./structure-item.component.css']
})
export class StructureItemComponent implements OnInit {

  @Input() structure: Structure = new Structure();
  constructor(private structures:StructuresService, private structureModal:StructureModalService) { }

  ngOnInit(): void {
  }

  structureData() {
    this.structureModal.setStructureMoData(this.structure);
  }
}

import { Injectable } from '@angular/core';
import { Structure } from '../models/Structures';

@Injectable({
  providedIn: 'root'
})
export class StructureModalService {

  private structureModalData: Structure = new Structure();
  constructor() { }

  public setStructureMoData(structure: any) {
    this.structureModalData = structure;
  }

  public getStructureMoData(): Structure {
    return this.structureModalData;
  }
}

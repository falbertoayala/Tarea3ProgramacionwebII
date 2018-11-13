import { Component, OnInit } from '@angular/core';
import { Inventario } from '../shared/models/inventario';
import { InventarioMocks } from '../shared/inventario-mocks';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  inventario : Array<Inventario>;
  categoria : string[];
  productoselect : Inventario;
  constructor() { }

  ngOnInit() {

    this.inventario= InventarioMocks;
    this.categoria = ["Equipo de computo","Suministros"]
    
  }
  onSelect(inventario:Inventario){
    this.productoselect =inventario;

  }
  onClick(inventario : Inventario) {
    this.productoselect = inventario;
  }

  restaInventario(){
    this.productoselect.cantidad -=1;
  }
  sumaInventario(){
    this.productoselect.cantidad +=1;
  }
  salvarInventario(){
    this.productoselect = null;
  }

}

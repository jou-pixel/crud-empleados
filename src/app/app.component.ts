import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-empleados';
msg='';
  empleados=[
    {name:'Hugo',position:'Programador Jr.',salary:10000,age:15,sex:'M'},
    {name:'Paco',position:'Programador Sr.',salary:15000,age:18,sex:'M'},
    {name:'Luis',position:'Administrador Red',salary:40000,age:21,sex:'M'}
  ]

  modelo:any={};
  index:number=0;


  addEmpleado():void{
    //Permite agregar un empleado al arreglo de empleados
    this.empleados.push(this.modelo);
    this.modelo={};
    console.log(this.empleados);
    this.msg='empleado agregado!';
  
  deleteEmpleado():void{
    //Permite eliminar un empleado del arreglo de empleados
    this.empleado.splice(i,1);


  }
myValue:number=0;
  editEmpleado(i:number):void{
    //Permite seleccionar un empleado del arreglo de empleados para su actualización
    this.modelo2.
  }

  updateEmpleado():void{
    //Permite actualizar un empleado en el arreglo de empleados

  }



}

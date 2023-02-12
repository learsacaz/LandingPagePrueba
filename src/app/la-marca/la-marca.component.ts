import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-la-marca',
  templateUrl: './la-marca.component.html',
  styleUrls: ['./la-marca.component.css']
})
export class LaMarcaComponent implements OnInit {

  public formSuscripcion = new FormGroup({
    nombre: new FormControl(),
    correo: new FormControl(),
    tipoDocumento: new FormControl(),
    numeroDocumento: new FormControl(),
    telefono: new FormControl(),
    aceptaTyC: new FormControl()
  });
  public popUpValid:boolean = false;
  public popUpInvalid:boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.formSuscripcion = this.formBuilder.group({
      nombre: ['',Validators.required],
      correo: ['',Validators.required],
      tipoDocumento: ['',Validators.required],
      numeroDocumento: ['',Validators.required],
      telefono: ['',Validators.required],
      aceptaTyC: ['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

  suscribir(){
    if(this.formSuscripcion.valid){
      this.popUpValid = true;
      setTimeout(()=>this.popUpValid = false,4000);

      console.log("ENVIADO");
      this.formSuscripcion = this.formBuilder.group({
        nombre: ['',Validators.required],
        correo: ['',Validators.required],
        tipoDocumento: ['',Validators.required],
        numeroDocumento: ['',Validators.required],
        telefono: ['',Validators.required],
        aceptaTyC: ['',Validators.required]
      });
      
    }else{
      console.log("faltaron datos: "+this.formSuscripcion.status);
      this.popUpInvalid = true;
      setTimeout(()=>this.popUpInvalid = false,4000);
    }
  }

}

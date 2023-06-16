import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../../services/user.service';
import { Administrador } from '../../models/administradorModel';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  selectedDisp?: string;
  selectedRol?: string;

  userForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    cedula: new FormControl(''),
    rol: new FormControl(''),
    disponibilidad: new FormControl(''),
    clave: new FormControl('')
  })

  constructor(private userService: AdminService) {
  }

  id: Number = 0;
  nombre: string = '';
  rol: any = this.userForm.value.rol;
  disponibilidad: any = this.userForm.value.disponibilidad;
  clave: string = '';
  cedula: string = '';

  borrarCampos() {
    this.userForm.reset();
  }
  ngOnInit(): void {
    
  }
  onSubmit() {
    var bus = new Administrador(
      this.id,
      this.nombre,
      this.cedula,
      this.disponibilidad,
      this.rol,
      this.clave
    )
    console.log(bus);
    this.userService.guardarUser(bus).subscribe(() => {
      this.borrarCampos();
      window.location.reload();
    }), (error: any) => {
      console.log(error)
    }
  }
}

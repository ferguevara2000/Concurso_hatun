import { Component } from '@angular/core';
import { Administrador } from '../../models/administradorModel';
import { Router } from '@angular/router';
import { AdminService } from '../../services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  sideNavStatus: boolean = false
  data: Administrador[] = []
  listFields: string[] = ['nombre','cedula','rol','disponibilidad','clave']
  
  columns: any[] = [
    { field: 'nombre', title: 'Nombre' },
    { field: 'cedula', title: 'Cedula' },
    { field: 'rol', title: 'Rol' },
    { field: 'disponibilidad', title: 'Disponibilidad' },
    { field: 'clave', title: 'Clave' },
     ];

     constructor(private userService: AdminService,
      private router: Router) {
    }
    ngOnInit(): void {
      this.loadData()
    }
  
    loadData() {
      this.userService.listaUsers().subscribe(data => {
        this.data = data
        console.log(data)
      }), (error: any) => {
        console.log('se imprime error' + error)
      }
    }
    deleteData(rowId: Number) {
      this.userService.eliminarUser(rowId).subscribe(() => {
        this.loadData();
      });
    }
    abrir(IdBus: Number) {
      this.router.navigate(['/asientos/'+IdBus])
    }
}

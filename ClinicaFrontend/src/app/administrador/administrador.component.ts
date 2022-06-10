import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../Service/usuario/usuario.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  nombrePersona = '';
  correoPersona: string | null = '';
  constructor(private usuarioService: UsuarioService) {
    this.correoPersona = localStorage.getItem('currentUser');
    this.usuarioService.getAllUsuario().subscribe((datau: any) => {
      for (let i = 0; i < datau.length ; i++) {
        let correoE = '"' + datau[i].correo + '"';
        if (this.correoPersona === correoE){
          this.nombrePersona = datau[i].nombre + ' ' + datau[i].apellido;
        }
      }
    });
  }

  ngOnInit(): void {
  }

}

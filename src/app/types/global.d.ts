export {};

declare global {

  type Usuario = {
    name: string;
    dni: string;
    email: string;
    tlf: string;
  };

  type Curso = {
    nombre: string;
    descripcion: string;
    autor: string;
    precio: number;
  };

  type Compra = {
    usuario: Usuario;
    curso: Curso;
    pecio: number; 
  };

  type TokenUsuario={
    usuario: Usuario;
    token: string;
  }

  type Status = {
    status: string;
  };

  type ErrorApi = {
    error: string;
  };

}
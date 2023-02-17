export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */

  type Usuario = {
    name: string;
    dni: string;
    email: string;
    tlf: string;
  };
  type UsuarioRegister = {
    usuario: Usuario;
    password: string;
    confirmPassword:string;
    };

  type UsuarioLogin = {
    usuario: Usuario;
    token: string;
  };

  type Curso = {
    nombre: string;
    descripcion: string;
    autor: string;
    precio: number;
  };
}
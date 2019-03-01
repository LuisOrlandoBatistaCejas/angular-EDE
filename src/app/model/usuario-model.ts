export class UsuariosModel {
  id: string;
  personaId: string;
  empresaRuc: string;
  rolId: string;
  clave: string;
  constructor(id: string, personaId: string, empresaRuc: string, rolId: string, clave: string) {
    this.id = id;
    this.personaId = personaId;
    this.empresaRuc = empresaRuc;
    this.rolId = rolId;
    this.clave = clave;
  }
}

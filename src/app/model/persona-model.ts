export class PersonaModel {
  id: number;
  tipoIdenId: number;
  identificacion: string;
  razonSocial: string;
  nombreComercial: string;
  telefonos: string;
  email: string;
  direccion: string;
  formaCancelacionId: string;
  activo: boolean;
  constructor(
    id: number, tipoIdenId: number, identificacion: string, razonSocial: string, nombreComercial: string,
    telefonos: string, email: string, direccion: string, formaCancelacionId: string, activo: boolean) {
    this.id = id;
    this.tipoIdenId = tipoIdenId;
    this.identificacion = identificacion;
    this.razonSocial = razonSocial;
    this.nombreComercial = nombreComercial;
    this.telefonos = telefonos;
    this.email = email;
    this.direccion = direccion;
    this.formaCancelacionId = formaCancelacionId;
    this.activo = activo;
  }
}

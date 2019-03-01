export class EmpresaModel {
  ruc: string;
  razonSocial: string;
  nombreComercial: string;
  telefonos: string;
  email: string;
  direccion: string;
  activo: boolean;
  codigoContribuyenteEspecial: string;
  contabilidadObligado: boolean;
  constructor(
    ruc: string, razonSocial: string, nombreComercial: string, telefonos: string, email: string,
    direccion: string, activo: boolean, codigoContribuyenteEspecial: string, contabilidadObligado: boolean) {
    this.ruc = ruc;
    this.razonSocial = razonSocial;
    this.nombreComercial = nombreComercial;
    this.telefonos = telefonos;
    this.email = email;
    this.direccion = direccion;
    this.activo = activo;
    this.codigoContribuyenteEspecial = codigoContribuyenteEspecial;
    this.contabilidadObligado = contabilidadObligado;
  }
}

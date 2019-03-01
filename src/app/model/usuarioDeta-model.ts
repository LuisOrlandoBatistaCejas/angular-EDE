export class UsuarioDetaModel {
  serie: string;
  empresaRuc: string;
  usuarioId: string;
  tipoCompId: string;
  constructor(serie: string, empresaRuc: string, usuarioId: string, tipoCompId: string) {
    this.serie = serie;
    this.empresaRuc = empresaRuc;
    this.usuarioId = usuarioId;
    this.tipoCompId = tipoCompId;
  }
}

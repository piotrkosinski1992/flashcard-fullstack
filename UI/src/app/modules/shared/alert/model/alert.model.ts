export class Alert {

  type: AlertType;
  message: string;

  constructor(type: AlertType, message: string) {
    this.type = type;
    this.message = message
  }
}

export enum AlertType {
  Success = 'alert alert-success',
  Error = 'alert alert-danger',
  Info = 'alert alert-info',
  Warning = 'alert alert-warning'
}

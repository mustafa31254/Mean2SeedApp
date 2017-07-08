import { Error } from './../Models/ErrorModel';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ErrorService {
errorEvent = new EventEmitter<Error>();

  constructor() { }
getError(error: any) {
  const extractError = new Error(error.title, error.error.message );
  this.errorEvent.emit(extractError);
}
}

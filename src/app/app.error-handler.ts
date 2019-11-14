<<<<<<< HEAD
import {Response} from '@angular/http';
import {Observable} from 'rxjs';

export class ErrorHandler {
  static handleError(error: Response | any  ){
    let errorMessage: string
    if(error instanceof Response){
      errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
    }else {
      errorMessage = error.toString()
    }
    console.log(errorMessage)
    return Observable.throw(errorMessage)

  }
}
=======
import {Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

export class ErrorHandler{

  static handleErro(error: Response | any ){
      let errorMessage: string
      if(error instanceof Response){
        errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
      } else {
        errorMessage = error.toString()
      }
      console.log(errorMessage)
      return Observable.throw(errorMessage)
  }
}

>>>>>>> 1c164a0cbcf833dfb5cf3841747525230a7f05c6

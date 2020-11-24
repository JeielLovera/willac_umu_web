import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UploadService {

  WILLAC_UMU_API: string = 'http://localhost:8000';

  constructor( private storage: AngularFireStorage, private http: HttpClient) { 
  }

  public upload(file: any, filename: string) {
    return this.storage.ref(`files/${filename}`).put(file);
  }

  public getDataToTraining(filename: string) {
    return this.http.get('http://localhost:8000/training/'+filename).pipe(map( (resp:any) => {return resp.filename} ));
  }

  public getDataToPredict(filename: string){
    return this.http.get(`${this.WILLAC_UMU_API}/predict/${filename}`).pipe(map( (resp:any) => {return resp.filename} ));
  }

  public postWeigthsBias(filename: string) {
    return this.http.post('http://localhost:8000/training/'+filename, filename).pipe(map( (resp:any)  => { return resp } ));
  }

  public postPrediction(id: string, filename: string) {
    return this.http.post(`${this.WILLAC_UMU_API}/predict/${id}/${filename}`, {}, {params: { id: id, filename: filename}} ).pipe(map( (resp:any) => {return resp.filename} ));
  }

  public getImgError(filename: string) {
    return this.storage.ref(`files/${filename}`).getDownloadURL();
  }

  public download(filename: string) {
    return this.storage.ref(`files/${filename}`).getDownloadURL();
  }

}

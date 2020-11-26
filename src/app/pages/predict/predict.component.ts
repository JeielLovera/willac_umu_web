import { Component, Inject, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {
  fileSeleccionado: File = null;
  fileUrl: any;
  state: number = 0;
  noTraining: boolean

  constructor( private uploadService: UploadService, @Inject(DOCUMENT) private document: Document ) {
    this.noTraining = false;
    this.state = 0;
   }

  ngOnInit(): void {
    this.noTraining = false;
    this.state = 0;
  }

  onFileSelected(event) {
    this.fileSeleccionado = <File> event.target.files[0];
  }

  Predict() {
    let id_wb = sessionStorage.getItem('id_wb');

    if(id_wb != null) {
      this.state = 1;
      this.uploadService.upload(this.fileSeleccionado, this.fileSeleccionado.name).then( () => {
        this.uploadService.getDataToPredict(this.fileSeleccionado.name).subscribe( (response:any) => {
          this.uploadService.postPrediction(id_wb, response).subscribe( (resp:any) => {
            this.uploadService.download(resp).subscribe( (r:any) => {
              this.fileUrl = r;
              this.state = 2
              this.noTraining = false;
            });
          });
        });
      });
    }
    else{
      this.state = 0;
      this.noTraining = true;
      console.log(this.noTraining);
      return;
    }
    
  }
  
  downloadFormat(): void{
    this.document.location.href = "https://firebasestorage.googleapis.com/v0/b/willacumufiles.appspot.com/o/files%2Fformat_prediction_file.csv?alt=media&token=2928561c-3d39-45d5-91e5-6935046bbc7a";
  }

}

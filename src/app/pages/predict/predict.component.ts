import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';

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

  constructor( private uploadService: UploadService) {
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

}

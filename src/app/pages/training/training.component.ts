import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  test : Date = new Date();
  focus;
  focus1;

  fileSeleccionado: File = null;
  imagename: string;
  state: number = 0;
  imgUrl: any;

  constructor( public uploadService: UploadService) { 
    
  }

  onFileSelected( event) {
    this.fileSeleccionado = <File> event.target.files[0];
  }


  Training(){
    this.state = 1;
    this.uploadService.upload(this.fileSeleccionado, this.fileSeleccionado.name).then( () => {
      this.uploadService.getDataToTraining(this.fileSeleccionado.name).subscribe( (resp:any) => {
        this.uploadService.postWeigthsBias(resp).subscribe( (r:any) => { 
          this.imagename = r.img_error;
          sessionStorage.setItem('id_wb', r.id_weightsbias);
          this.state = 2;
        });
      });
    }); 
  }

  ngOnInit(): void {
  }

}

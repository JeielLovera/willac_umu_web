import { Component, Inject, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  test : Date = new Date();
  focus;
  focus1;
  formatFileUrl: string
  fileSeleccionado: File = null;
  imagename: string;
  state: number = 0;

  constructor( public uploadService: UploadService, @Inject(DOCUMENT) private document: Document ) { 
    
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

  downloadFormat(): void{
    this.document.location.href = "https://firebasestorage.googleapis.com/v0/b/willacumufiles.appspot.com/o/files%2Fformat_file.csv?alt=media&token=767b17d8-2790-4859-a8d2-60e835f7c4a8";
  }

  ngOnInit(): void {
  }

}

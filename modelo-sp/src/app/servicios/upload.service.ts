import { Injectable } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private data: DataService) { }

  upload(data){
    return this.data.upload('uploadFotoPerfil', data);
  }

}

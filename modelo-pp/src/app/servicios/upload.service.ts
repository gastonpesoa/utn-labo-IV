import { Injectable } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';


// const URL = '/api/';
const URL = 'http://localhost:80/LaComanda/public/uploadfile';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  constructor() {
    this.uploader = new FileUploader({ url: URL });
    this.uploader.onAfterAddingFile = (fileItem) => {
      fileItem.withCredentials = false;
      console.log(fileItem); // fileItem is the file object
    };
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
    console.info("e", this.hasBaseDropZoneOver);
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http: HttpClient) { }

  postFile(fileToUpload: File, defectId: number){
    const fd = new FormData();
    fd.append('Image', fileToUpload, fileToUpload.name)
    fd.append('DefectID', defectId.toString());

    return this.http.post(environment.rootURL, fd);
  }
}

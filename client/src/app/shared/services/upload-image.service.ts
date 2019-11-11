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
    console.log(fileToUpload);
    fd.append('Image', fileToUpload, fileToUpload.name)
    fd.append('idDefect', defectId.toString());

    return this.http.post(environment.rootURL + '/images', fd);
  }

  getFile(){
    return this.http.get(environment.rootURL+'/images');
  }

  getFileByDefectId(defectId){
    return this.http.get(environment.rootURL + '/images/' + defectId + '/defect');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DigipayrollServiceService {
  public baseURL = "http://103.133.214.197/DigiPayroll";   
  // http://103.133.214.197/DigiPayroll/Master/GetCostCenter
  constructor(private http: HttpClient  ) { }

 

  public GetPayGroup() {
    debugger
    let APIURL = this.baseURL+"Master/GetPayGroup";
    return this.http.get<any[]>(APIURL);
  }

  public InsertPayGroup(json:any) {
    debugger
    let APIURL = this.baseURL+"Master/InsertPayGroup";
    return this.http.post<any[]>(APIURL, json);
  }

  public UpdatePayGroup(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdatePayGroup";
    return this.http.post<any[]>(APIURL, json);
  }

  public InsertCompanyProfile(json : any) {
    debugger
    let APIURL = this.baseURL + "Master/InsertCompany_Profile";
    return this.http.post<any[]>(APIURL,json);
  }


  public UpdateCompanyProfile(json : any) {    //not yet done
    debugger
    let APIURL = this.baseURL + "Master/UpdateCompanyProfile";
    return this.http.post<any[]>(APIURL,json);
  }

  // public DeleteFoodSenseProject(json : any) {              MasterEntity 
  //   debugger
  //   let APIURL = this.baseURL + "Master/DeleteFoodSenseProject";
  //   return this.http.post<any[]>(APIURL,json);
  // }

    public DeleteCompanyProfile_id(id : any) {
    debugger
    let APIURL = this.baseURL + "Master/DeleteCompanyProfile?ID="+id;
    return this.http.get<any[]>(APIURL);
    }
    
  public DeletePayGroup(ID : any) {
    debugger
    
    return this.http.get<any[]>(this.baseURL+ "Master/DeletePayGroup?ID=" +ID);
  }



  public GetCostCenter() {
    debugger
    let APIURL = this.baseURL + "Master/GetCostCenter";
    return this.http.get<any[]>(APIURL);
  }

  public InsertCostCenter(json : any) {
    debugger
    let APIURL = this.baseURL + "Master/InsertCostCenter";
    return this.http.post<any[]>(APIURL,json);
  }

  public UpdateCostCenter(json : any) {    //not yet done
    debugger
    let APIURL = this.baseURL + "Master/UpdateCostCenter";
    return this.http.post<any[]>(APIURL,json);
  }

  
  public AttachmentsUpload(files: any) {
    debugger
    let formdata: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formdata.append('file_upload', files[i], files[i].name);
    }
    debugger
    let APIURL = this.baseURL + "Master/UploadImages/";
    return this.http.post(APIURL, formdata);

  }

}



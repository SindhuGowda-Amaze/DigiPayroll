import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DigipayrollServiceService {
  public baseURL = "http://103.133.214.197/DigiPayroll/";   
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

  
  public GetCompanyProfile() {
    debugger
    let APIURL = this.baseURL+"Master/GetPayGroup";
    return this.http.get<any[]>(APIURL);
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



  public GetCostCenter() {
    debugger
    let APIURL = this.baseURL + "Master/GetCostcenter";
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

  public DeleteCostCenter(id : any) {
    debugger
    let APIURL = this.baseURL + "Master/DeleteCostCenter?ID="+id;
    return this.http.get<any[]>(APIURL);
  }


  public GetDepartment() {
    debugger
    let APIURL = this.baseURL + "Master/GetDepartment";
    return this.http.get<any[]>(APIURL);
  }

  public InsertDepartment(json : any) {
    debugger
    let APIURL = this.baseURL + "Master/InsertDepartment";
    return this.http.post<any[]>(APIURL,json);
  }

  public UpdateDepartment(json : any) {    //not yet done
    debugger
    let APIURL = this.baseURL + "Master/UpdateDepartment";
    return this.http.post<any[]>(APIURL,json);
  }

  public DeleteDepartment(id : any) {
    debugger
    let APIURL = this.baseURL + "Master/DeleteDepartment?ID="+id;
    return this.http.get<any[]>(APIURL);
  }

  public GetBanks() {
    debugger
    let APIURL = this.baseURL + "Master/GetBanks";
    return this.http.get<any[]>(APIURL);
  }

  public InsertBanks(json : any) {
    debugger
    let APIURL = this.baseURL + "Master/InsertBanks";
    return this.http.post<any[]>(APIURL,json);
  }

  public UpdateBanks(json : any) {    //not yet done
    debugger
    let APIURL = this.baseURL + "Master/UpdateBanks";
    return this.http.post<any[]>(APIURL,json);
  }

  public DeleteBanks(id : any) {
    debugger
    let APIURL = this.baseURL + "Master/DeleteBanks?ID="+id;
    return this.http.get<any[]>(APIURL);
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



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DigipayrollServiceService {
  public baseURL = "http://103.133.214.197/DigiPayrollAPI";   
  
  constructor(private http: HttpClient  ) { }


  public GetCompanyProfile() {
    debugger
    let APIURL = this.baseURL + "Master/GetCompanyProfile";
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

    public DeleteFoodSenseProject_id(id : any) {
    debugger
    let APIURL = this.baseURL + "Master/DeleteFoodSenseProject?ID="+id;
    return this.http.get<any[]>(APIURL);
  }
}



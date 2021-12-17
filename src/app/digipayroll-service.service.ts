import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DigipayrollServiceService {
  public baseURL = "http://103.133.214.197/DigiPayrollAPI";   

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

  public DeletePayGroup(ID : any) {
    debugger
    
    return this.http.get<any[]>(this.baseURL+ "Master/DeletePayGroup?ID=" +ID);
  }




}



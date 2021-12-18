import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DigipayrollServiceService {

  // public baseURL = "http://localhost:4199/";   
  public baseURL = "http://103.133.214.197/DigiPayroll/";
 
  constructor(private http: HttpClient  ) { }

  public GetPhilHealth() {
    debugger
    let APIURL = this.baseURL+"Master/GetPhilHealth";
    return this.http.get<any[]>(APIURL);
  }

  public InsertPhilHealth(json:any){
    let APIURL=this.baseURL+"Master/InsertPhilHealth";
    return this.http.post<any[]>(APIURL,json);
  }

  public UpdatePhilHealth(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdatePhilHealth";
    return this.http.post<any[]>(APIURL, json);
  }

  public DeletePhilHealth(ID : any) {
    debugger
    
    return this.http.get<any[]>(this.baseURL+ "Master/DeletePhilHealth?ID=" +ID);
  }


  public GetSSS() {
    debugger
    let APIURL = this.baseURL+"Master/GetSSS";
    return this.http.get<any[]>(APIURL);
  }

  public InsertSSS(json:any) {
    debugger
    let APIURL = this.baseURL+"Master/InsertSSS";
    return this.http.post<any[]>(APIURL, json);
  }

  public UpdateSSS(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateBanks";
    return this.http.post<any[]>(APIURL, json);
  }

  public DeleteSSS(ID : any) {
    debugger
    
    return this.http.get<any[]>(this.baseURL+ "Master/DeleteSSS?ID=" +ID);
  }

   
  public GetCompanyAdjustment() {
    debugger
    let APIURL = this.baseURL+"Master/GetCompanyAdjustment ";
    return this.http.get<any[]>(APIURL);
  }

  public InsertCompanyAdjustment(json:any){
    let APIURL=this.baseURL+"Master/InsertCompanyAdjustment";
    return this.http.post<any[]>(APIURL,json);
  }

  public UpdateCompanyAdjustment(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateCompanyAdjustment";
    return this.http.post<any[]>(APIURL, json);
  }

  public DeleteCompanyAdjustment(ID : any) {
    debugger
    
    return this.http.get<any[]>(this.baseURL+ "Master/DeleteCompanyAdjustment?ID=" +ID);
  }

  public GetOTRates() {
    debugger
    let APIURL = this.baseURL+"Master/GetOTRates ";
    return this.http.get<any[]>(APIURL);
  }

  public InsertOTRates(json:any){
    let APIURL=this.baseURL+"Master/InsertOTRates";
    return this.http.post<any[]>(APIURL,json);
  }

  public UpdateOTRates(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateOTRates";
    return this.http.post<any[]>(APIURL, json);
  }

  public DeleteOTRates(ID : any) {
    debugger
    
    return this.http.get<any[]>(this.baseURL+ "Master/DeleteOTRates?ID=" +ID);
  }


  public GetTaxtable() {
    debugger
    let APIURL = this.baseURL+"Master/GetTaxtable ";
    return this.http.get<any[]>(APIURL);
  }

  public UpdateTaxtable(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateTaxtable";
    return this.http.post<any[]>(APIURL, json);
  }




  public GetCompanyProfile() {
    debugger
    let APIURL = this.baseURL+"Master/GetCompanyProfile";
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


  public GetMyAttendenceDetails() {
    debugger
    let APIURL = this.baseURL + "Master/GetMyAttendenceDetails";
    return this.http.get<any[]>(APIURL);
  }

  public GetMyOverTimeDetails() {
    debugger
    let APIURL = this.baseURL + "Master/GetMyOverTimeDetails";
    return this.http.get<any[]>(APIURL);
  }



}



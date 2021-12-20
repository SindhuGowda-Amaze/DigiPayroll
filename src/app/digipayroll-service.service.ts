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
  public GetAdjustment() {
    debugger
    let APIURL = this.baseURL + "Master/GetAdjustment";
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
  
  public GetRegularization() {
    debugger
    let APIURL = this.baseURL+"Master/GetRegularization";
    return this.http.get<any[]>(APIURL);
  }

  public GetMyWeeklyShift() {
    debugger
    let APIURL = this.baseURL+"Master/GetMyWeeklyShift";
    return this.http.get<any[]>(APIURL);
  }

  
  public GetUserDetails() {
    debugger
    let APIURL = this.baseURL+"Master/GetUserDetails";
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
    let APIURL = this.baseURL + "Master/DeleteCompanyAdjustment";
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
  public DeleteUserDetails(id: any) {
    debugger
    let APIURL = this.baseURL + "Master/DeleteUserDetails?ID=" + id;
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

  public GetPayGroup() {
    debugger
    let APIURL = this.baseURL + "Master/GetPayGroup";
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



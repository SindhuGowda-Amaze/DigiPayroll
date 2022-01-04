import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate-of-contribution',
  templateUrl: './certificate-of-contribution.component.html',
  styleUrls: ['./certificate-of-contribution.component.css']
})
export class CertificateOfContributionComponent implements OnInit {
  showsss:any;
  showPhilhealth:any;
  showPagibig:any;
  constructor() { }

  ngOnInit(): void {
    this.showsss = 0;
    this.showPhilhealth=0;
  }


  public showssspdf(){
    this.showsss = 1;
    this.showPhilhealth = 0;
    this.showPagibig = 0;
  }

  public showphilhealthpdf(){
    this.showPhilhealth = 1;
    this.showsss = 0;
    this.showPagibig = 0;
  }
  public showpagibigpdf(){
    this.showPagibig = 1;
    this.showPhilhealth = 0;
    this.showsss = 0;
  }




}

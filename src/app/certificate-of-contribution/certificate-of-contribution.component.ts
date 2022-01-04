import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate-of-contribution',
  templateUrl: './certificate-of-contribution.component.html',
  styleUrls: ['./certificate-of-contribution.component.css']
})
export class CertificateOfContributionComponent implements OnInit {
  showleaseforprint:any;
  constructor() { }

  ngOnInit(): void {
    this.showleaseforprint = 0;
  }


  public showpdf(){
    this.showleaseforprint = 1;
  }


}

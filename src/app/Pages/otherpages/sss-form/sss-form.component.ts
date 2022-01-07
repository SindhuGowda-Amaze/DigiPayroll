import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sss-form',
  templateUrl: './sss-form.component.html',
  styleUrls: ['./sss-form.component.css']
})
export class SssFormComponent implements OnInit {

  result: any;
  id: any;

  constructor(private DigipayrollServiceService: DigipayrollServiceService, private ActivatedRoute: ActivatedRoute) { }

  

  ngOnInit(): void {
 
  }

  
 


 

 
}

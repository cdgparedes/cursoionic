import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private dataService: DataService) { }
  
  usuarios: Observable<any>;
  
  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios();
  }

}

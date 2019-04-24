import { Funcionario } from '../../models/func';
import { Component, OnInit } from '@angular/core';
import { FuncService } from '../../services/func.service';


@Component({
  selector: 'app-func-list',
  templateUrl: './func-list.component.html',
  styleUrls: ['./func-list.component.css']
})
export class FuncListComponent implements OnInit {

  funcionarios: Funcionario[];
  searchText;

  constructor(private funcSevice: FuncService) { }

  ngOnInit() {
    this.funcSevice.getFuncionarios().subscribe(
      dados => this.funcionarios = dados.user
     // res => console.log(res),
     // err => console.error(err)
    );
  }

}

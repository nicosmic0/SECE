import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '@app/core/_models';
import { AccountService } from '@app/core/_services';
import { CreateSecretarioComponent } from '../create-secretario/create-secretario.component';

@Component({
  selector: 'app-crud-secretario',
  templateUrl: './crud-secretario.component.html',
  styleUrls: ['./crud-secretario.component.less']
})
export class CrudSecretarioComponent implements OnInit {
  secretarios!: User[];

  constructor(
    private accountService: AccountService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getSecretarios();
  }

  getSecretarios(){
    this.accountService.getAllSecretarios().subscribe(secretarios => {
      this.secretarios = secretarios;
    })
  }

  deleteSecretario(id: string){
    this.accountService.delete(id).subscribe(resp => console.log(resp));
    this.getSecretarios();
  }

  openCreateCarreraDialog(){
    const dialogRef = this.dialog.open(CreateSecretarioComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getSecretarios();
    });
  }

}

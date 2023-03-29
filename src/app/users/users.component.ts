import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteConfirmationComponent } from '../Dialogs/delete-confirmation/delete-confirmation.component';
import { User } from '../models/user.model';
import { UsersService } from './users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  displayedColumns: string[] = ['email', 'actions'];
  users : User[] = [];

  constructor(private userService: UsersService,
    public dialog: MatDialog,
    private router: Router,
    ){}

  ngOnInit(){
    this.fetchUsers();
  }

  fetchUsers(){
    this.userService.fetchUsers().subscribe(userData => {
      this.users = userData.users;
    });
  }

  onDelete(id:string){
    this.openDialog(id);
  }

  deleteUser(id: string){
    this.userService.deleteUser(id).subscribe(() => {
      this.fetchUsers();
    })
  }

  openDialog(id: string): void {
    let dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '400px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
      result === 'Y' ? this.deleteUser(id) : dialogRef.close();
    });
  }

  onEdit(id:string){
    this.router.navigate(['/users/add-user'], {queryParams: {id: id}});
  }
}

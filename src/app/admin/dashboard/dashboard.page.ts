import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { TaskI } from '../../models/task.interface';
import { TodoService } from '../../servicios/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  todos: TaskI[];
  constructor(public authservice : AuthService, private todoService: TodoService) { }
  ngOnInit(){
    this.todoService.getTodos().subscribe((todos) =>{
      console.log('Todoss', todos);
      this.todos = todos;
    })
  }
  onRemove(idTask:string){
    this.todoService.removeTodo(idTask);
  }
  Onlogout(){
    this.authservice.logout();
  }
  irablog(e){
    let url= "/details/"+e;
    window.location.href = url;
  }
}

import { Component, OnInit } from '@angular/core';
import { TaskI } from '../models/task.interface';
import { TodoService } from '../servicios/todo.service';
import { ActivatedRoute} from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  todo: TaskI = {
    task: "",
    description: "",
    ingredientes: "",
    preparacion: "",
    notas: "",
    priority: 0,
    img: "",
  };
  todos: TaskI[];
  todoId= null;
  constructor(private route: ActivatedRoute, private todoService: TodoService, private loadingController: LoadingController) { }
  
  ngOnInit(){
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId){
      this.loadTodo();
    }  
    this.todoService.getTodos().subscribe((todos) =>{
      console.log('Todoss', todos);
      this.todos = todos;
    })
  }
  
  
  async loadTodo(){
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();
    this.todoService.getTodo(this.todoId).subscribe(todo => {
      loading.dismiss();;
      this.todo = todo;
    });
  }

  irablog(e){
    let url = "/blog/"+e;
    window.location.href = url;
  }

}
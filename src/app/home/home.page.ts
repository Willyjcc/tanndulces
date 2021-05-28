import { Component, OnInit, HostListener  } from '@angular/core';
import { TaskI} from '../models/task.interface';
import { TodoService } from '../servicios/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop:true,
  };
  todos: TaskI[];
  constructor(private todoService: TodoService) { }
  ngOnInit(){
    this.todoService.getTodos().subscribe((todos) =>{
      console.log('Todoss', todos);
      this.todos = todos;
    })
  }

  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView({behavior:"smooth"});
  }
  @HostListener("ionScroll", [])
  onWindowScroll() {
    let shand = document.getElementsByClassName('sticky') as HTMLCollectionOf<HTMLElement>;
    if (shand.length != 0) {
      shand[0].style.background = "#9c0332";
      shand[0].style.height = "90px";
    }
    let shand2 = document.getElementsByClassName('logo') as HTMLCollectionOf<HTMLElement>;
    if (shand2.length != 0) {
      shand2[0].style.display = "none";
    }
    let shand3 = document.getElementsByClassName('logo-sticky') as HTMLCollectionOf<HTMLElement>;
    if (shand3.length != 0) {
      shand3[0].style.display = "initial";
    }
  }

  irablog(e){
    let url = "/blog/"+e;
    window.location.href = url;
  }
}
import {Component, OnInit} from '@angular/core';
import {PostService} from './service/post.service';
import {Post} from './model/post.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Periodic App';
  posts: Post[] = [];
  selectedPost: Post;
  progressCount: number;
  isLoading = false;
  searchText: string;
  constructor(public postService: PostService, private modalService: NgbModal) {
    this.progressCount = 0;
  }

  getPosts() {
    setInterval(() => {
      this.progressCount += 5;
    }, 500);
    this.isLoading = true;
    this.posts = [];
    this.postService.getPosts().subscribe((res: any) => {
      this.progressCount = 100;
      res.hits.forEach((ele: any) => {
        this.posts.push(new Post(ele));
      });
      this.isLoading = false;
    });
  }

  open(content, data: Post) {
    this.selectedPost = data;
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  ngOnInit() {
    this.getPosts();
    setInterval(() => {
      this.getPosts();
    }, 10000);
  }
}

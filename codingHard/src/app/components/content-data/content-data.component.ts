import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-data',
  templateUrl: './content-data.component.html',
  styleUrls: ['./content-data.component.css','../style.css']
})
export class ContentDataComponent implements OnInit, OnDestroy {
  private subRoute;
  slug = "";
  constructor(private route:ActivatedRoute) { }

  ngOnInit(){
    this.subRoute = this.route.params.subscribe(params => {
        this.slug = params['slug']
    })
    
  }

  ngOnDestroy(){
    this.subRoute.unsubscribe()
    
  }

}

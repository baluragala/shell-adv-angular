import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "sh-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  title: string;
  qparams: object;
  fragment: string;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.log(this.route);
    this.title = this.route.snapshot.paramMap.get("title");
    this.qparams = this.route.snapshot.queryParams;
    this.fragment = this.route.snapshot.fragment;
  }

  gotoProducts() {
    this.router.navigate(["products"], {
      queryParams: {
        token: "eed"
      },
      fragment: "auth=222"
    });
  }
}

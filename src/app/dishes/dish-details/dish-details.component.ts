import { DishListService } from './../../dish-list.service';
import { Component, Input, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { Dish } from '../dish';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import { map } from 'rxjs';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  @Input() dish!: Dish;
  @Input() isActivePlus: boolean = false;
  @Input() isActiveMinus: boolean = false;
  @Input() nearToEnd: boolean = false;
  @Input() isMax!: number;
  @Input() isMin!: number;

  converter!: number;
  currency!: string;
  math = Math;
  cart!: number;
  stars = [1, 2, 3, 4, 5]
  rating = 1;
  hoverState = 0;
  dishes: Dish[] = []
  constructor(private data: ShoppingCartService,
    private route: ActivatedRoute,
    private router: Router,
    private dishesService: DishListService) {
  }

  ngOnInit(): void {
    this.data.currentConverter.subscribe(converter => this.converter = converter)
    this.data.currentCurrency.subscribe(currency => this.currency = currency)
    this.data.currentCart.subscribe(cart => this.cart = cart)
  }

  plus() {
    if (this.dish.ordersLimit > 0) {
      this.dish.ordersLimit -= 1;
      this.data.cartUpdate(this.cart + 1);
    }
  }

  minus() {
    if (this.dish.ordersLimit < this.dish.maxLimit) {
      this.dish.ordersLimit += 1;
      this.data.cartUpdate(this.cart - 1);
    }
  }

  onStarEnter(starID: number) {
    this.hoverState = starID;
  }
  onStarLeave() {
    this.hoverState = 0;
  }
  getDishesList() {
    this.dishesService.getDishesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.doc.id, ...c.payload.doc.data() }))
      )
    ).subscribe(dishes => {
      this.dishes = (<Dish[]>dishes);
    });
  }

  seeDetails() {
    this.dishesService.updatecurrentDish(this.dish);
    this.router.navigate(['/dishes/dish']);
    console.log("details of dish");
  }
}
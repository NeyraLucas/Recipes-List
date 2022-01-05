import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticaded = false;
  private userSub: Subscription;
  constructor(private dataStorageService: DataStorageService, private authService: AuthService){}

  ngOnInit() {
      this.userSub = this.authService.user.subscribe(user =>{
        this.isAuthenticaded = !!user;
        console.log(!user);
        console.log(!!user);
        
        
      });
  }

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }

  onFetchData(){
    this.dataStorageService.fetchrecipes().subscribe();
  }

  ngOnDestroy() {
      this.userSub.unsubscribe();
  }
}

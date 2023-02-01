import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { User } from '../models/user.model';
import { AppState } from '../../app.reducer';
import * as actions from '../user.actions';

@Component({
  selector: 'app-item-user',
  templateUrl: './item-user.component.html',
  styleUrls: ['./item-user.component.css']
})
export class ItemUserComponent implements OnInit {
  @Input() user!: User;
  @ViewChild('inputRef') txtInputRef!: ElementRef;

  checkStatus!: FormControl;
  nameInput!: FormControl;
  editing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.checkStatus = new FormControl( this.user.status );
    this.nameInput = new FormControl( this.user.name, Validators.required );
    this.checkStatus.valueChanges.subscribe(value => {
      console.log('Value?', value);
      this.store.dispatch(actions.toggleStatus({ id: this.user.id }))
    });
  }

  editName() {
    this.editing = true;
    this.nameInput.setValue(this.user.name);
    setTimeout(() => {
      this.txtInputRef.nativeElement.select();
    }, 1);
  }

  finishEdit() {
    this.editing = false;
    if (this.nameInput.invalid || this.nameInput.value === this.user.name) {
      return;
    }

    this.store.dispatch(actions.editUser({
      id: this.user.id,
      name: this.nameInput.value
    }))
  }

  deleteUser() {
    this.store.dispatch(actions.deleteUser({ id: this.user.id }));
  }
}

import { Component } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../user.actions';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
    nameInput: FormControl;

    constructor(private store: Store<AppState>) {
        this.nameInput = new FormControl('', Validators.required);
    }

    addUser() {
        console.log('Value?', this.nameInput.value);
        console.log('Valid?', this.nameInput.valid);
        if (this.nameInput.invalid) {
            return;
        }
        this.store.dispatch(actions.addUser({ name: this.nameInput.value }));
        this.nameInput.reset();
    }
}

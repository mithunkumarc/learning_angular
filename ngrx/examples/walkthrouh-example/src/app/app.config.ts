import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { provideHttpClient } from '@angular/common/http';
import { booksReducer } from './state/book.reducer';
import { collectionReducer } from './state/collection.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(), importProvidersFrom(
    StoreModule.forRoot({
      count: counterReducer, 
      books: booksReducer, 
      collection: collectionReducer})
  ), provideHttpClient()]
};

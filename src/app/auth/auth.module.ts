import { NgModule } from '@angular/core';
import { COMPONENT_DECLARATIONS, IMPORTED_MODULES, PROVIDERS_DECLARATIONS, COMPONENT_EXPORTS, BOOTSTRAP_DECLARATIONS } from './auth.common';

@NgModule({
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
  imports: [
    ...IMPORTED_MODULES
  ],
  providers: [
    ...PROVIDERS_DECLARATIONS
  ],
  exports: [
    ...COMPONENT_EXPORTS
  ],
  bootstrap: [
    ...BOOTSTRAP_DECLARATIONS
  ]
})
export class AuthModule { }

 import {LitElement, html} from 'lit';
 import {bootstrapStyles} from '@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js';


 export class HeaderElement extends LitElement {
   static get styles() {
     return [ 
         bootstrapStyles 
     ];
   }

 
   constructor() {
     super();
   }
 
   render() {
     return html`
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 class="my-0 mr-md-auto font-weight-normal">Properties WebApp</h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <a class="p-2 text-dark active" href="/views/home">Home</a>
                <a class="p-2 text-dark" href="/views/properties">Properties</a>
                <a class="p-2 text-dark" href="#">About Us</a>
                <a class="p-2 text-dark" href="#">Contact</a>
            </nav>
        </div>
     `;
   }
 }
 
 window.customElements.define('header-element', HeaderElement);
 
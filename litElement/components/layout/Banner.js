
 import {LitElement, html} from 'lit';
 import {bootstrapStyles} from '@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js';


 export class BannerElement extends LitElement {
   static get styles() {
     return [ 
         bootstrapStyles 
     ];
   }

   static get properties(){
       return {
           namePage:{
               type: String
           }
       };
   }

 
   constructor() {
     super();
   }
 
   render() {
     return html`
        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">${this.namePage}</h1>
                    <p class="lead text-muted">Test project in LitElement. You can check out the Polymer 2 version on my GitHub :)</p>
                    <p>
                        <a href="https://github.com/jairGomezRod/Polymer_Test" target="_blank" class="btn btn-secondary my-2">See in GitHub</a>
                    </p>
                </div>
            </div>
        </section>
     `;
   }
 }
 
 window.customElements.define('banner-element', BannerElement);
 
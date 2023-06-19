class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
            <footer class="text-white w-100 mt-5" style="background-color: #9A2929; ">
            <div class="row p-4 m-0">
                <div class="col-12 col-md-6">
                    <img src="../images/image 3.png" alt="logo" style="width: 20%;">
                    <img src="../images/image 4.png" alt="logo" style="width: 60%;">
                </div>
                <div class="col-12 col-md-6">
                    <h5 style="font-weight: 900;">Department Of Computer Science</h5>
                    <p>Address: Somaiya Ayurvihar Complex, Eastern Express Highway, Near Everard Nagar, Sion (East),
                        Mumbai, Maharashtra 400022</p>
                    <p>Phone: 022 2405 3333</p>
                </div>
            </div>
        <div class="row mt-4 m-0 text-center text-white p-2" style="background-color: #005AAB;">
            <p>Developed By: Divija Kinger, Viren Joshi, Shubh Joshi</p>
        </div>
        </footer>  
      `;
    }
  }

customElements.define('footer-component', Footer);
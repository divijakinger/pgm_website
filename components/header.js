class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-lg" style="background-color: #9A2929;">
      <div class="container-fluid text-white">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon text-white" ><i class="bi bi-list" style="color: white;"></i></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
          <a class="navbar-brand text-white" style="font-weight: 1000; font-size: x-large;" href="#">KJSIT</a>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" style="font-weight: 900; font-size:large;" href="#">Probabilistic Graphical Models</a>
            </li>
          </ul>
        </div>
      </div>
  </nav>
      `;
    }
  }

customElements.define('header-component', Header);
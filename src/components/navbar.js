import React from 'react'

const Navbar = () => (
  <React.Fragment>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark mb-5">
      <a class="navbar-brand text-white" href="/">CENIX</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-white" href="/products">Products<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/imports">Import CSVs</a>
          </li>
        </ul>
      </div>
    </nav>
  </React.Fragment>
)

export default Navbar;

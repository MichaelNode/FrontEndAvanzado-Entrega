
import 'styles/main.scss';
import 'styles/bootstrap.min.css';

export const makeHeader = () => {
  const header = document.createElement('header');
  header.innerHTML =`
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <h3>BlogCoding</h3>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Inicio<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
        </ul>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar">
          <button class="btn btn-info my-2 my-sm-0" type="submit">Buscar</button>
        </form>
      </div>
      <div>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link " href="#">CULTURE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">TECH</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">POLITICS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">DESING</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SCIENCE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">POPULAR</a>
          </li>
        </ul>
      </div>
    </nav>`;
  header.classList.add('header');
  return header
}

export default { 
  makeHeader
} 
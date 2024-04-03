
export const Siderbar = () => {
  return (
    <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

       
    <a className="d-flex align-items-center justify-content-center my-3" href="/">
        <div className="" style={{width : "80px"}}>
            <img width="100%" src="/images/logo.jpg" alt="Kitchening"/>
        </div>
    </a>

   
    <hr className="sidebar-divider my-0"/>

   
    <li className="nav-item active">
        <a className="nav-link" href="/">
            <span>Kitchening 2023</span></a>
    </li>

   
    <hr className="sidebar-divider"/>

  
   
    <li className="nav-item">
        <a className="nav-link collapsed" href="/resto">
            <i className="fas fa-fw fa-folder"></i>
            <span>Restaurantes</span>
        </a>
    </li>

   
    <li className="nav-item">
        <a className="nav-link" href="/clientes">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Clientes</span></a>
    </li>

   
    <li className="nav-item">
        <a className="nav-link" href="/reservas">
            <i className="fas fa-fw fa-table"></i>
            <span>Reservas</span></a>
    </li>

   
    <hr className="sidebar-divider d-none d-md-block"/>
</ul>
  )
}

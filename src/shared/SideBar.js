import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function SideBar() {

    const history = useHistory();
    const [user, ] = useState(JSON.parse(localStorage.getItem('auth')))


    const logout = () =>{
        localStorage.removeItem('auth');
        history.push({
            pathname: "/login",
        });
        setTimeout(() => window.location.reload(), 0);
    }
    return (
        <div>
            {
                <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{backgroundColor: "#1E1E2D"}}>
                    <Link to="/" className="brand-link">
                    <div className="nav-item has-treeview d-flex justify-content-evenly align-items-center ">
                                    <img alt="logo" src='logo.png' width='45' style={{borderRadius:"10px"}}/>
                                    <h4 style={{color:"white",fontFamily:'system-ui',borderBottom: '2px solid white',marginLeft: '5px'}} >PACKFAST</h4>
                    </div>
                    </Link>
                    <div className="sidebar">
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <ul className="nav nav-pills nav-sidebar flex-column" style={{width:'100%'}} data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item has-treeview">
                                    <Link to="#" className="nav-link">
                                        <img src={"https://gravatar.com/avatar/76a79ca27bbe07f95bb798168c6e7e1e?s=400&d=mp&r=x"} className="img-circle elevation-2" alt="UserImage" />
                                        <span className="brand-text font-weight-light" style={{marginLeft: '3%', fontSize: '18px'}}>
                                            {user?.username}
                                        </span>
                                        <i  onClick={()=>logout()} className="right fas fa-sign-out-alt" style={{float: 'right', marginTop: '2%',fontSize: '20px',color:'#fa4c07'}}/>
                                    </Link>
                                   </li>
                            </ul>
                        </div>
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        <i className="nav-icon fas fa-chart-bar" />
                                        <p>Dashboard</p>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/commandes" className="nav-link menu-item">
                                        <div>
                                        <i class="nav-icon fas fa-box-open"/>
                                        <p>Colis</p>
                                        </div>
                                    <i class="fas fa-chevron-right"></i>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/historique" className="nav-link menu-item">
                                    <div>

                                        <i class="nav-icon fas fa-truck"/>
                                        <p>Livraisons</p>
                                        </div>
                                    <i class="fas fa-chevron-right"></i>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/historique" className="nav-link menu-item">
                                    <div>

                                        <i class="nav-icon fas fa-map-marked-alt"/>
                                        <p>Adresses</p>
                                        </div>
                                    <i class="fas fa-chevron-right"></i>
                                    </Link>
                                </li>
                               {true && <li className="nav-item">
                                    <Link to="/configuration" className="nav-link">
                                    <i className="fas fa-exclamation-triangle"></i>
                                    <p>{' '}Reclamations</p>
                                    </Link>
                                </li>}
                            </ul>
                        </nav>
                    </div>
                </aside>
            }
        </div>
    )
}
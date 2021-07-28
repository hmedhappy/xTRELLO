import React from 'react'
import { Link } from 'react-router-dom'
import { DisappearedLoading } from 'react-loadingg';


export default function Header() {
  return (
    <>
      {/* Preloader */}
      <div className="preloader d-flex justify-content-center align-items-center" style={{backgroundColor:"#fff"}}>
        <img
          className="animation__shake"
          src="trelloLogo.png"
          alt="AdminLTELogo"
          height="auto"
          width={150}
        />
        <DisappearedLoading           style={{transform:'translateY(-35px) ! important'}}
/>
      </div>
      {/* Navbar */}
      <nav  style={{height:'55px'}} className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
          <li className="nav-item no-extra-margin">
            <Link
              className="nav-link"
              data-widget="pushmenu"
              to="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </Link>
          </li>
          
          <li className="nav-item hideXs  "  style={{borderRight: '1px solid #c3c3c3'}}>
            <Link
              className="nav-link no-extra-margin"
              data-widget="pushmenu"
              to="#"
              role="button"
            >
              <img alt='logoTrello' width="70" src="trelloLogo.png" />
            </Link>
          </li>
          <li className="nav-item hideXs" >
            <Link
              className="nav-link d-flex justify-content-between align-items-center"
              data-widget="pushmenu"
              to="/brackets"
              role="button"
            >
              <i class="fab fa-trello"></i>
              <span className="" style={{marginLeft:"4px"}}>{" "}Board</span> 
            </Link>
          </li>
          {/* Navbar Search */}
          <li className="nav-item">
            <Link
              className="nav-link"
              data-widget="navbar-search"
              to="#"
              role="button"
            >
              <i className="fas fa-search" />
            </Link>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
         
        </ul>

        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
           {/* Messages Dropdown Menu */}
          <li className="nav-item dropdown">
            <Link className="nav-link" data-toggle="dropdown" to="#">
            <i class="fas fa-plus-circle"></i>
            </Link>
           </li>    
           <li className="nav-item dropdown">
            <Link className="nav-link" data-toggle="dropdown" to="#">
            <i class="fas fa-info-circle"></i>
            </Link>
           </li>    
           <li className="nav-item dropdown">
            <Link className="nav-link" data-toggle="dropdown" to="#">
            <i class="fas fa-bell"></i>
            </Link>
           </li> 

           <li className="nav-item dropdown">
            <Link className="nav-link" data-toggle="dropdown" to="#">
            <img alt='userAvatar' src="http://s.gravatar.com/avatar/fe2fd4c489e52f7c243cbf4242203d53?s=80&amp;r=g&amp;s=60" style={{borderRadius:'50%',width:"35px"}}/>
            </Link>
           </li>   
        </ul>
      </nav>
      {/* /.navbar */}

      <style jsx>

        {`
      
      @media only screen and (max-width: 600px){
         .hideXs{
          display:none !important;
      }
      }
     
      .no-extra-margin{
        padding: 0;
        margin: 0;
        display: grid;
        place-content: center;
      }
        `}
      </style>
    </>
  )
}
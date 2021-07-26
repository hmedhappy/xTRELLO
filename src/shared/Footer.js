import React from 'react'


export default function Footer() {
  const  today = new Date();
  const year = today.getFullYear();

  return (
      <div>
          {/* Main Footer */}
          <footer className="main-footer">
              <strong>Copyright © {year} <a href="http://adminlte.io" target="_blanc">WeReact</a>. </strong>
                All rights reserved.
              <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 1.0.0
              </div>
          </footer>
      </div>
  )
}
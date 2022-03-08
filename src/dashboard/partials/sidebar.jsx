import React from 'react';

/*
  Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"
    */

const Sidebar = () => {
  return (
    <div className="sidebar" data-color="orange">
      <div className="logo">
        <a href="http://www.creative-tim.com" className="simple-text logo-mini">
          CT
        </a>
        <a
          href="http://www.creative-tim.com"
          className="simple-text logo-normal"
        >
          Creative Tim
        </a>
      </div>
      <div className="sidebar-wrapper" id="sidebar-wrapper">
        <ul className="nav">
          <li className="active ">
            <a href="./dashboard.html">
              <i className="now-ui-icons design_app" />
              <p>Dashboard</p>
            </a>
          </li>
          <li>
            <a href="./icons.html">
              <i className="now-ui-icons education_atom" />
              <p>Icons</p>
            </a>
          </li>
          <li>
            <a href="./map.html">
              <i className="now-ui-icons location_map-big" />
              <p>Maps</p>
            </a>
          </li>
          <li>
            <a href="./notifications.html">
              <i className="now-ui-icons ui-1_bell-53" />
              <p>Notifications</p>
            </a>
          </li>
          <li>
            <a href="./user.html">
              <i className="now-ui-icons users_single-02" />
              <p>User Profile</p>
            </a>
          </li>
          <li>
            <a href="./tables.html">
              <i className="now-ui-icons design_bullet-list-67" />
              <p>Table List</p>
            </a>
          </li>
          <li>
            <a href="./typography.html">
              <i className="now-ui-icons text_caps-small" />
              <p>Typography</p>
            </a>
          </li>
          <li className="active-pro">
            <a href="./upgrade.html">
              <i className="now-ui-icons arrows-1_cloud-download-93" />
              <p>Upgrade to PRO</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

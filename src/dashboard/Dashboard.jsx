import React from 'react';
import Sidebar from '@partials/Sidebar';
import Navbar from '@partials/Navbar';
import FooterDash from '@partials/FooterDash';
import '@styles/now-ui-dashboard.scss';

const Dashboard = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main-panel" id="main-panel">
        <Navbar />
        <div className="panel-header panel-header-lg"></div>
        <div className="content">
        <div className="row">
            <div className="col-md-6">
  <div className="card">
    <div className="card-header">
      <h5 className="card-category">All Persons List</h5>
      <h4 className="card-title"> Employees Stats</h4>
    </div>
    <div className="card-body">
      <div className="table-responsive">
        <table className="table">
          <thead className=" text-primary">
            <tr><th>
                Name
              </th>
              <th>
                Country
              </th>
              <th>
                City
              </th>
              <th className="text-right">
                Salary
              </th>
            </tr></thead>
          <tbody>
            <tr>
              <td>
                Dakota Rice
              </td>
              <td>
                Niger
              </td>
              <td>
                Oud-Turnhout
              </td>
              <td className="text-right">
                $36,738
              </td>
            </tr>
            <tr>
              <td>
                Minerva Hooper
              </td>
              <td>
                Curaçao
              </td>
              <td>
                Sinaai-Waas
              </td>
              <td className="text-right">
                $23,789
              </td>
            </tr>
            <tr>
              <td>
                Sage Rodriguez
              </td>
              <td>
                Netherlands
              </td>
              <td>
                Baileux
              </td>
              <td className="text-right">
                $56,142
              </td>
            </tr>
            <tr>
              <td>
                Doris Greene
              </td>
              <td>
                Malawi
              </td>
              <td>
                Feldkirchen in Kärnten
              </td>
              <td className="text-right">
                $63,542
              </td>
            </tr>
            <tr>
              <td>
                Mason Porter
              </td>
              <td>
                Chile
              </td>
              <td>
                Gloucester
              </td>
              <td className="text-right">
                $78,615
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
        <FooterDash />
      </div>
      <script src="@styles/js/core/jquery.min.js"></script>
      <script src="@styles/js/core/popper.min.js"></script>
      <script src="@styles/js/core/bootstrap.min.js"></script>
      <script src="@styles/js/plugins/perfect-scrollbar.jquery.min.js"></script>
    </div>
  );
};

export default Dashboard;

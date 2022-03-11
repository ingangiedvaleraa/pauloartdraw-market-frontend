import React from 'react';
import useUsers from '@hooks/useUsers';
import Loading from '@components/Loading';



const UsersList = () => {
  const result = useUsers();
  if (result.isLoading) {
    return <Loading />;
  } else {
  return (
      <div className="col-md-7">
        <div className="card">
          <div className="card-header">
            <h5 className="card-category">Listado de Usuarios</h5>
            <h4 className="card-title"> Usuarios</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead className=" text-primary">
                  <tr>
                    <th>Identificación</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo Electrónico</th>
                  </tr>
                </thead>
                <tbody>
                {result.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
  }
};

export default UsersList;

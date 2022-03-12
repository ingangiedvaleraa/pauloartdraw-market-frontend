import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '@components/Loading';
import AppContext from '@context/AppContext';

const ProductsList = () => {
  const { state } = useContext(AppContext);
  if (state.productsState.isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="col-md-5">
        <div className="card">
          <div className="card-header">
            <h5 className="card-category">Listado de Productos</h5>
            <h4 className="card-title"> Productos</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead className=" text-primary">
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th className="text-right">Valor</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {state.productsState.products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <img
                          src={`data:image/jpeg;base64,${product.image}`}
                          alt={product.name}
                        />
                      </td>
                      <td>{product.name}</td>
                      <td className="text-right">${product.price}</td>
                      <td className="td-actions text-right">
                        <Link to="/edit-product">
                          <button
                            type="button"
                            rel="tooltip"
                            title=""
                            className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral"
                            data-original-title="Edit Product"
                            onClick={() =>
                              state.productsState.editProduct(product)
                            }
                          >
                            <i className="now-ui-icons ui-2_settings-90"></i>
                          </button>
                        </Link>
                        <button
                          type="button"
                          rel="tooltip"
                          title=""
                          className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral"
                          data-original-title="Remove Product"
                        >
                          <i className="now-ui-icons ui-1_simple-remove"></i>
                        </button>
                      </td>
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

export default ProductsList;

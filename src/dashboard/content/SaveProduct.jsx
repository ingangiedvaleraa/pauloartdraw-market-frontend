import React, { useContext, useRef, useState } from 'react';
import AppContext from '@context/AppContext';

const SaveProduct = () => {
  const { state } = useContext(AppContext);
  const form = useRef(null);
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log('picture: ', e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className="panel-header panel-header-sm"></div>
      <div className="content">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-7">
            <div className="card">
              <div className="card-header">
                <h5 className="title">
                  {state.productsState.isEditProduct
                    ? `Editar Producto`
                    : `Nuevo Producto`}
                </h5>
              </div>
              <div className="card-body">
                <form action="/" ref={form}>
                  <div className="row">
                    <div className="col-md-5 pr-1">
                      <div className="form-group">
                        <label>Nombre</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          defaultValue="Producto 1"
                        />
                      </div>
                    </div>
                    <div className="col-md-3 px-1">
                      <div className="form-group">
                        <label>Categoría</label>
                        <input
                          type="text"
                          className="form-control"
                          name="category"
                          defaultValue="1"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 pl-1">
                      <div className="form-group">
                        <label>Precio</label>
                        <input
                          type="text"
                          className="form-control"
                          name="price"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pr-1">
                      <div className="form-group">
                        <label>Stock</label>
                        <input
                          type="number"
                          className="form-control"
                          name="stock"
                          defaultValue="1"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 pl-1">
                      <div className="form-group">
                        <label>Estado</label>
                        <input
                          type="text"
                          className="form-control"
                          name="state"
                          defaultValue="Activo"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-label-file" htmlFor="image">
                          Subir Imagen
                        </label>
                        <input
                          accept="image/*"
                          type="file"
                          className="form-control"
                          name="image"
                          onChange={onChangePicture}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card card-user">
              <div className="preview">
                <div className="card">
                  <div className="card-header">
                    <h5 className="title">
                      Vista Previa de Imagen de Producto
                    </h5>
                  </div>
                  <div className="card-body">
                    <img
                      src={imgData}
                      alt="Vista Previa de Imagen de Producto"
                    />
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveProduct;

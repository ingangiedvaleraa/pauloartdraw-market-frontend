import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '@context/AppContext';
import Loading from '@components/Loading';

const SaveProduct = () => {
  const { state } = useContext(AppContext);
  const form = useRef(null);
  const [picture, setPicture] = useState('');
  const [imgData, setImgData] = useState('');
  useEffect(() => {
    setImgData(
      state.productsState.selectedProduct
        ? `data:image/jpeg;base64,${state.productsState.selectedProduct.image}`
        : ''
    );
    setPicture(
      state.productsState.selectedProduct
        ? state.productsState.selectedProduct.image
        : ''
    );
  }, [state.productsState.isLoading]);

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      //console.log('picture: ', e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setImgData(reader.result);
      };
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      price: formData.get('price'),
      categoryId: formData.get('category'),
      stock: formData.get('stock'),
      image: imgData ? imgData.substring('data:image/jpeg;base64,'.length) : '',
      active: formData.get('active') == 'on',
    };
    if (data.name != '' && data.price != '') {
      console.log(data);

      state.productsState.isEditProduct ? 
      await state.productsState.updateProduct(state.productsState.selectedProduct.id, data) :
      await state.productsState.createProduct(data);
    }
  };

  if (state.productsState.isLoading) {
    return <Loading />;
  } else {
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
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>Nombre</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            defaultValue={
                              state.productsState.selectedProduct
                                ? state.productsState.selectedProduct.name
                                : 'Producto 1'
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-4 px-1">
                        <label htmlFor="category">Categoría</label>
                        <div className="form-group">
                          <div className="select-box">
                            <select name="category">
                              {state.categoriesState.categories.map(
                                (category) => (
                                  <option value={category.id} key={category.id}>
                                    {category.name}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 pr-1">
                        <div className="form-group">
                          <label>Stock</label>
                          <input
                            type="number"
                            className="form-control"
                            name="stock"
                            defaultValue={
                              state.productsState.selectedProduct
                                ? state.productsState.selectedProduct.stock
                                : 1
                            }
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
                            defaultValue={
                              state.productsState.selectedProduct
                                ? state.productsState.selectedProduct.price
                                : 0
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-3 pl-1">
                        <label>Estado</label>
                        <div className="form-group">
                          <label className="switch">
                            <input
                              type="checkbox"
                              name="active"
                              defaultChecked={
                                state.productsState.selectedProduct
                                  ? state.productsState.selectedProduct.active
                                  : false
                              }
                            />
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="image">Subir Imagen</label>
                          <input
                            type="file"
                            className="form-control"
                            name="image"
                            onChange={onChangePicture}
                            defaultValue={picture}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                        className="primary-button login-button"
                        onClick={handleSubmit}
                        >
                        Guardar
                    </button>
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
  }
};

export default SaveProduct;

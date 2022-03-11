import React from 'react';
import useGetProducts from '@hooks/useGetProducts';

const SaveProduct = () => {
  const { isLoading, isEditProduct, selectedProduct } = useGetProducts();
    return (
        <div>
      <div className="panel-header panel-header-sm"></div>
        <div className="content">
          <div className="row">
          <div className="col-md-8">
            <div className="card">
                <div className="card-header">
                <h5 className="title">{isEditProduct ? `Editar Producto` : `Nuevo Producto`}</h5>
                </div>
                <div className="card-body">
                <form>
                    <div className="row">
                    <div className="col-md-5 pr-1">
                        <div className="form-group">
                        <label>Company (disabled)</label>
                        <input type="text" className="form-control" disabled placeholder="Company" defaultValue="Creative Code Inc." />
                        </div>
                    </div>
                    <div className="col-md-3 px-1">
                        <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" defaultValue="michael23" />
                        </div>
                    </div>
                    <div className="col-md-4 pl-1">
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6 pr-1">
                        <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="Company" defaultValue="Mike" />
                        </div>
                    </div>
                    <div className="col-md-6 pl-1">
                        <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name" defaultValue="Andrew" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Home Address" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4 pr-1">
                        <div className="form-group">
                        <label>City</label>
                        <input type="text" className="form-control" placeholder="City" defaultValue="Mike" />
                        </div>
                    </div>
                    <div className="col-md-4 px-1">
                        <div className="form-group">
                        <label>Country</label>
                        <input type="text" className="form-control" placeholder="Country" defaultValue="Andrew" />
                        </div>
                    </div>
                    <div className="col-md-4 pl-1">
                        <div className="form-group">
                        <label>Postal Code</label>
                        <input type="number" className="form-control" placeholder="ZIP Code" />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                        <label>About Me</label>
                        <textarea rows={4} cols={80} className="form-control" placeholder="Here can be your description" defaultValue={"Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."} />
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
          </div>
        </div>
    </div>
    );
};

export default SaveProduct;
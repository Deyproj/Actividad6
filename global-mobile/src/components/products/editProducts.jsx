import React from "react";
import { useState } from "react";
import { useForm } from 'react-hook-form'

const EditProducts = (props) => {

    const { register, formState: { errors }, handleSubmit, setValue } = useForm({
        defaultValues: props.currenProducts
    });

    setValue('name', props.currenProducts.name)
    setValue('descripcion', props.currenProducts.descripcion)
    setValue('stock', props.currenProducts.stock)
    setValue('valor', props.currenProducts.valor)

    const [nombre, setProductoNombre] = useState();
    const [descripcion, setProductoDescripcion] = useState();
    const [stock, setStock] = useState();
    const [valor, setProductoValor] = useState();


    const onSubmit = (data, e) => {
        console.log(data)
        data.id = props.currenProducts._id
        props.updateProducts(props.currenProducts._id, data)
        e.target.reset();
    }

    return (
        <div>
            <div className="container">
                <h1>Editar Producto</h1>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            onChange={e => setProductoNombre(e.target.value)}
                            {...register("name", {
                                required: "Campo Obligatorio",
                            })}
                        ></input>
                        <div>
                            {errors?.name?.message}
                        </div>
                        <div id="nombreHelp" className="form-text">
                            Nombre del producto
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descripcion</label>
                        <input
                            type="text"
                            className="form-control"
                            name="descripcion"
                            onChange={e => setProductoDescripcion(e.target.value)}
                            {...register("descripcion", {
                                required: "Campo Obligatorio",
                            })}
                        ></input>
                         <div>
                            {errors?.descripcion?.message}
                        </div>
                        <div id="DescripcioneHelp" className="form-text">
                            Descripcion del producto
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Stock</label>
                        <input
                            type="valor"
                            className="form-control"
                            name="stock"
                            onChange={e => setStock(e.target.value)}
                            {...register("stock", {
                                required: "Campo Obligatorio",
                            })}
                        ></input>
                        <div>
                            {errors?.stock?.message}
                        </div>
                        <div id="DescripcioneHelp" className="form-text">
                            Stock del producto
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Valor</label>
                        <input
                            type="text"
                            className="form-control"
                            name="valor"
                            onChange={e => setProductoValor(e.target.value)}
                            {...register("valor", {
                                required: "Campo Obligatorio",
                            })}
                        ></input>
                         <div>
                            {errors?.valor?.message}
                        </div>
                        <div id="ValorHelp" className="form-text">
                            Valor del producto
                        </div>
                    </div>
                    <button className="btn btn-primary">
                        Editar
                    </button>
                </form>
            </div>
        </div>
    );
}
export default EditProducts;

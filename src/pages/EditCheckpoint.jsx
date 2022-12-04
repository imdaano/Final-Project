import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ReusableButton from "../components/Button";
import { putCheckpoint } from "../redux/books/books.functions";

const EditCheckpoint = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { checkpoint, error, isLoading } = useSelector((state) => state.books);
  const editCheckpoint = (formdata) => {
    formdata.img = formdata.img[0];
    dispatch(putCheckpoint(checkpoint._id, formdata));
  };

  return (
    <div className="editCheckpoint">
      <div>
        {error && <h2 className="error">{error.message}</h2>}
        {isLoading && <h2 className="loading">Editing checkpoint...</h2>}
        <h1>Edit Checkpoint</h1>
        <form onSubmit={handleSubmit(editCheckpoint)}>
          <label>
            <p>Nombre</p>
            <input
              type="text"
              name="name"
              defaultValue={checkpoint.name}
              {...register("name", {
                // required: "Introduce un nombre",
              })}
            />
          </label>
          {errors.name && <p>{errors.name.message}</p>}
          <label>
            <p>Foto</p>
            <input
              type="file"
              name="img"
              {...register("img", {
                // required: "Introduce una imagen",
              })}
            />
          </label>
          {errors.img && <p>{errors.img.message}</p>}
          <label>
            <p>Coordenadas Geográficas</p>
            <input
              type="[number]"
              name="location.coordinates"
              defaultValue={checkpoint.location.coordinates[0]}
              {...register("location.coordinates")}
            />
            <input
              type="[number]"
              name="location.coordinates"
              defaultValue={checkpoint.location.coordinates[1]}
              {...register("location.coordinates")}
            />
          </label>
          <label>
            <p>Dirección</p>
            <input
              type="text"
              name="address"
              defaultValue={checkpoint.address}
              {...register("address")}
            />
          </label>
          <label>
            <p>Teléfono</p>
            <input
              type="text"
              name="phone"
              defaultValue={checkpoint.phone}
              {...register("phone")}
            />
          </label>
          <ReusableButton clase={"update--btn"} text={"Actualizar"} />
        </form>
      </div>
    </div>
  );
};

export default EditCheckpoint;

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReusableButton from "../components/Button";
import { postNewBook } from "../redux/books/books.functions";
import "./styles/CreateForm.scss";

const NewBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const postBook = (dataForm) => {
    const formData = new FormData();
    formData.append("title", dataForm.title);
    formData.append("img", dataForm.img);
    formData.append("author", dataForm.author);
    formData.append("genre", dataForm.genre);
    formData.append("synopsis", dataForm.synopsis);
    dispatch(postNewBook(formData, navigate));
  };

  return (
    <div className="create">
      <div className="container">
        <h1>New Book</h1>
        <form onSubmit={handleSubmit(postBook)}>
          <label>
            Title
            <input
              type="text"
              name="title"
              {...register("title", {
                required: "Introduce un título",
              })}
            />
          </label>
          {errors.title ? (
            <>
              {errors.title.type === "required" && (
                <p>{errors.title.message}</p>
              )}
            </>
          ) : null}
          <label>
            Photo
            <input
              type="file"
              name="img"
              {...register("img", {
                required: "Inserta una foto de portada",
              })}
            />
          </label>
          {errors.img ? <p>Adjunta una imagen</p> : null}
          <label>
            Author
            <input
              type="text"
              name="author"
              {...register("author", {
                required: "Introduce el nombre de un/a autor/a",
              })}
            />
          </label>
          {errors.author ? <p>Introduce el nombre de un/a autor/a</p> : null}

          <label>
            Genre
            <input
              type="text"
              name="genre"
              {...register("genre", {
                required: "Introduce un género literario",
              })}
            />
          </label>
          {errors.genre ? <p>Introduce un género literario</p> : null}
          <label>
            Synopsis
            <textarea
              rows="10"
              name="synopsis"
              {...register("synopsis", {
                required: "Introduce una sinopsis",
              })}
            />
          </label>
          {errors.synopsis ? (
            <p>Inserta una sinopsis en el área de texto</p>
          ) : null}

          <ReusableButton clase={"newbook--btn"} text={"Crear"} />
          <alert severity="success" color="info">
            Book created correctly
          </alert>
        </form>
      </div>
    </div>
  );
};

export default NewBook;

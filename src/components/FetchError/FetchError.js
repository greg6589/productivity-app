import style from "./FetchError.module.css";

const FetchError = () => {
  return (
    <>
      <h1 className={style.error}>
        Probably something went wrong, please refresh the page
      </h1>
    </>
  );
};

export default FetchError;

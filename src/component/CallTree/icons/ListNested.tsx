function ListNested(props:any) {
  const style = {
    display: "flex",
    alignContent: "center",
    marginTop: "3px",
  };

  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.w}
        height={props.h}
        fill="currentColor"
        className="bi bi-list-nested"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </div>
  );
}

export default ListNested;

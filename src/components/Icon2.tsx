import "../App.css";

export default function Icon(props: any) {

  const { name, img, isDragging } = props;

  

  return (
      <div className="icon">
        <img src={img}></img>
        <p>{name}</p>
      </div>
  );
}
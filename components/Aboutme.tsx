import Title from "./Title";
import { SiInformatica } from "react-icons/si";

function Aboutme() {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica/>}></Title>
      <div className="text-lg flex flex-col gap-6 tracking-wide">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;

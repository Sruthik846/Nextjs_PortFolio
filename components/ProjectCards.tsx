import Image from "next/image";
interface Props{
    title : string;
    img:string;
    link:string;
}

const ProjectCards = ({title,img,link}: Props) => {
  return (
    <a href={link} target="_blank">
        <div className="w-full h-80 border-[1px] border-blue-600 overflow-hidden rounded-lg group">
      <Image
        className="object-cover translate-y-0 group-hover:-translate-y-[65%] transition-transform duration-[3s]"
        src={img}
        width={350}
        height={350}
        alt="AmazonClone"
      />
      <p className="absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-blue-600 text-white text-center font-semibold duration-300">
        {title}
      </p>
    </div>
    </a>
  );
}; 

export default ProjectCards;

interface Props{
    title:string;
    link:string;
}

const SkillInputs = ({title, link}: Props) => {
  return (
    <a href={ link }>
      <p className="text-lg border border-blue-800 px-6 py-2 bg-transparent text-gray-400 hover:text-white hover:bg-black hover:border-blue-600 rounded-lg tracking-wide duration-300">
        { title }
      </p>
    </a>
  );
};

export default SkillInputs;

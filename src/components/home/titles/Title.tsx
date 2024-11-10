interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
      <div className="w-[358px] h-[35px] rounded-[10px] bg-scale-100 flex items-center">
        <h1 className="font-sans text-callout1 font-bold text-scale-1000 pl-4">{title}</h1>
      </div>
  )
}

export default Title;
import { ReactNode } from "react";

interface iPhoneFrameProps {
  content: ReactNode;
}

const IPhoneFrame = ({ content }: iPhoneFrameProps) => {
  return (
    <div className="w-[393px] h-[852px]">
      <div className="bg-scale-100 w-full h-full rounded-[53px] p-3 items-center overflow-clip" >
      {content}
      </div>
    </div>
  );
}

export default IPhoneFrame;

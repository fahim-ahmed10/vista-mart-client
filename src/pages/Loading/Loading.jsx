import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen min-w-full flex justify-center items-center">
      <PulseLoader color="#000000" loading={true} size={50} />
    </div>
  );
};

export default Loading;

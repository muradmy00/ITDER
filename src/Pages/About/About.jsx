import logo from "../../assets/Logo/Logo.png";

const About = () => {
  return (
    <div className="mt-4 mx-2">
      <div className="bg-blue-500 text-white text-center py-[48px] px-[15px]">
        <h1 className="text-text_40px">About Us</h1>
      </div>

      <div className=" border-2 border-bg_lightSlate shadow-md bg-_white p-5 text-justify mt-4 hover:border-green-500 group relative duration-500">
        Greater Chattogram Association (UK) is a social organisation formed for
        the welfare of Chattogramians living & working in the United Kingdom as
        well as for assisting the development of Greater Chattogram in social
        and economic sectors. The aim of the organisation is to assist the very
        needy in health, education and shelter in the Greater Chattogram Area
        and also to assist the Chattogramians living and working in the UK to
        promote the Bengali culture while integrating within the British
        Culture. We hope to achieve this by way of engaging ourselves in diverse
        range of activities within the framework of charitable, cultural,
        educational, training, sporting, seminars, exhibitions and
        presentations.
        <div className="flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <img
            src={logo}
            className="opacity-0 group-hover:opacity-20 duration-500 w-2/12"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;

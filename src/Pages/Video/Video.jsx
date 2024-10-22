import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Utils/Loader/Loader";
import { FaRegImage } from "react-icons/fa";

const Video = () => {
  const axiosPublic = useAxiosPublic();
  const imgUrl = `https://littleaccount.com/uploads/video/`;

  const { data, isLoading } = useQuery({
    queryKey: ["video"],
    queryFn: async () => {
      const res = await axiosPublic("/api/get-video-data");
      return res.data;
    },
  });

  // const getId = (url) => {
  //   const regExp =
  //     /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  //   const match = url.match(regExp);

  //   return match && match[2].length === 11 ? match[2] : null;
  // };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="mx-2 my-4 space-y-2">
        <div className="bg-blue-500 text-white text-center py-[48px] px-[15px]">
          <h1 className="text-text_40px">Videos</h1>
          <p>Memorable moments of our association</p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
          {data.videoData.map((data) => {
            // const videoId = getId(data.video_link);
            // const embedUrl = `https://www.youtube.com/embed/${videoId}`;
            return (
              <a
              href={data.video_link}
                key={data.id}
                className="border-2 border-bg_lightSlate shadow-md bg-_white p-2"
              >
                <div className="h-52">
                {data.image ? <img
                    src={`${imgUrl}${data.image}`}
                    className="h-full w-full object-cover"
                    alt=""
                  /> : 
                  <FaRegImage className="h-full w-full object-cover" />}
                  {/* <iframe
                    className="h-full w-full object-cover"
                    src={embedUrl}
                    allowfullscreen
                  ></iframe> */}
                </div>
                <div className="my-3">
                  <p className="text-xl font-medium">{data.title}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Video;

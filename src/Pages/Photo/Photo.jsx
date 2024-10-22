import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Utils/Loader/Loader";
import { useContext, useState } from "react";
import { BasicContext } from "../../ContextAPIs/BasicProvider";
import ImageModal from "./ImageModal";

const Photo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {setModalImage} = useContext(BasicContext)
  const axiosPublic = useAxiosPublic();
  const imgUrl = `https://littleaccount.com/uploads/gallery/`;

  const { data, isLoading } = useQuery({
    queryKey: ["photo_list"],
    queryFn: async () => {
      const res = await axiosPublic("/api/get-gallery-data");
      return res.data;
    },
  });

  const handleImage = (img) => {
    setIsOpen(true);
    setModalImage(`${imgUrl}${img}`);
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-2 my-4">
      <div className="bg-blue-500 text-white text-center py-[48px] px-[15px]">
        <h1 className="text-text_40px">Photos</h1>
        <p>Memorable moments of our association</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-4 my-4">
        {data.galleryData.map((data) => (
          <div
          onClick={()=>handleImage(data.image)}
            key={data.id}
            className="bg-_white border-2 border-bg_lightSlate rounded-md p-4 mx-auto w-full hover:border-green-500 duration-500"
          >
            <div>
              <div className="h-60 w-full overflow-hidden">
                <img
                  src={`${imgUrl}${data.image}`}
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
              <hr />
              <div className="mt-2">
                <p className="mb-2 text-gray-500 text-center">
                  <strong>{data.title}</strong>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ImageModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Photo;

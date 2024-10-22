import { Vortex } from 'react-loader-spinner';


const Loader = () => {
    return (
      <div>
        <div className="flex justify-center items-center h-[calc(100vh-100px)] md:h-[530px]">
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={[
              "red",
              "green",
              "blue",
              "yellow",
              "orange",
              "purple",
            ]}
          />
        </div>
      
      </div>
  
       
    );
};

export default Loader;
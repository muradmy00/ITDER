import moment from "moment";


const Copyright = () => {
    const year = moment().format('YYYY');
    return (
        <div className="bg-_white border-2 border-bg_lightSlate py-pl_secondary px-2 lg:px-0 mx-2 rounded-sm">
            <div className="max-w-7xl mx-auto flex items-center flex-col lg:flex-row justify-between">
                <p className="text-center">
                &copy; {year} All right reserved by Wb Softwares. | Design & Developed by Dhrubo Joyti Das.
                </p>
                <p className="">
                    Sitemap | privacy policy
                </p>
            </div>
        </div>
    );
};

export default Copyright;
import { BsFillExclamationTriangleFill } from "react-icons/bs";


const ErrorPage = () => {
    return (
        <div className="w-full h-[calc(100vh-110px)] md:h-[500px] flex items-center justify-center">
            <div className="w-[60%] mx-auto bg-_white p-pr_primary flex flex-col items-center justify-center gap-gap_primary">
            <BsFillExclamationTriangleFill className="text-4xl text-red-500" />
            <h1 className="text-sm">দুঃখিত</h1>
            <h1 className="text-sm">কোন সমস্যা হয়েছে</h1>
            <button className="button_primary">পুনরায় লোড করুন</button>
        </div>
        </div>
    );
};

export default ErrorPage;
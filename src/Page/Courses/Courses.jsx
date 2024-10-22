import { useState, useEffect, useContext } from 'react';
import { OrderContext } from '../../ContextAPIs/OrderProvider';
import { useParams } from "react-router-dom"

const Courses = () => {
    const [courseData, setCourses] = useState([]);
    const { addToCart } = useContext(OrderContext);
    const [productData, setProductData] = useState(null);  // Changed default to `null`
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');
    const { productId } = useParams();

    // Fetch courses data on component mount
    useEffect(() => {
        fetchCourses();
    }, []);

    // Fetch all courses from API
    const fetchCourses = async () => {
        try {
            const response = await fetch('https://itder.com/api/get-course-list');
            const data = await response.json();
            setCourses(data?.courseData); // Assuming data is correct
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    // Calculate the discount percentage
    const calculateDiscount = (regularPrice, discountPrice) => {
        return Math.round(((regularPrice - discountPrice) / regularPrice) * 100);
    };

    // Find the specific product data based on productId
    const fetchProductData = () => {
        const selectedProduct = courseData.find((item) => item.id === productId);
        if (selectedProduct) {
            setProductData(selectedProduct);
            setImage(selectedProduct.image[0]);
        }
    };

    // Fetch product data when courseData and productId are available
    useEffect(() => {
        if (courseData.length && productId) {
            fetchProductData();
        }
    }, [courseData, productId]);

    return (
        <div className="m-mt_16px">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {courseData.map((course) => (
                    <div key={course.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="relative">
                            <img src={course.photo} alt={course.course_name} className="w-full h-48 object-cover" />
                            <div className="absolute top-0 left-0 p-2">
                                <h3 className="text-white text-xl font-bold">{course.course_name}</h3>
                            </div>
                        </div>
                        <div className="p-4">
                            <h2 className="text-gray-800 text-lg font-semibold mb-2">{course.course_name}</h2>
                            <div className="flex items-center justify-between mb-4">
                                <span className="flex text-blue-500 text-md">★★★★★</span>
                                <span className="ml-2 text-gray-600 text-md font-bold">{course.trainer_name}</span>
                            </div>
                            <p className="text-gray-600 text-md mb-4">
                                Course Details <span className="text-blue-500 cursor-pointer">Show Details</span>
                            </p>
                            <hr />
                            <div className="mt-4 flex justify-between items-center">
                                <div>
                                    <span className="line-through text-gray-400 text-sm">Tk {course.regular_price}</span>
                                    <span className="text-green-600 text-md font-bold ml-2">
                                        -{calculateDiscount(course.regular_price, course.discount_price)}%
                                    </span>
                                    <span className="text-black text-lg font-bold ml-2">Tk {course.discount_price}</span>
                                </div>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <button
                                    onClick={() => addToCart(course.id, size)} // Use `course.id` instead of `productData.id`
                                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full font-bold text-md"
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
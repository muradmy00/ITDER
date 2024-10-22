/* eslint-disable react/prop-types */
import React from "react";
import tracking from "react-tracking";

// Tracking-enhanced component
const OrderHistory = ({ tracking,  }) => {
   



    return (
        <div className="xl:w-[95%] bg-white rounded-[5px]">
            <div className="p-[20px]">
                <div>
                    <h1 className="text-[17px] font-bold">Order History</h1>
                </div>

                {/* Render the timeline */}
                <ul className="timeline ">
                   
                      
                        
                   
                </ul>
                
            </div>
        </div>
    );
};

// Export the component wrapped with tracking
export default tracking({ page: "OrderHistoryPage" })(OrderHistory);

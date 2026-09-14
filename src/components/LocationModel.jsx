import { X } from "lucide-react";

const LocationModel = ({onClose}) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
             <div className="h-[300px] w-[400px] bg-gray-100 shadow-2xl rounded-2xl">
              <div className="flex justify-between items-center">
                  <h2 className="text-xl p-5 font-semibold text-gray-700">
                    Where are you today?</h2>
                <button onClick={onClose} className="cursor-pointer"><X/></button>
              </div>
            </div>
        </div>
    );
};

export default LocationModel;
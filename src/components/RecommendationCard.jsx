
const RecommendationCard = ({recommendation, recommendationColors}) => {
    return (
       <div className="bg-white shadow-2xl rounded-2xl p-4">
            <h2 className="text-blue-950 font-bold text-2xl">
              Smart Recommendations
            </h2>
            <div
              className={`mt-2 font-semibold ${
                recommendationColors[recommendation?.type] || "text-gray-600"
              }`}
            >
              {recommendation?.text || "Loading recommendation..."}
            </div>
        </div>
    );
};

export default RecommendationCard;
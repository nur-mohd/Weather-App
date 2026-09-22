
const StatCard = ({ s }) => {
    return (
        <div className="rounded-2xl shadow-2xl p-4 text-center">
                <h3 className="text-lg text-purple-900 font-bold">
                  {s.label}
                </h3>
                <p className="text-3xl text-purple-700 font-extrabold">
                  {s.value}
                </p>
              </div>
    );
};

export default StatCard;
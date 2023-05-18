

const Dashboard = () => {
    return (
        <div className="text-center mt-10">
            <h1 className="text-4xl mb-10">Dashboard!</h1>
            <div className="rating gap-1">
            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
            <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
            <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
            <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
            <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
        </div>
        </div>
    );
};

export default Dashboard;
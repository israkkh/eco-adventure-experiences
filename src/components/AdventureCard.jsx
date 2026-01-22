const AdventureCard = ({ adventure }) => {
    // Destructure the data for cleaner code
    const { title, image, ecoFriendlyFeatures, id } = adventure;

    return (
        <div className="card bg-base-100 shadow-xl border border-gray-100 flex flex-col h-full ">
            <figure className="px-4 pt-4">
                <img
                    src={image}
                    alt={title}
                    className="rounded-xl h-48 w-full object-cover" />
            </figure>
            <div className="card-body flex flex-col flex-grow ">
                <h2 className="card-title text-purple-700">{title}</h2>
                
                <div className="mt-2 flex-grow">
                    <p className="font-semibold text-sm mb-2">Eco-Features:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                        
                        {ecoFriendlyFeatures.slice(0, 3).map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="card-actions mt-4">
                    <button className="btn btn-primary w-full">Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default AdventureCard;
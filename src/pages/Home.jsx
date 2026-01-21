import { useEffect, useState } from "react"
import AdventureCard from "../components/Adventurecard";
import RippleGrid from "../components/RippleGrid";
import Hero from "../components/Hero";
const Home = () => {
    const [adventures, setAdventures] = useState([]);

    useEffect(() => {
        fetch('/adventures.json') // This reaches into your public folder
            .then(res => res.json())
            .then(data => setAdventures(data))
    }, []);

    return (
        <div>
            <Hero></Hero>

            {/* 2. Adventure Cards Section */}
            <div className="max-w-7xl mx-auto py-12 px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Adventure Experiences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {adventures.map(adventure => (
                        <AdventureCard key={adventure.id} adventure={adventure} />
                    ))}
                </div>
            </div>

            {/* 3. Add your 2 Extra Sections below */}
        </div>
    );
};
export default Home;
import { useState, useEffect } from "react";
import Image from 'next/image';

const CasinoGame = () => {
    const [games, setGames] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('/casinogame.json')
            .then((res) => res.json())
            .then((data) => {
                setGames(data)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            <h1 className="text-xs p-2 text-left font-bold grid bg-accent"><span className="w-60 p-2 text-white text-xl border-l-2 border-l-primary" style={{background: "linear-gradient(90deg, #460F7B 1.68%, rgba(228, 10, 180, 0) 73.74%)"}}>Top Live casino</span></h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center bg-accent">
                {
                    games?.map((g) => {
                        return (
                            <div key={g.id}>
                                <div className="card mb-5">
                                    <div className="text-center">
                                        <Image
                                            src={g.img}
                                            width={260}
                                            height={260}
                                            alt=""
                                        />
                                        <h2 className="text-white text-xs p-2 text-left font-bold ml-5" style={{ background: "linear-gradient(90deg, #460F7B 1.68%, rgba(228, 10, 180, 0) 73.74%)" }}>{g.title}</h2>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CasinoGame;
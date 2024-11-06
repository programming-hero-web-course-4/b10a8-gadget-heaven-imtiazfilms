import { useEffect, useState } from "react";

const SaleCountdown = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState([]);
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                getRandomProducts(data);
            })
            .catch((error) => console.error("Error fetching products:", error));


        const saleEndDate = new Date("2024-12-25T00:00:00");

        const intervalId = setInterval(() => {
            const now = new Date();
            const difference = saleEndDate - now;

            if (difference <= 0) {
                clearInterval(intervalId);
            } else {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


    const getRandomProducts = (data) => {

        const shuffled = [...data].sort(() => Math.random() - 0.5);

        setRandomProducts(shuffled.slice(0, 6));
    };

    return (
        <div className="text-center">
            <div className="w-full bg-[#9538E2] text-white text-center">
                <h2 className="pt-8 text-4xl font-bold">Mega Sale Countdown</h2>
                <p className="w-[55%] mx-auto mt-4 pb-2 text-base font-normal">
                    Do not miss out! Our sale ends soon.
                </p>
                <div className="flex justify-center gap-5 pb-4 text-2xl">
                    <div>{timeLeft.days}d</div>
                    <div>{timeLeft.hours}h</div>
                    <div>{timeLeft.minutes}m</div>
                    <div>{timeLeft.seconds}s</div>
                </div>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {randomProducts.length > 0 ? (
                    randomProducts.map((product) => (
                        <div key={product.product_id} className="bg-white p-5 rounded-lg shadow-lg">
                            <img
                                src={product.product_image}
                                alt={product.product_title}
                                className="h-48 w-full object-cover rounded-md mb-3"
                            />
                            <h3 className="text-xl font-semibold">{product.product_title}</h3>
                            <p className="text-gray-500">{product.description}</p>
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-xl font-semibold text-[#9538E2]">${product.sale_price}</p>
                                <p className="text-sm line-through text-gray-400">${product.price}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-xl font-semibold text-gray-500">Loading products...</p>
                )}
            </div>
        </div>
    );
};

export default SaleCountdown;

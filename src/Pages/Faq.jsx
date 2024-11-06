

const Faq = () => {
    return (
        <div>
            <div className="mb-10">
                <div className="w-full bg-[#9538E2] text-white text-center">
                    <h2 className="pt-8 text-4xl font-bold">FAQ</h2>
                    <h2 className="pt-2 text-2xl font-bold">Frequently asking questions</h2>
                    <p className="w-[55%] mx-auto mt-4 pb-8 text-base font-normal">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className="w-[80%] mx-auto">
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">How do I place an order on your website?</div>
                        <div className="collapse-content">
                            <p>Placing an order is simple! Browse through our categories or use the search bar to find products. Once you find the item you want, click <strong>Add to Cart</strong> to place it in your shopping cart. You can view your cart at any time and proceed to checkout when ready. At checkout, provide your shipping details and select your preferred payment method to complete the order.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium"> Do you offer free shipping?</div>
                        <div className="collapse-content">
                            <p>We offer free shipping on select products and promotions. You can check if an item qualifies for free shipping on the product page or during checkout. Additionally, orders over a certain value may also be eligible for free shipping, depending on your location.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">Can I modify or cancel my order after it has been placed?</div>
                        <div className="collapse-content">
                            <p>Orders can typically be modified or canceled within 24 hours of purchase. After this period, orders are processed and shipped out, making it difficult to make changes. Please contact our customer support team immediately if you wish to modify or cancel your order.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">How do I track my order?</div>
                        <div className="collapse-content">
                            <p>Once your order has been shipped, you will receive an email with a tracking number. You can use this tracking number to monitor the status of your order via the shipping carrier’s website. If you have any issues with tracking, feel free to reach out to our customer support team for assistance.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">Do you offer gift cards or discounts?</div>
                        <div className="collapse-content">
                            <p>Yes, we offer gift cards that can be used as a payment method on our site. You can purchase gift cards directly from our website and send them to loved ones or use them yourself. Additionally, we run seasonal promotions and provide discount codes to newsletter subscribers. Make sure to subscribe to stay updated on the latest offers!

                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Faq;
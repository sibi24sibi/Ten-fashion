import { data } from "./data";

export const OrderForm = () => {

    const totalAmount = () => {
        return data.reduce((acc, item) => acc + item.price * (item.quantity), 0);
    };

    return (
        <form className="my-10 flex flex-col lg:flex-row md:flex-col gap-7 w-full justify-center h-auto">
            <div className="border-[1.5px] rounded-sm h-[100%] w-[95%] md:w-[95%] lg:w-[60%] mx-auto lg:mx-0 p-8">
            <h1 className="text-[3rem] font-medium">Billing details</h1>   
            <div className="mt-8">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-4 ml-2 text-lg text-gray-900 dark:text-white">Email Address</label>
                    <input type="email" id="email" className="ml-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex mb-5 justify-between lg:gap-10 md:gap-6 gap-3">
                    <div className="w-[50%]">
                        <label htmlFor="firstname" className="block mb-4 ml-2 text-lg text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="firstname" className="ml-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="w-[50%]">
                        <label htmlFor="lastname" className="block mb-4 ml-2 text-lg text-gray-900 dark:text-white">Last name</label>
                        <input type="text" id="lastname" className="ml-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="country" className="block mb-4 ml-2 text-lg text-gray-900 dark:text-white">Country/Region</label>
                    <input type="text" id="country" className="ml-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="address" className="block mb-4 ml-2 text-lg text-gray-900 dark:text-white">Street address</label>
                    <input type="text" id="address" className="ml-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex mb-5 justify-between lg:gap-10 md:gap-6 gap-3">
                    <div className="w-[50%]">
                        <label htmlFor="city" className="block mb-4 ml-2 text-lg text-gray-900 dark:text-white">Town / City</label>
                        <input type="text" id="city" className="ml-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="w-[50%]">
                        <label htmlFor="postcode" className="block mb-4 ml-2 text-lg text-gray-900 dark:text-white">Postcode / ZIP</label>
                        <input type="text" id="postcode" className="ml-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="state" className="block mb-4 ml-2 text-lg text-gray-900 dark:text-white">State</label>
                    <input type="text" id="state" className="ml-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="phone" className="block mb-4 ml-2 text-lg text-gray-900 dark:text-white">Phone</label>
                    <input type="text" id="phone" className="ml-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-4 ml-2 text-lg text-gray-900 dark:text-white">Order notes</label>
                    <textarea id="message" rows="4" className="ml-1.5 block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                </div>
            </div>
            </div>
            <div className="border-[1.5px] rounded-sm w-[95%] md:w-[95%] lg:w-[30%] mx-auto lg:mx-0 max-h-max p-8 bg-slate-300">
                <h1 className="text-[2rem] font-medium text-white">Your order</h1>
                <div className="mt-7">
                    <div className="text-[1.2rem] font-medium flex justify-between">
                        <div className="ml-1">Product</div>
                        <div className="mr-1">Subtotal</div>
                    </div>
                    <hr className="my-5 h-[2px] bg-black" />
                </div>
                {
                    data.map((item) => (
                        <div key={item.id} className="my-4">
                            <div className="text-[1.1rem] flex justify-between items-center">
                                <div className="w-[60%] ml-1">{`${item.title}  × ${item.quantity}`}</div>
                                <div className="mr-2.5">{`₹${item.price * item.quantity}`}</div>
                            </div>
                            <hr className="my-5 h-[2px] bg-black" />
                        </div>
                    ))
                }
                <div className="my-5">
                    <div className="text-[1.2rem] font-medium flex justify-between">
                        <div className="ml-1">Total</div>
                        <div className="mr-2.5 text-[1.3rem]">₹{totalAmount()}</div>
                    </div>
                    <hr className="my-5 h-[2px] bg-black" />
                </div>
                <fieldset>
                    <legend className="sr-only">Payments</legend>
                    <div className="my-2 ml-1 flex gap-2 items-center">
                        <input id="payment-option-1" type="radio" name="payment" value="Cash on delivery" className="w-4 h-4 border-gray-700 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" defaultChecked />
                        <label htmlFor="payment-option-1" className="block ms-2 text-lg font-medium text-gray-900 dark:text-white">
                        Cash on delivery
                        </label>
                    </div>
                    <div className="my-2 ml-1 flex gap-2 items-center">
                        <input id="payment-option-2" type="radio" name="payment" value="card-payment" className="w-4 h-4 border-gray-700 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="payment-option-2" className="block ms-2 text-lg font-medium text-gray-900 dark:text-white">
                        Debit card/Credit card
                        </label>
                    </div>
                    <div className="my-2 ml-1 flex gap-2 items-center">
                        <input id="payment-option-3" type="radio" name="payment" value="upi" className="w-4 h-4 border-gray-700 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="payment-option-3" className="block ms-2 text-lg font-medium text-gray-900 dark:text-white">
                        UPI
                        </label>
                    </div>
                    <div className="my-2 ml-1 flex gap-2 items-center">
                        <input id="payment-option-4" type="radio" name="payment" value="Net-Banking" className="w-4 h-4 border-gray-700 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="payment-option-4" className="block ms-2 text-lg font-medium text-gray-900 dark:text-white">
                        Net banking
                        </label>
                    </div>
                </fieldset>
                <div className="mt-4">
                    <p className="text-md font-medium text-gray-500">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                </div>
                <button className="border-2 rounded-full py-4 mt-5 bg-black text-white font-semibold text-xl hover:text-black hover:bg-white hover:border-black w-full">Place order</button>
            </div>
        </form>
    );
};
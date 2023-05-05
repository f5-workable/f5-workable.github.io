const Payment = () => {
  return (
    <div className="mt-8">
      <p className="block mb-2 text-lg font-semibold">임금</p>
      <div className="flex items-center">
        <div className="p-1 bg-white rounded-3xl flex justify-center items-center border border-solid border-neutral-400">
          <div className="w-32 flex justify-center items-center">
            <input
              id="payment-start"
              type="number"
              defaultValue={0}
              className="w-20 ml-2 py-2 rounded-lg text-center"
            />
            원
          </div>
          <span className="ml-4">~</span>
          <div className="w-32 flex justify-center items-center">
            <input
              id="payment-end"
              type="number"
              defaultValue={0}
              className="w-20 py-2 rounded-lg text-center"
            />
            원
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

const Error = ({ error }) => (
  <section className="w-[90%] md:w-[80%] mx-auto py-20 mb-10 text-white grid place-content-center font-roboto min-h-[590px]">
    <p className="text-center text-red-500">Error: {error.message}</p>
    <p className="text-center text-gray-300">
      Something went wrong. Please try again later.
    </p>
  </section>
);

export default Error;

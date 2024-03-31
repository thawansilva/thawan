const SucessForm = () => {
  return (
    <>
      <section className="min-h-[100vh] bg-black text-gray-50">
        <div className="container flex items-center justify-center h-screen px-4 sm:px-0">
          <h3 className="text-4xl font-bold md:text-5xl">
            Email send sucessfully <i className="fa-solid fa-circle-check"></i>
          </h3>
          <p className="mt-2 text-lg">
            Return to{" "}
            <a
              href="/"
              className="inline-block transition duration-150 ease-in hover:text-p-blue"
            >
              homepage
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default SucessForm;

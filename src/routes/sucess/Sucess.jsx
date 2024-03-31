const SucessForm = () => {
  return (
    <>
      <section className="min-h-[100vh] bg-black text-gray-50 py-10">
        <div className="container px-8 mx-auto">
          <h3 className="text-2xl md:text-4xl">
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

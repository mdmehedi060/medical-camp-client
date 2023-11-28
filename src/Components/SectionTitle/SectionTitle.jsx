const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="mx-auto md:w-4/12 text-center">
      <h3 className="text-4xl border-y-4 py-4 mb-5">{heading}</h3>
      <p className="text-purple-400 mb-2">***{subHeading}***</p>
    </div>
  );
};

export default SectionTitle;

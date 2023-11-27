const SectionTitle = ({ text, para }) => {
    return (
      <div className='border-b-2 border-emerald-300 pb-5'>
        <h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
        <p>{para}</p>
      </div>
    );
  };
  export default SectionTitle;
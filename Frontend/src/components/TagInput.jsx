/* eslint-disable react/prop-types */

const TagInput = ({tags}) => {

  return (
    <div className="border-2 border-black p-2 rounded min-w-80 mt-4 flex items-center flex-wrap gap-2">
      {tags.map((tag, index) => (
        <div className="inline-block px-2 py-3" key={index}>
          <span className="text">{tag}</span>
          <span className=" cursor-pointer h-5 w-5 rounded-full inline-flex justify-center items-center ml-1 text-lg bg-gray-500 text-white">&times;</span>
        </div>
      ))}
    </div>
  );
};

export default TagInput;

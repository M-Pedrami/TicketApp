const Status = ({ status }) => {
  return (
    <>
      {status === "done" ? (
        <span className="inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 bg-green-300">
          done
        </span>
      ) : status === "not started" ? (
        <span className="inline-block rounded-full px-2 py-1 text-xs font-semibold text-white bg-red-300">
          not started
        </span>
      ) : (
        <span className="inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 bg-blue-300">
          started
        </span>
      )}
    </>
  );
};

export default Status;

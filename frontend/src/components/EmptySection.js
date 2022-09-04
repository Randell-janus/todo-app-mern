import React from "react";

const EmptySection = () => {
  return (
    <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center space-y-5 rounded-md p-2">
      <img
        src="undraw_well_done_re_3hpo.svg"
        alt="empty section svg"
        className="w-1/3 sm:w-1/4"
      />
      <div className="text-center space-y-1">
        <h2 className="font-semibold">All clear</h2>
        <p>You have an empty list.</p>
      </div>
    </div>
  );
};

export default EmptySection;

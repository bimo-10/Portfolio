import React from "react";

function SuccessModal() {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative bg-success" htmlFor="">
          <h3 className="text-lg font-bold">Success!</h3>
          <p className="py-4">Your comment is success</p>
        </label>
      </label>
    </div>
  );
}

export default SuccessModal;

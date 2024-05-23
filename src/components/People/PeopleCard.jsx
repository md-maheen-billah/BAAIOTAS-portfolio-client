const PeopleCard = ({ person }) => {
  return (
    <div>
      <div className="flex-col justify-center items-center">
        <div className="flex items-center">
          <button
            onClick={() =>
              document.getElementById(`my_modal_${person._id}`).showModal()
            }
            className="bg-pink-400 w-36 h-36 shadow-black shadow-sm mx-auto rounded-full hover:scale-110 transition"
          >
            <img
              className="w-36 h-36 object-contain rounded-full"
              src="https://i.ibb.co/ZTTnj6T/boy1.jpg"
              alt=""
            />
          </button>
        </div>
        <div>
          <h3 className="text-xl font-medium mt-4 text-center">
            {person.name}
          </h3>
          <p className="text-center">{person.designation}</p>
        </div>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={`my_modal_${person._id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex justify-center items-center">
            <div className="w-full">
              <div className="bg-pink-400 shadow-black shadow-sm w-36 h-36 mx-auto rounded-full">
                <img
                  className="w-36 h-36 object-contain rounded-full"
                  src="https://i.ibb.co/ZTTnj6T/boy1.jpg"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-medium mt-4 text-center">
                {person.name}
              </h3>
              <p className="text-center">{person.designation}</p>
              <p className="text-left mt-4 font-medium">About:</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique aliquam inventore exercitationem eius quibusdam maxime
                veritatis cupiditate nobis laboriosam enim!
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PeopleCard;



const Accordion = () => {
    return (
        <div className="dark:bg-gray-900 text-gray-900 dark:text-gray-200">
            <div>
                <h1 className="text-center font-bold text-5xl text-red-600">OverView Of Blockbuster Movies</h1>
            </div>
            <div className="collapse collapse-arrow bg-base-200 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
  <input type="radio" name="movie-accordion" defaultChecked />
  <div className="collapse-title text-xl font-medium">Inception</div>
  <div className="collapse-content">
    <p><strong>Director:</strong> Christopher Nolan</p>
    <p><strong>Genre:</strong> Sci-Fi, Thriller</p>
    <p><strong>Release Year:</strong> 2010</p>
    <p><strong>Description:</strong> A thief who steals corporate secrets through dream-sharing technology is given a chance to have his criminal history erased if he performs an inception.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
  <input type="radio" name="movie-accordion" />
  <div className="collapse-title text-xl font-medium">The Dark Knight</div>
  <div className="collapse-content">
    <p><strong>Director:</strong> Christopher Nolan</p>
    <p><strong>Genre:</strong> Action, Crime, Drama</p>
    <p><strong>Release Year:</strong> 2008</p>
    <p><strong>Description:</strong> Batman faces the Joker, a criminal mastermind who plunges Gotham City into chaos.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
  <input type="radio" name="movie-accordion" />
  <div className="collapse-title text-xl font-medium">Interstellar</div>
  <div className="collapse-content">
    <p><strong>Director:</strong> Christopher Nolan</p>
    <p><strong>Genre:</strong> Adventure, Drama, Sci-Fi</p>
    <p><strong>Release Year:</strong> 2014</p>
    <p><strong>Description:</strong> A group of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.</p>
  </div>
</div>

        </div>
    );
};

export default Accordion;
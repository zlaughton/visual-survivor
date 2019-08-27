import React from 'react';
import './NavBar.css';

const NavBar = ({
  incrementEpisode,
  decrementEpisode,
  allSeasons,
  setSeason,
  seasonNum,
  episodeId,
  seasonData,
  atEarliestEpisode,
  atLatestEpisode,
}) => {
  const episodeNumber = Number(episodeId.slice(-2));
  const seasonTitle = seasonData && allSeasons && seasonNum
    ? allSeasons.find(season => seasonNum === season.season_no).title
    : 'Season';
  const closeDropdown = () => {
    document.querySelector('.dropdown').classList.remove('active');
  };
  const selectSeasonOption = (season) => {
    setSeason(season);
    closeDropdown();
  };
  const openDropdown = () => {
    document.querySelector('.dropdown').classList.add('active');
  };

  return (
    <header className="navbar" id="myTopnav">
      {
        <div
          className="dropdown"
          id="season-select"
          onMouseLeave={closeDropdown}
          onTouchEnd={openDropdown}
        >
          {seasonTitle && (
            <div className="dropbtn" onMouseEnter={openDropdown}>
              <div className="season-title">{`${seasonTitle} `}</div>
              <div className="season-title-icon">
                <i className="fas fa-caret-down" />
              </div>
            </div>
          )}
          <div className="dropdown-content">
            {allSeasons.map(season => (
              <div
                onClick={() => selectSeasonOption(season.season_no)}
                key={season.season_no}
                value={season.season_no}
                className={`season-option ${season.season_no === seasonNum && 'selected'}`}
              >
                {season.season_no.toString()}
                {': '}
                {season.title}
              </div>
            ))}
          </div>
        </div>
      }

      <div className="episode-selector">
        <i
          className={`fas fa-caret-left episode-arrow left ${atEarliestEpisode() && 'hidden'}`}
          onClick={decrementEpisode}
        />
        <h2>{episodeNumber === 0 ? 'START' : `EPISODE ${episodeNumber}`}</h2>
        <i
          className={`fas fa-caret-right episode-arrow right ${atLatestEpisode() && 'hidden'}`}
          onClick={incrementEpisode}
        />
      </div>
      <h1>Survivor Stats</h1>
    </header>
  );
};

export default NavBar;

import React from 'react';
import CastawayCard from '../CastawayCard/CastawayCard';
import ('./VotedOutPanel.css');

const VotedOutPanel = ({ episodeData }) => {

  const {castaways} = episodeData;
  const juryStarted = castaways && castaways.some((castaway) => castaway.juryMember) ? true : false;
  const grayScalePrejury = juryStarted ? 'grayscale' : '';

  if(episodeData.castaways 
  && episodeData.castaways.some((castaway) => castaway.tribe === 'out' || castaway.currentBoot)) {
    return(
      <div>
        <div className="clear-footer"></div>
        <section className="voted-out-panel animated slideInUp">
          <div className="castawayList votedout">
            {castaways && castaways
              .filter((castaway) => (castaway.tribe === 'out' || castaway.currentBoot) && !castaway.juryMember)
              .sort((a, b) => a.bootOrder - b.bootOrder)
              .map(castaway => {
                  return (
                    <CastawayCard
                      key={castaway.name}
                      castaway={castaway}
                      grayScale={grayScalePrejury}
                      className={`animate fadeIn`}
                      />
                  )
            })}
            {juryStarted && 
              <span className="jury-title">JURY</span>
            }
            {juryStarted && 
              castaways
                .filter(castaway => castaway.juryMember)
                .sort((a, b) => a.bootOrder - b.bootOrder)
                .map(castaway => {
                  return(
                    <CastawayCard
                      key={castaway.name}
                      castaway={castaway}
                      className='animate fadeIn'
                    />
                  )
              })}
            
          </div>
        </section>
      </div>
    )} else {
      return null;
    }
}

export default VotedOutPanel;
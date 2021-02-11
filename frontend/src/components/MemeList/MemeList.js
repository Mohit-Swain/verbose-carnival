import React from 'react';
import PropTypes from 'prop-types';
import MemeCard from './MemeCard/MemeCard';
function MemeList(prop){
    const memeCards = prop.memeList.map(meme => <MemeCard key={meme.id} meme={meme} />)
    return (<main>
        <div className="z-0 flex flex-col relative top-16 bg-bluegray-200 h-full">
            {memeCards}

        </div>
    </main>)
}

MemeList.propTypes = {
    memeList : PropTypes.array
};
export default MemeList;
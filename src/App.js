import React, { useState } from 'react';
import CloseLineIcon from 'remixicon-react/CloseLineIcon';

const App = () => {
  const [tags, setTags] = useState([]);

  const addTags = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      setTags([...tags, e.target.value]);
      e.target.value = '';
    }
  };

  const removeTags = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <div className='tags-input'>
        <ul>
          {tags.map((tag, index) => (
            <li className='tag' key={index}>
              <span className='tag-title'>{tag}</span>
              <span
                className='tag-close-icon'
                onClick={() => removeTags(index)}
              >
                <CloseLineIcon size={16} />
              </span>
            </li>
          ))}
        </ul>
        <input
          type='text'
          onKeyUp={(e) => (e.key === 'Enter' ? addTags(e) : null)}
        />
      </div>
    </div>
  );
};

export default App;

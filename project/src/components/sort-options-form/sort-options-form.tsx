import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import cn from 'classnames';
import {SortOption} from '../../const';
import OptionItem from '../option-item/option-item';
import {getActiveSortType} from '../../store/app-process/selectors';
import {changeActiveSortType} from '../../store/app-process/app-process';

function SortOptionsForm(): JSX.Element {

  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const activeSortType = useAppSelector(getActiveSortType);
  const dispatch = useAppDispatch();

  const handleSelectOptionClick = () => setIsSelectOpen(!isSelectOpen);
  const handleOptionClick = (option: string) => {
    dispatch(changeActiveSortType(option));
    handleSelectOptionClick();
  };

  const selectOptionClassName = cn('places__options places__options--custom', {
    'places__options--opened': isSelectOpen,
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSelectOptionClick}
      >
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={selectOptionClassName}>
        {Object.values(SortOption).map((option) => (
          <OptionItem
            key={option}
            isActiveOption={option === activeSortType}
            optionName={option}
            onOptionClick={handleOptionClick}
          />
        ))}
      </ul>
    </form>
  );
}

export default SortOptionsForm;

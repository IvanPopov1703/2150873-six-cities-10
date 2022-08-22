import cn from 'classnames';

type OptionItemProps = {
  isActiveOption: boolean,
  optionName: string,
  onOptionClick: (optionName: string) => void,
}

function OptionItem({isActiveOption, optionName, onOptionClick}: OptionItemProps): JSX.Element {

  const optionActiveClassName = cn('places__option', {
    'places__option--active': isActiveOption,
  });

  return (
    <li
      className={optionActiveClassName}
      tabIndex={0}
      onClick={() => onOptionClick(optionName)}
    >
      {optionName}
    </li>
  );
}

export default OptionItem;

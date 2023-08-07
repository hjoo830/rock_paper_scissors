import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';
import './HandIcon.css';

const IMG = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIcon({ value }) {
  const handImg = IMG[value];
  return <img className="Hand-icon" src={handImg} alt={value} />;
}

export default HandIcon;

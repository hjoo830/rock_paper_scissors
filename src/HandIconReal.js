import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';
import './HandIconReal.css';

const IMG = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIconReal({ value }) {
  const handImg = IMG[value];
  return <img className="Hand-icon-real" src={handImg} alt={value} />;
}

export default HandIconReal;

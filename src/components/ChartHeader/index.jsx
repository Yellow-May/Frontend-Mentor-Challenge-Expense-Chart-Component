import logoSVG from 'assets/images/logo.svg';
import Styles from './styles.module.css';

const ChartHeader = () => {
	return (
		<header className={Styles['chart-app-header']}>
			<div className={Styles['my-balance']}>
				<h1>My balance</h1>
				<span>${(921.48).toLocaleString()}</span>
			</div>

			<div className='logo'>
				<img src={logoSVG} alt='chart-app' />
			</div>
		</header>
	);
};

export default ChartHeader;

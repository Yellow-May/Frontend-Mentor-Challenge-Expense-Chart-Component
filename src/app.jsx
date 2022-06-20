import { Fragment } from 'react';
import { ChartHeader, Footer, MainChart } from 'components';

const MyApp = () => {
	return (
		<Fragment>
			<div className='chart-app'>
				<ChartHeader />
				<MainChart />
			</div>

			<Footer />
		</Fragment>
	);
};

export default MyApp;

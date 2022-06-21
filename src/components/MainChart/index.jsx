import Styles from './styles.module.css';
import chartData from 'data/chart.json';

const currDay = new Date().getDay();

const MainChart = () => {
	return (
		<main className={Styles['main-chart']}>
			<section className={Styles.body}>
				<h2>Spending - Last 7 days</h2>

				<div className={Styles.chart}>
					{chartData.map((data, idx) => {
						return (
							<div key={data.day} className={Styles['chart-bar']}>
								<span
									className={Styles.bar}
									style={{
										height: `calc(calc(${data.amount}/100) * 100%)`,
										background: idx + 1 === currDay ? `var(--Cyan)` : `var(--Soft-red)`,
									}}
								/>
								<span className={Styles.text}>{data.day}</span>
								<span className={Styles.tooltip} style={{ top: `calc(calc((${data.amount} - 70)/100) * -100%)` }}>
									${data.amount}
								</span>
							</div>
						);
					})}
				</div>
			</section>

			<div className={Styles.divider} />

			<section className={Styles.footer}>
				<div className={Styles.total}>
					<h3>Total this month</h3>
					<span>${(478.33).toLocaleString()}</span>
				</div>

				<div className={Styles.margins}>
					<span>{'+2.4%'}</span>
					<h4>from last month</h4>
				</div>
			</section>
		</main>
	);
};

export default MainChart;

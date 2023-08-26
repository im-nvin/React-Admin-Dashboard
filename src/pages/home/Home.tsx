import BarChartBox from '../../components/barchartbox/BarChartBox'
import BigChart from '../../components/bigchartbox/BigChart'
import ChartBox from '../../components/chartbox/ChartBox'
import PieChartBox from '../../components/pirchartbox/PieChartBox'
import TopBox from '../../components/topbox/TopBox'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../Data'
import './home.scss'

function Home() {
  return (
    <div className='home'>
      <div className="box box1"><TopBox /></div>
      <div className="box box2"><ChartBox {...chartBoxUser} /></div>
      <div className="box box3"><ChartBox {...chartBoxProduct} /></div>
      <div className="box box4"><PieChartBox /></div>
      <div className="box box5"><ChartBox {...chartBoxConversion} /></div>
      <div className="box box6"><ChartBox {...chartBoxRevenue} /></div>
      <div className="box box7"><BigChart /></div>
      <div className="box box8"><BarChartBox {...barChartBoxRevenue} /></div>
      <div className="box box9"><BarChartBox {...barChartBoxVisit} /></div>
    </div>
  )
}

export default Home
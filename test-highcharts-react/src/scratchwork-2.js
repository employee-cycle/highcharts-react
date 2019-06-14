<ec-barchart title=”Number of Emp…” minVal=”0” maxVal=”6” xAxis=”[‘Graham, Rice…”,...]”>
</ec-barchart>

//Inside component

Const title = “Number of Emp..”;

Render ( <h1>{title}</h1>
//Component gets the data
<ec-barchart dataUrl=”ec.com/people”>

Constructor () {
  getData(this.props.dataUrl).then (data => this.title = data.title)

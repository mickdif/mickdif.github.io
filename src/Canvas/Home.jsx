function Home() {


  const bt_drawLine = () => {

    let points = []
    canvas.addEventListener('click', function (event) {

      if (canvas) {
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext("2d");
        let point = [event.pageX, event.pageY]
        let x = event.pageX
        let y = event.pageY

        points.push(point)

        ctx.moveTo(points[0][0], points[0][1])

        points.forEach(point => {
          ctx.lineTo(point[0], point[1])
        })

        ctx.lineWidth = 2
        ctx.strokeStyle = 'red'
        ctx.stroke()
      }
    });

  }


  return (
    <>
      <canvas id="canvas" width="1000" height="1000" className="bg-zinc-700"></canvas>
      <button onClick={bt_drawLine} className="">Draw line</button>
    </>
  )
}

export default Home

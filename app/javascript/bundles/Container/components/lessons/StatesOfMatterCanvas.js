import React, { useEffect, useRef } from "react";

const StatesOfMatterCanvas = props => {
  const noOfCircles = props.circles;

  const canvasRef = useRef(null);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const bounce = -1;
    let color = "#6EF5DE";
    let circles = [];

    function Circle(x, y, sx, sy) {
      this.x = x;
      this.y = y;
      this.sx = sx;
      this.sy = sy;
      this.r = 20;

      this.drawCircle = function(color) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.fill();
      };

      this.moveCircle = function() {
        this.x += this.sx;
        this.y += this.sy;
        if (this.x + this.r > canvas.width) {
          this.x = canvas.width - this.r;
          this.sx *= bounce;
        } else if (this.x - this.r < 0) {
          this.x = this.r;
          this.sx *= bounce;
        }
        if (this.y + this.r > canvas.height) {
          this.y = canvas.height - this.r;
          this.sy *= bounce;
        } else if (this.y - this.r < 0) {
          this.y = this.r;
          this.sy *= bounce;
        }
      };
    }

    for (let i = 0; i < noOfCircles; i++) {
      let _x = Math.floor(Math.random() * (canvas.width - 15)) + 15;
      let _y = Math.floor(Math.random() * (canvas.height - 15)) + 15;
      let xspd = Math.floor(Math.random() * (5 - 0.5)) + 0.5;
      let yspd = Math.floor(Math.random() * (5 - 0.5)) + 0.5;
      let c = new Circle(_x, _y, xspd, yspd);
      circles.push(c);
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (circles.length == 50) color = "#E7932E";
      if (circles.length == 200) color = "#6EF5DE";
      if (circles.length == 500) color = "#E376C4";

      for (let i = 0; i < circles.length; i++) {
        circles[i].drawCircle(color);
        circles[i].moveCircle();
      }
      requestAnimationFrame(draw);
    }

    draw();
  };

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={1000}
        height={1000}
        style={{ border: 0, solid: "#000000" }}
      ></canvas>
    </div>
  );
};

export default props => <StatesOfMatterCanvas {...props} />;

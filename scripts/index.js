

document.addEventListener("DOMContentLoaded", evt => {
    const canvas = document.getElementById("canvas");
    const colorPicker = document.getElementById("color-picker");
    const refreshBtn = document.getElementById("refresh-button");

    function createCanvas(col, row) {
        for (let i = 0; i < col * row; i++) {
            const box = document.createElement("div");

            box.className = "box"

            canvas.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
            canvas.style.gridTemplateRows = `repeat(${row}, 1fr)`;

            canvas.appendChild(box);
        }
    }




    /**
     * 
     * @param {MouseEvent} evt 
     */
    function startSketch(evt) {
        /**
          * @type {HTMLElement}
        */
        const target = evt.target;
        if (target.matches("[class='box']") && ready) {
            target.style.backgroundColor = color;
        }
    }



    // canvas state
    let ready = false;

    let color = colorPicker.value;

    colorPicker.addEventListener("change", evt => {
        const colorValue = evt.currentTarget.value
        console.log(colorValue)

        color = colorValue;
    });


    document.addEventListener("mousedown", evt => {
        color = colorPicker.value;
        ready = true
        startSketch(evt);
    });
    document.addEventListener("mouseup", evt => ready = false)
    document.addEventListener("mouseover", startSketch);


    refreshBtn.addEventListener("click", evt => {
        canvas.innerHTML = "";

        createCanvas(16, 16);
    })

    createCanvas(16, 16);
});
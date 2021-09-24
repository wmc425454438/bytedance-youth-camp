<template>
  <div id="container">
    <div id="sidebar">
      <span @mousedown="dragRow">Row</span>
      <span @mousedown="dragCol">Col</span>
      <span @mousedown="dragButton">Button</span>
    </div>

    <div id="editpanel" data-accept-type="Row">
      <div data-accept-type="Col" v-bind:data-row="i" class="row" v-for="(row, i) of rows" :key="row">
        <div data-accept-type="Button" v-bind:data-col="j" class="col" v-for="(col, j) of row.cols" :key="col">
          <button class="button" v-for="child of col.children" :key="child">
            {{ child.content || "button" }}
          </button>
        </div>
      </div>
    </div>

    <div
      id="dragable"
      :style="{ left: drag.x + 'px', top: drag.y + 'px' }"
      v-if="drag.isDragging"
    >
      {{ drag.type }}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drag: {
      x0: 0,
      y0: 0,
      dx: 0,
      dy: 0,
      x: 100,
      y: 100,
      type: "none",
      isDragging: false,
    },
    rows: [
      // {},
      // {},
      // {},
      // {
      //   type: "row",
      //   height: 300,
      //   cols: [
      //     {
      //       type: "col",
      //       width: 100,
      //       children: [
      //         {
      //           content: "button",
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  }),
  components: {},
  methods: {
    dragStart(type) {
      this.drag.type = type;
      this.drag.isDragging = true;
      let move = (e) => {
        this.drag.x = e.clientX + 20;
        this.drag.y = e.clientY + 20;
      };
      let up = (e) => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
        this.drag.isDragging = false;
        let areaEle = document.elementFromPoint(e.clientX, e.clientY);
        console.log(areaEle);
        let cur = areaEle;
        console.log(cur.dataset);
        while(cur && cur.dataset["acceptType"] !== type) {
          cur = cur.parentNode;
        }
        if(type === "Row") {
          this.rows.push({cols: []});
        } else if(type === "Col") {
          this.rows[cur.dataset["row"]].cols.push({children: []})
        } else if(type === "Button") {
          console.log(this.rows);
          console.log(this.rows[cur.parentNode.dataset["row"]]);
          console.log(this.rows[cur.parentNode.dataset["row"]].cols[cur.dataset["col"]]);
          this.rows[cur.parentNode.dataset["row"]].cols[cur.dataset["col"]].children.push({content: "button"})
        }
        // else if(type === "rows") {}
        console.log(cur);
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
    },
    dragRow() {
      this.dragStart("Row");
    },
    dragCol() {
      this.dragStart("Col");
    },
    dragButton() {
      this.dragStart("Button");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
}
#container {
  display: flex;
  width: 100%;
  height: 100%;
}
#sidebar {
  width: 160px;
  background-color: #eee;
}
#sidebar > * {
  width: 60px;
  height: 60px;
  display: inline-block;
  margin: 10px;
  box-sizing: border-box;
  border: solid 1px #000;
  user-select: none;
}
#editpanel {
  flex: 1;
  overflow: scroll;
}

.row {
  width: 100%;
  min-height: 300px;
  background-color: lightblue;
  display: flex;
  box-sizing: border-box;
  margin-top: 10px;
}

.col {
  height: 200px;
  background-color: lightcyan;
  min-width: 200px;
  margin: 10px;
}

#dragable {
  position: absolute;
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  border: solid 1px #000;
}
</style>

ddocument.addEventListener("DOMContentLoaded", function() {
  const svg = d3.select("#sankey"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

  const sankey = d3.sankey()
      .nodeWidth(15)
      .nodePadding(10)
      .extent([[1, 1], [width - 1, height - 6]]);

  const link = svg.append("g")
      .attr("class", "links")
    .selectAll("path");

  const node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("g");

  const data = {
    "nodes": [
      { "name": "China" },
      { "name": "Canada" },
      { "name": "USA" },
      { "name": "Japan" }
    ],
    "links": [
      { "source": 0, "target": 1, "value": 10 },
      { "source": 1, "target": 2, "value": 5 },
      { "source": 1, "target": 3, "value": 15 }
    ]
  };

  sankey(data);

  link.data(data.links)
    .enter().append("path")
      .attr("d", d3.sankeyLinkHorizontal())
      .attr("stroke-width", d => Math.max(1, d.width));

  node.data(data.nodes)
    .enter().append("g")
      .call(g => g.append("rect")
          .attr("x", d => d.x0)
          .attr("y", d => d.y0)
          .attr("height", d => d.y1 - d.y0)
          .attr("width", d => d.x1 - d.x0)
          .attr("fill", "blue"))
      .call(g => g.append("text")
          .attr("x", d => (d.x0 + d.x1) / 2)
          .attr("y", d => (d.y0 + d.y1) / 2)
          .attr("dy", "0.35em")
          .attr("text-anchor", "middle")
          .text(d => d.name));
});
const buttonFollowers = document.getElementById("buttonFollowers")
const buttonLikes = document.getElementById("buttonLikes")
const followerData = [
    {media: "Instagram", value: 2100},
    {media: "YouTube", value: 151},
    {media: "Twitter", value: 1800}
 ];
 const likesData = [
    {media: "Instagram", value: 5000},
    {media: "YouTube", value: 3000},
    {media: "Twitter", value: 30000}
 ];
 
 // set the dimensions and margins of the graph
 const margin = 80;
 const width = 500;
 const height = 500;
 
 // set the actual graph shapes and things
 const svg = d3.select("#kait-data")
   .append("svg")
     .attr("width", 600)
     .attr("height", 640)
   .append("g")
     .attr("transform", "translate(80,80)");

// add title
 const title = svg.append("text")
       .attr("transform", "translate(20,0)")
       .attr("x", 0)
       .attr("y", -20)
       .attr("font-size", "24px")
       .text("Number of Followers on Social Media")

// textures.js 

    const texture1 =  textures
    .lines()
    .heavier(10)
    .thinner(1.5);
         
    svg.call(texture1);

    const texture2 =  textures
    .lines()
    .size(4)
    .strokeWidth(1);
    
    svg.call(texture2);

    const texture3 = textures
    .circles()
    .size(10)
    .radius(2)
    .fill("firebrick");

    svg.call(texture3);
    const color = d3.scaleOrdinal().domain(followerData).range([texture1.url(), texture2.url(), texture3.url()]);
    
// scales 
    
 let x = d3.scaleBand()
   .range([ 0, width])
   .padding(0.15);
 let xAxis = svg.append("g")
   .attr("transform", "translate(0," + height + ")")
 
 let y = d3.scaleLinear()
   .range([ height, 0]);
 let yAxis = svg.append("g")
   .attr("class", "myYaxis")


// update the data here 

 function update(data) {
  
   x.domain(data.map(function(d) { return d.media; }))
   xAxis.call(d3.axisBottom(x))
   .selectAll("text")
   .attr("transform", "translate(-10,0)rotate(-45)")
   .style("text-anchor", "end");

   y.domain([0, d3.max(data, function(d) { return d.value }) ]);
   yAxis.call(d3.axisLeft(y));

   
   let newBars = svg.selectAll("rect")
     .data(data)
 
   newBars
     .enter()
     .append("rect") 
     .merge(newBars)
     .transition() 
     .duration(1500)
     .style('fill', function(d){return color(d.value)})
     .attr("x", function(d) { return x(d.media); })
     .attr("y", function(d) { return y(d.value); })
     .attr("width", x.bandwidth())
     .attr("height", function(d) { return height - y(d.value); });
 }

 //set up the chart display
 update(followerData)


 //buttons are now working
 buttonFollowers.addEventListener("click", () => {
    update(followerData)
     title.text("Number of Followers on Social Media")
 })

 buttonLikes.addEventListener("click", () => {
    update(likesData)
    title.text("Number of Likes and Views on Social Media")
})
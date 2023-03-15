const header = document.createElement('header');
const body = document.createElement('div');
const line1 = document.createElement('hr');



body.innerHTML = `
  <div>
  <h1 style="color: blue;">Lab 7 Assignment</h1>
  <hr>
    <h2 style="color: Orange;">Task</h2>
    <p>In this task you have to reproduce this HTML page as is using <strong>only</strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:</p>
    <ul>
      <li class="domE" style="color: purple;">Find elements in the DOM (<strong>5 points</strong>)</li>
      <li class="domO" style="color: green;">Create/add/remove elements (<strong>5 points</strong>)</li>
      <li class="domE" style="color: blue;">Change content of the elements (<strong>5 points</strong>)</li>
      <li class="domO" style="color: purple;">Change styles of the elements (<strong>5 points</strong>)</li>
      <li class="domE" style="color: green;">Change attributes of the elements (<strong>5 points</strong>)</li>
      <li class="domO" style="color: blue;">Change classes of the elements (<strong>5 points</strong>)</li>
    </ul>
  </div>
  <hr>
  <div>
    <h2 style="color: crimson;">Submission</h2> 
    <button onClick="showNotification()">Press me</button>
    <p>To submit your work, follow these instructions:</p>
    <ul>
      <li class="domE" style="color: purple;">Create a new repository on Github, named <strong>lab7 (1 point)</strong></li>
      <li class="domO" style="color: green;">Clone this repository to your local machine and work inside it</li>
      <li class="domE" style="color: blue;">Create a new HTML file, called <strong>index.html</strong>, which has only one &lt;h1&gt; tag with "Hello, World!" message <strong>(1 point)</strong></li>
      <li class="domO" style="color: gray;">Create a new JavaScript file, called <strong>main.js</strong>, which must contain your program (assignment) described above <strong>(1 point)</strong></li>
      <li class="domE" style="color: pink;">Link this main.js file to your <strong>index.html</strong> file (Note: place your script at the end of the body section)</li>
      <li class="domO" style="color: brown;">Write a JavaScript program in <strong>main.js</strong> to make your <strong>index.html</strong> look identical to this HTML file <strong>(5 points)</strong></li>
      <li class="domE" style="color: red;">After you finish your work, submit it to the Github <strong>(2 points)</strong></li>
    </ul>
    <hr>
  </div>
`

line1.style.border = 'none';
line1.style.borderWidth = '2px 0';
line1.style.borderColor = 'black';
line1.style.marginTop = '0';
line1.style.marginBottom = '10px';
line1.style.height = '2px';
line1.style.width = '100%';
line1.style.position = 'static';


function showNotification() {
    alert("Congratulations, we have added another element");
  }

document.body.appendChild(header);
document.body.appendChild(line1);
document.body.appendChild(body);
function setTimer(){
const element1=`
<div>
 <h5>Java script</h5>
  <input type="text"/>
  <p>${new Date().toLocaleTimeString()}</p>
</div>
`;
document.getElementById('cont1').innerHTML=element1;


const element2=React.createElement(
  'div',
  null,
  React.createElement('h1',null,'React'),
  React.createElement('div',null,React.createElement('input',{type:'text'})),
  React.createElement('p',null,new Date().toLocaleTimeString())

)

ReactDOM.render(element2,document.getElementById('cont2'))
}

setInterval(setTimer,1000)
console.log("text");
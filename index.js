var katzDeliLine = [];
var lineNumber = 0;

function takeANumber(katzDeli, lineNumber)
{
  lineNumber++;
  katzDeli.push(lineNumber);
  return(`Now serving: ${lineNumber}`);
}

function nowServing(currentLine)
{
  var x = [];
  if(currentLine.length === 0)
  {
    x = "There is nobody waiting to be served!";
  }
  else
  {
    x = "Currently serving " + currentLine[0] + ".";
    currentLine.shift();
  }
  return x;
}

var katzDeliLine = [];

function currentLine(x)
{
  var line = [];
  if (x.length === 0)
  {
    return "The line is currently empty.";
  }
  else 
  {
   for (var i = 0; i < x.length; i++)
   {
     line += (i + 1) + ". " + x[i] + ", ";
   }
   line = line.slice(0, line.length - 2);
   return "The line is currently: " + line;
  }
}
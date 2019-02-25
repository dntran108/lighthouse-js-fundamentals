var ingredients = ["eggs","milk","flour","sugar","baking soda","baking powder","chocolate chips","bananas"];

// Write a while loop that prints out the contents of ingredients:
var count = 0;
while (count < ingredients.length)
{
  console.log(ingredients[count]);
  count++;
}

// Write a for loop that prints out the contents of the ingredients:
for (count = 0; count < ingredients.length; count ++)
{
  console.log(ingredients[count]);
}

// Write any loop tha(t prints out contents of the ingredient backwards:
for (count = ingredients.length -1; count >= 0; count --)
{
  console.log(ingredients[count]);
}
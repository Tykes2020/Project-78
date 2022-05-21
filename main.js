var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","Grandpa.jpeg", "Grandma.jpeg" , "Dad.jpeg", "Mom.jpeg", "Daughter.png", "Son.jpeg", "Daksh.jpeg"];
var names = ["Family Book","Grandpa", "Grandma", "Daddy", "Mommy", "Sister", "Son", "Brother"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 7
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

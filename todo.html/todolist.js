var ul=document.getElementById("list.container");
    var input=document.getElementById("input");
    function add()
    {
        var listitems=document.createElement("li");
        listitems.innerHTML=input.value+"<button onclick='change(this)'>edit</button>" +"<button onclick='deleteItem(event)'>delete</button>";
        ul.append(listitems);

    }
    function deleteItem(event)
    {
      event.target.parentElement.remove();
    }
    var currentItem=null;
    function change(event)
    {

      currentItem=event.parentElement;
      var popup=document.getElementById("popup");
      popup.style.display="block";
    }
    function update2(event)
    {
      var input2=document.getElementById("input2");
      var inputvalue=input2.value;
      currentItem.innerHTML=inputvalue+"<button onclick='deleteItem(event)'>delect</button>"+"<button onclick='change(this)'>Edit</button>";
      popup.style.display="none";
        input2.value='';
    }
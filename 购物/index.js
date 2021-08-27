var check=document.querySelectorAll('.check');
var checklen=check.length;
var single=document.querySelectorAll('.single');
var singlelen=single.length;
var itembox=document.querySelectorAll('.item-box');
    var itemboxlen=itembox.length;

for(var i=0;i<checklen;i++)
{
    check[i].onclick=function(e){
        var count=0;
        if(e.target.getAttribute('id')=='all')
        {
            for(var j=0;j<singlelen;j++)
            {
                single[j].checked=this.checked;
            }
        }
        for(var k=0;k<singlelen;k++)
        {
            if(single[k].checked){
                count++;
            }
            if(count==singlelen){
                all.checked=true;
            }else{
                all.checked=false;
            }
        }
        ftotal();
    }
    
}
for(var i=0;i<itemboxlen;i++)
{
    itembox[i].onclick=function(e){
        var input=this.getElementsByTagName('input')[1];
        switch(e.target.className){
            case 'add':
                input.value=input.value*1+1;
                ftotalsum(this);
                break;
            case 'reduce':
                input.value=input.value*1-1<=1?1:parseInt(input.value)-1;
                ftotalsum(this);
                break;
            case 'col col-action u-r':
                var con=confirm('确定删除吗');
                if(con){
                    this.parentNode.removeChild(this);
                }
                break;
        }
        
        ftotal();
    }
    itembox[i].onkeyup=function(e){
        ftotalsum(this);
        ftotal();
    }
}
function ftotalsum(that){
    var num=that.getElementsByTagName('input')[1].value;
    var price=parseInt(that.querySelector('.col-price').innerHTML);
    that.querySelector('.col-sum').innerHTML=num*price+'元';
}

function ftotal(){
    var totalprice=document.getElementById('totalprice');
    var totalnum=document.getElementById('totalnum');
    var num=0;
    var price=0;
    var itembox=document.querySelectorAll('.item-box');
    var itemboxlen=itembox.length;
    for(var i=0;i<itemboxlen;i++){
          if(itembox[i].getElementsByTagName('input')[0].checked){
              num+=parseInt(itembox[i].getElementsByTagName('input')[1].value);
              price+=parseInt(itembox[i].querySelector('.col-sum').innerHTML);
          }
    }
    totalnum.innerHTML=num;
    totalprice.innerHTML=price;
}
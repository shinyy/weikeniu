
$(function(){
	function datas(){
		this.datastore=[];
		this.top=0;
		this.push=function(ele){
			if(this.top<14){
				this.datastore[this.top++]=ele;
			}
		};
		this.pop=function(){
			if(this.top>0){
				this.datastore.pop();
				this.top--;				
			}
		};
		this.show=function(){
			return this.datastore.join("");
		};
	};
	var number;
	var phoneNum=new datas();
	var clickNum=0;
	$(".num-key-row").children(".num-k").on("click",function(){
			if(clickNum<11){
				clickNum++;
			}
			number=$(this).attr("data");
			if(clickNum%3==0){
				phoneNum.push(number);
				phoneNum.push(" ");
			}else{
				phoneNum.push(number);
			}
			$(".scrn-txt").text(phoneNum.show());	
			if(phoneNum.top==14){
				$(".submit").addClass("cur");
			}		
	})
	$(".num-key-row").children(".del").click(function(){
		if(clickNum>0){
				clickNum--;
			}
		if(clickNum%3==0){
			phoneNum.pop();
			phoneNum.pop();

		}else{
			phoneNum.pop();

		}
		$(".submit").removeClass("cur");
		$(".scrn-txt").text(phoneNum.show());		
		});
	$(".slide-bar").click(function(){
		$(".number-bar").fadeOut();
	})
	$(".num-key-row").on("click",".cur",function(){
        $(".phonenumber").val(phoneNum.show());
		$(".number-bar").fadeOut();
	})	
})
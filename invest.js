const btn1 = document.getElementById('inv1');
const btn2 = document.getElementById('inv2');
const btn3 = document.getElementById('inv3');
const btn4 = document.getElementById('inv4');
const info = document.createElement('div');

btn1.addEventListener('click', () => {
	info.classList.remove('side2');
	info.classList.remove('side3');
	info.classList.remove('side4');
	btn2.style.transform = "translateY(0px)";
	btn3.style.transform = "translateY(0px)";
	btn4.style.transform = "translateY(0px)";
	if(document.getElementById('side1')){
		info.remove();
		btn1.style.transform = "translateY(0px)";
		btn1.style.boxShadow = "0 5px 10px rgba(154, 160, 185, 0.5), 0 5px 15px rgba(0, 0, 0, 0.5)";
	}else{

		info.classList.add('side1');
		info.innerHTML = `
			<p id="side1">
				The majority of raised funds will be spread out
				through various trustworthy staking pools and farming
				contracts with an estimated 20% APY.
			</p>
		`;
		document.getElementById('inv').appendChild(info);
		btn1.style.transform = "translateY(60px)";
		btn1.style.boxShadow = "none";
	}
	if(window.innerWidth < 512 && document.getElementById('side1')){
		btn2.style.display = "none";
		btn3.style.display = "none";
		btn4.style.display = "none";
	}else if(window.innerWidth < 512){
		btn2.style.display = "flex";
		btn3.style.display = "flex";
		btn4.style.display = "flex";
	}
});

btn2.addEventListener('click', () => {
	info.classList.remove('side1');
	info.classList.remove('side3');
	info.classList.remove('side4');
	btn1.style.transform = "translateY(0px)";
	btn3.style.transform = "translateY(0px)";
	btn4.style.transform = "translateY(0px)";
	if(document.getElementById('side2')){
		info.remove();
		btn2.style.transform = "translateY(0px)";
		btn2.style.boxShadow = "0 5px 10px rgba(154, 160, 185, 0.5), 0 5px 15px rgba(0, 0, 0, 0.5)";
	}else{
		info.classList.add('side2');
		info.innerHTML = `
			<p id="side2">
				The NFTsurances will yield a 5% return for all sales
				on secondary marketplaces, part of which will be used
				to further increase reserves. 
			</p>
		`;
		document.getElementById('inv').appendChild(info);
		btn2.style.transform = "translateY(60px)";
		btn2.style.boxShadow = "none";
	}
	if(window.innerWidth < 512 && document.getElementById('side2')){
		btn1.style.display = "none";
		btn3.style.display = "none";
		btn4.style.display = "none";
	}else if(window.innerWidth < 512){
		btn1.style.display = "flex";
		btn3.style.display = "flex";
		btn4.style.display = "flex";
	}
});


btn3.addEventListener('click', () => {
	info.classList.remove('side1');
	info.classList.remove('side2');
	info.classList.remove('side4');
	btn1.style.transform = "translateY(0px)";
	btn2.style.transform = "translateY(0px)";
	btn4.style.transform = "translateY(0px)";
	if(document.getElementById('side3')){
		info.remove();
		btn3.style.transform = "translateY(0px)";
		btn3.style.boxShadow = "0 5px 10px rgba(154, 160, 185, 0.5), 0 5px 15px rgba(0, 0, 0, 0.5)";
	}else{
		info.classList.add('side3');
		info.innerHTML = `
			<p id="side3">
				Additionally we will offer Insurance as a Service;
				any community that intends to grow their investors
				confidence can pay a fee in order to get onto the weekly Safelist.
			</p>
		`;
		document.getElementById('inv').appendChild(info);
		btn3.style.transform = "translateY(60px)";
		btn3.style.boxShadow = "none";
	}
	if(window.innerWidth < 512 && document.getElementById('side3')){
		btn2.style.display = "none";
		btn1.style.display = "none";
		btn4.style.display = "none";
	}else if(window.innerWidth < 512){
		btn2.style.display = "flex";
		btn1.style.display = "flex";
		btn4.style.display = "flex";
	}
});

btn4.addEventListener('click', () => {
	info.classList.remove('side1');
	info.classList.remove('side2');
	info.classList.remove('side3');
	btn1.style.transform = "translateY(0px)";
	btn2.style.transform = "translateY(0px)";
	btn3.style.transform = "translateY(0px)";
	if(document.getElementById('side4')){
		info.remove();
		btn4.style.transform = "translateY(0px)";
		btn4.style.boxShadow = "0 5px 10px rgba(154, 160, 185, 0.5), 0 5px 15px rgba(0, 0, 0, 0.5)";
	}else{
		info.classList.add('side4');
		info.innerHTML = `
			<p id="side4">
				Our <a href="#security">security concept</a>
				is not something we keep to ourselves, 
				but instead enables other projects to have
				launches similar to our own, with maximum security in place.
			</p>
		`;
		document.getElementById('inv').appendChild(info);
		btn4.style.transform = "translateY(60px)";
		btn4.style.boxShadow = "none";
	}
	if(window.innerWidth < 512 && document.getElementById('side4')){
		btn2.style.display = "none";
		btn3.style.display = "none";
		btn1.style.display = "none";
	}else if(window.innerWidth < 512){
		btn2.style.display = "flex";
		btn3.style.display = "flex";
		btn1.style.display = "flex";
	}
});




class TextScramble{constructor(e){this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}setText(e){let t=this.el.innerText,s=Math.max(t.length,e.length),r=new Promise(e=>this.resolve=e);this.queue=[];for(let h=0;h<s;h++){let n=t[h]||"",a=e[h]||"",l=Math.floor(40*Math.random()),i=l+Math.floor(40*Math.random());this.queue.push({from:n,to:a,start:l,end:i})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),r}update(){let e="",t=0;for(let s=0,r=this.queue.length;s<r;s++){let{from:h,to:n,start:a,end:l,char:i}=this.queue[s];this.frame>=l?(t++,e+=n):this.frame>=a?((!i||.28>Math.random())&&(i=this.randomChar(),this.queue[s].char=i),e+=`<span class="dud">${i}</span>`):e+=h}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}const phrases=["Hello!","Front-end Developer","Flutter Developer","Hola!","Ai enthusiast",":D"],el=document.querySelector(".text"),fx=new TextScramble(el);let counter=0;const next=()=>{fx.setText(phrases[counter]).then(()=>{setTimeout(next,800)}),counter=(counter+1)%phrases.length};next();
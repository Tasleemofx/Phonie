function startApp() {
  // Your entire app should not necessarily be coded inside this 
  const mobileError = document.querySelector(".mobile_error");
  const mobileBlock = document.querySelector(".mobile_div");
  const mobile = document.querySelector(".phone_no")

  const imgdiv = document.createElement('div');
  imgdiv.classList.add('imgdiv')
  const imgItem = document.createElement('img');
  imgItem.classList.add('imgdiv')
  imgItem.alt = "Network image";
  let mobileValue;
  function CheckValue() {
    setInterval(
      mobileValue = mobile.value
      , 5000);
    if (mobileValue.length >= 4) {
      if (mobileValue.startsWith("0803") ||
        mobileValue.startsWith("0806") ||
        mobileValue.startsWith("0703") ||
        mobileValue.startsWith("0706") ||
        mobileValue.startsWith("0906") ||
        mobileValue.startsWith("0903") ||
        mobileValue.startsWith("0801") ||
        mobileValue.startsWith("0813") ||
        mobileValue.startsWith("0816") ||
        mobileValue.startsWith("0810")) {
        mobileError.innerHTML = ""
        mobileBlock.innerHTML = ""
        imgItem.src = 'https://th.bing.com/th/id/OIP.p4hAOrVbBF7fCt0nZ-WIKwAAAA?w=147&h=150&c=7&r=0&o=5&pid=1.7';
        imgdiv.append(imgItem)
        mobileBlock.appendChild(imgdiv);
      } else if (
        mobileValue.startsWith('0805') ||
        mobileValue.startsWith('0705') ||
        mobileValue.startsWith('0807') ||
        mobileValue.startsWith('0815') ||
        mobileValue.startsWith('0811') ||
        mobileValue.startsWith('0905')
      ) {
        mobileError.innerHTML = ""
        mobileBlock.innerHTML = ""
        imgItem.src = 'https://th.bing.com/th/id/OIP.nqZEAhrrzB_KQtEIlWdNUAHaHJ?pid=ImgDet&rs=1';
        imgdiv.append(imgItem)
        mobileBlock.appendChild(imgdiv);
      } else if (
        mobileValue.startsWith('0802') ||
        mobileValue.startsWith('0808') ||
        mobileValue.startsWith('0812') ||
        mobileValue.startsWith('0901') ||
        mobileValue.startsWith('0902') ||
        mobileValue.startsWith('0701') ||
        mobileValue.startsWith('0708') ||
        mobileValue.startsWith('0907')) {
        mobileError.innerHTML = ""
        mobileBlock.innerHTML = ""
        imgItem.src = 'https://i1.wp.com/pctechmag.com/wp-content/uploads/2012/09/airtel-logo.jpg';
        imgdiv.append(imgItem)
        mobileBlock.appendChild(imgdiv);
      } else if (
        mobileValue.startsWith('0809') ||
        mobileValue.startsWith('0909') ||
        mobileValue.startsWith('0817') ||
        mobileValue.startsWith('0818')) {
        mobileError.innerHTML = ""
        mobileBlock.innerHTML = ""
        imgItem.src = 'https://theeagleonline.com.ng/wp-content/uploads/2017/07/9-Mobile-Logo-Portrait-1.jpg';

        imgdiv.append(imgItem)
        mobileBlock.appendChild(imgdiv);
      } else {
        const para = document.createElement('p');
        mobileError.innerHTML = ""
        mobileBlock.innerHTML = ""
        para.innerText = "Error! Network type does not exist";
        para.classList.add('error');
        mobileError.appendChild(para)
      }
    }
  }
  mobile.addEventListener('input', CheckValue)
  const header = document.querySelector('h2');
  if (header) {
    header.textContent = 'make some magic here!!';
  }
};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //
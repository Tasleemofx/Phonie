function startApp() {
  // Your entire app should not necessarily be coded inside this 
  const mobileBlock = document.querySelector(".mobile");
  const mobile = document.querySelector(".phone_no")

  const imgdiv = document.createElement('div');
  imgdiv.classList.add('imgdiv')
  const imgItem = document.createElement('img');
  imgItem.classList.add('imgdiv')
  imgItem.alt = "Network image";
  function CheckValue() {
    const mobileValue = mobile.value
    if (mobileValue == "" || mobileValue == null) {
      console.log("error")
    } else
      if (mobileValue.startsWith("0803") ||
        mobileValue.startsWith("0806") ||
        mobileValue.startsWith("0703") ||
        mobileValue.startsWith("0706")) {
        imgItem.src = 'https://th.bing.com/th/id/OIP.p4hAOrVbBF7fCt0nZ-WIKwAAAA?w=147&h=150&c=7&r=0&o=5&pid=1.7';
        imgdiv.append(imgItem)
        mobileBlock.appendChild(imgdiv);
      }
      else if (mobileValue.startsWith('0805') ||
        mobileValue.startsWith('0705') ||
        mobileValue.startsWith('0807') ||
        mobileValue.startsWith('0815') ||
        mobileValue.startsWith('0811') ||
        mobileValue.startsWith('0905')) {
        imgItem.src = 'https://th.bing.com/th/id/OIP.nqZEAhrrzB_KQtEIlWdNUAHaHJ?pid=ImgDet&rs=1';
        imgdiv.append(imgItem)
        mobileBlock.appendChild(imgdiv);
      }
      else if (mobileValue.startsWith('0802') ||
        mobileValue.startsWith('0808') ||
        mobileValue.startsWith('0812') ||
        mobileValue.startsWith('0901') ||
        mobileValue.startsWith('0701') ||
        mobileValue.startsWith('0708') ||
        mobileValue.startsWith('0907')) {
        imgItem.src = 'https://i1.wp.com/pctechmag.com/wp-content/uploads/2012/09/airtel-logo.jpg';
        imgdiv.append(imgItem)
        mobileBlock.appendChild(imgdiv);
      } else {
        imgItem.src = 'https://theeagleonline.com.ng/wp-content/uploads/2017/07/9-Mobile-Logo-Portrait-1.jpg';

        imgdiv.append(imgItem)
        mobileBlock.appendChild(imgdiv);
      }
  }
  document.addEventListener('change', CheckValue)
  const header = document.querySelector('h2');
  if (header) {
    header.textContent = 'make some magic here!!';
  }
};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //
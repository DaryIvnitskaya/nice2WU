/*
 * Copyright (c) 2024 Flerosoft (https://flerosoft.com)
 * Software Name: Cookie Notice Pro - jQuery Plugin
 * Product Page : https://cookienoticepro.flerosoft.com
 * Documentation: https://cookienoticepro.flerosoft.com/docs
 * Description: Cookie Notice Pro, a lightweight jQuery plugin, helps you to comply with GDPR.
Make your own cookie information popup in minutes.
 * Changelog: https://cookienoticepro.flerosoft.com/docs/getting-started#item-1-4
*/

;(function ($) {
  'use strict'

  const settingsIcon =
    ''
    const cookieIcon =
    '<svg width="90" height="68" viewBox="0 0 90 68" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_238_238)"> <path d="M9.77335 23.3316V28.59C11.5436 29.3366 13.4918 29.7478 15.5333 29.7478H16.1866V23.3316H9.77335ZM65.9355 4.35718C63.2465 1.66529 59.5251 0 55.4187 0H15.5333C10.4616 0 5.98196 2.53731 3.29883 6.41619H55.4187C60.0851 6.41619 63.8765 10.2105 63.8765 14.8739C63.8765 19.5373 60.0851 23.3316 55.4187 23.3316H28.9724V29.7478H55.4187C63.6344 29.7478 70.2926 23.0866 70.2926 14.8739C70.2926 10.7646 68.6274 7.04906 65.9355 4.35718Z" fill="#B28A5B"/> <path d="M16.4785 0H0.437988V6.41036H16.4785V0Z" fill="#B28A5B"/> <path d="M89.5588 23.3374V29.7478H66.6763C68.9161 28.0504 70.7622 25.8601 72.0513 23.3374H89.5588Z" fill="#B28A5B"/> <path d="M89.5618 0V6.41036H72.063C71.1852 4.68382 70.0274 3.08561 68.6158 1.67696C68.0092 1.07034 67.3705 0.510379 66.6968 0H89.5618Z" fill="#B28A5B"/> <path d="M25.5428 47.0044H0.437988V53.4148H25.5428V47.0044Z" fill="#B28A5B"/> <path d="M89.5588 47.0044H38.8125V53.4118H89.5588V47.0044Z" fill="#B28A5B"/> <path d="M89.5619 55.751H0.437988V68.0001H89.5619V55.751Z" fill="#282828"/> <path d="M16.1867 5.87671H9.77344V53.4149H16.1867V5.87671Z" fill="#B28A5B"/> <path d="M35.3859 24.8977H28.9727V53.4148H35.3859V24.8977Z" fill="#B28A5B"/> <path d="M16.0001 64.3136H15.9739C15.7755 64.6869 15.5072 64.9582 15.1689 65.1215C14.8306 65.2877 14.4544 65.3694 14.0402 65.3694C13.559 65.3694 13.1245 65.2877 12.7424 65.1215C12.3604 64.9552 12.0308 64.7248 11.7537 64.4303C11.4592 64.1095 11.2346 63.7362 11.0859 63.3045C10.9342 62.8729 10.8584 62.4004 10.8584 61.8813C10.8584 61.3038 10.9576 60.773 11.1559 60.2947C11.3542 59.8164 11.6429 59.4169 12.025 59.0961C12.2962 58.8657 12.6054 58.6907 12.9553 58.5624C13.3053 58.4341 13.7019 58.3728 14.1482 58.3728C14.571 58.3728 14.9502 58.4282 15.2885 58.5361C15.6268 58.644 15.9184 58.7957 16.1663 58.9882C16.4142 59.1807 16.6126 59.4111 16.7671 59.6794C16.9217 59.9477 17.0267 60.2422 17.0879 60.5601H15.551C15.4664 60.3064 15.3147 60.0906 15.0989 59.9127C14.8831 59.7348 14.5798 59.6473 14.1948 59.6473C13.8944 59.6473 13.6319 59.7056 13.4132 59.8194C13.1945 59.9331 13.0107 60.0906 12.862 60.2889C12.7133 60.4872 12.6054 60.7235 12.5324 60.9976C12.4595 61.2718 12.4245 61.5663 12.4245 61.8784C12.4245 62.1904 12.4654 62.5025 12.5499 62.7737C12.6345 63.045 12.7541 63.2812 12.9057 63.4795C13.0574 63.6778 13.247 63.8324 13.4657 63.9461C13.6844 64.0599 13.9353 64.1124 14.2123 64.1124C14.4486 64.1124 14.6585 64.0745 14.851 63.9986C15.0406 63.9228 15.201 63.8266 15.3293 63.7041C15.4576 63.5845 15.5597 63.4445 15.6326 63.2841C15.7055 63.1237 15.7405 62.9604 15.7405 62.7912V62.765H14.3844V61.6159H17.1958V65.2148H16.1284L16.003 64.3107L16.0001 64.3136Z" fill="white"/> <path d="M18.7856 58.4895H21.985C22.3116 58.4895 22.612 58.5303 22.8949 58.6149C23.1749 58.6995 23.4169 58.8249 23.624 58.9911C23.8282 59.1574 23.9915 59.3586 24.1081 59.5978C24.2248 59.8369 24.2831 60.1081 24.2831 60.4173C24.2831 60.8139 24.184 61.1522 23.9857 61.4293C23.7873 61.7063 23.4694 61.9134 23.0349 62.0534V62.0797C23.3732 62.1817 23.6211 62.3334 23.7815 62.5375C23.9419 62.7388 24.044 63.0217 24.0936 63.3833C24.1227 63.6137 24.1461 63.8266 24.1606 64.0308C24.1752 64.232 24.1898 64.4128 24.2044 64.5732C24.219 64.7336 24.2394 64.862 24.2627 64.9611C24.286 65.0603 24.3269 65.1215 24.3794 65.1478V65.2207H22.8599C22.8103 65.1973 22.7782 65.1361 22.7549 65.0399C22.7345 64.9436 22.717 64.824 22.6995 64.684C22.6849 64.5411 22.6703 64.3837 22.6587 64.2087C22.647 64.0337 22.6324 63.8529 22.6149 63.6662C22.5741 63.3279 22.4633 63.0742 22.2854 62.9079C22.1075 62.7388 21.8304 62.6542 21.4571 62.6542H20.3168V65.2207H18.7798V58.4953L18.7856 58.4895ZM20.3226 61.5109H21.6875C22.0316 61.5109 22.2941 61.4322 22.4749 61.2718C22.6557 61.1114 22.7462 60.8956 22.7462 60.6243C22.7462 60.3531 22.6645 60.1256 22.4983 59.9594C22.332 59.7932 22.0783 59.7115 21.7342 59.7115H20.3226V61.5109Z" fill="white"/> <path d="M28.8765 65.3781C28.3632 65.3781 27.9024 65.2906 27.4941 65.1157C27.0829 64.9407 26.7358 64.6957 26.4442 64.3836C26.1555 64.0716 25.9338 63.6983 25.7792 63.2725C25.6247 62.8467 25.5488 62.38 25.5488 61.8813C25.5488 61.3826 25.6247 60.9072 25.7792 60.4814C25.9338 60.0556 26.1555 59.6852 26.4442 59.3732C26.7329 59.064 27.0829 58.819 27.4941 58.6411C27.9024 58.4632 28.3661 58.3757 28.8765 58.3757C29.3869 58.3757 29.8418 58.4661 30.2502 58.6411C30.6585 58.819 31.0084 59.064 31.3001 59.3732C31.5888 59.6852 31.8105 60.0527 31.965 60.4814C32.1196 60.9101 32.1954 61.3768 32.1954 61.8813C32.1954 62.3859 32.1196 62.8467 31.965 63.2725C31.8105 63.7012 31.5888 64.0716 31.3001 64.3836C31.0113 64.6957 30.6614 64.9407 30.2502 65.1157C29.8389 65.2906 29.381 65.3781 28.8765 65.3781ZM28.8853 64.1124C29.174 64.1124 29.4277 64.0541 29.6435 63.9403C29.8593 63.8266 30.0402 63.6691 30.186 63.4708C30.3318 63.2725 30.4397 63.0362 30.5126 62.765C30.5855 62.4938 30.6205 62.1992 30.6205 61.8784C30.6205 61.5576 30.5855 61.263 30.5126 60.9889C30.4397 60.7147 30.3318 60.4756 30.186 60.2714C30.0402 60.0673 29.8593 59.9069 29.6435 59.7931C29.4277 59.6794 29.174 59.6211 28.8853 59.6211C28.5965 59.6211 28.3428 59.6794 28.1211 59.7931C27.8995 59.9069 27.7187 60.0673 27.5699 60.2714C27.4212 60.4756 27.3104 60.7147 27.2345 60.9889C27.1587 61.263 27.1208 61.5605 27.1208 61.8784C27.1208 62.1963 27.1587 62.4938 27.2345 62.765C27.3104 63.0362 27.4212 63.2725 27.5699 63.4708C27.7187 63.6691 27.9024 63.8266 28.1211 63.9403C28.3399 64.0541 28.5965 64.1124 28.8853 64.1124Z" fill="white"/> <path d="M36.3516 65.3432C35.4358 65.3432 34.7417 65.1303 34.2663 64.7045C33.7938 64.2786 33.5576 63.6691 33.5576 62.8729V58.4866H35.0946V62.9079C35.0946 63.2754 35.1967 63.5641 35.3979 63.777C35.5991 63.987 35.917 64.0949 36.3516 64.0949C36.754 64.0949 37.0603 63.9841 37.2644 63.7654C37.4686 63.5466 37.5707 63.2521 37.5707 62.8846V58.4895H39.1164V62.8758C39.1164 63.6662 38.8801 64.2728 38.4106 64.7015C37.941 65.1303 37.2528 65.3432 36.3487 65.3432H36.3516Z" fill="white"/> <path d="M40.7554 58.4895H43.7476C44.5322 58.4895 45.13 58.6966 45.5471 59.1136C45.7513 59.3178 45.9117 59.554 46.0225 59.8223C46.1333 60.0906 46.1887 60.391 46.1887 60.7206C46.1887 61.0501 46.1362 61.333 46.0312 61.5984C45.9262 61.8638 45.7746 62.0913 45.5792 62.2809C45.3838 62.4705 45.1475 62.6192 44.8705 62.7242C44.5934 62.8292 44.2784 62.8817 43.9314 62.8817H42.3215V65.2148H40.7583V58.4895H40.7554ZM42.3186 61.6626H43.631C43.9576 61.6626 44.2055 61.578 44.3776 61.4089C44.5497 61.2397 44.6342 61.0122 44.6342 60.7206C44.6342 60.4289 44.5497 60.1985 44.3776 60.0381C44.2055 59.8777 43.9606 59.799 43.6397 59.799H42.3186V61.6626Z" fill="white"/> <path d="M55.1739 64.3136H55.1477C54.9494 64.6869 54.6811 64.9582 54.3427 65.1215C54.0044 65.2877 53.6282 65.3694 53.2141 65.3694C52.7329 65.3694 52.2983 65.2877 51.9163 65.1215C51.5342 64.9552 51.2046 64.7248 50.9276 64.4303C50.633 64.1095 50.4084 63.7362 50.2597 63.3045C50.1081 62.8729 50.0322 62.4004 50.0322 61.8813C50.0322 61.3038 50.1314 60.773 50.3297 60.2947C50.528 59.8164 50.8168 59.4169 51.1988 59.0961C51.47 58.8657 51.7792 58.6907 52.1292 58.5624C52.4791 58.437 52.8758 58.3728 53.322 58.3728C53.7449 58.3728 54.124 58.4282 54.4623 58.5361C54.8006 58.644 55.0923 58.7957 55.3402 58.9882C55.5881 59.1807 55.7864 59.4111 55.941 59.6794C56.0955 59.9477 56.2005 60.2422 56.2618 60.5601H54.7248C54.6402 60.3064 54.4886 60.0906 54.2727 59.9127C54.0569 59.7348 53.7536 59.6473 53.3686 59.6473C53.0683 59.6473 52.8058 59.7056 52.587 59.8194C52.3683 59.9331 52.1846 60.0906 52.0358 60.2889C51.8871 60.4872 51.7792 60.7235 51.7063 60.9976C51.6334 61.2718 51.5984 61.5663 51.5984 61.8784C51.5984 62.1904 51.6392 62.5025 51.7238 62.7737C51.8083 63.045 51.9279 63.2812 52.0825 63.4795C52.2371 63.6778 52.4237 63.8324 52.6425 63.9461C52.8612 64.0599 53.112 64.1124 53.3891 64.1124C53.6253 64.1124 53.8353 64.0745 54.0278 63.9986C54.2173 63.9228 54.3777 63.8266 54.5061 63.7041C54.6344 63.5816 54.7365 63.4445 54.8094 63.2841C54.8823 63.1237 54.9173 62.9604 54.9173 62.7912V62.765H53.5611V61.6159H56.3726V65.2148H55.3052L55.1798 64.3107L55.1739 64.3136Z" fill="white"/> <path d="M57.9595 58.4895H60.0301L60.8701 61.2922C60.9313 61.5022 60.9897 61.7443 61.0509 62.0155C61.1121 62.2867 61.1646 62.5492 61.2142 62.8029C61.2755 63.0917 61.328 63.3891 61.3775 63.6895H61.4038C61.4505 63.3891 61.503 63.0917 61.5584 62.8029C61.605 62.5492 61.6604 62.2867 61.7158 62.0155C61.7742 61.7443 61.8354 61.5022 61.9025 61.2922L62.7249 58.4895H64.8219V65.2148H63.4016V62.2051C63.4016 61.9951 63.4074 61.7501 63.4191 61.473C63.4307 61.196 63.4424 60.9306 63.4541 60.6768C63.4716 60.3881 63.4891 60.0906 63.5095 59.7815H63.492C63.4366 60.0586 63.3811 60.3327 63.3199 60.6039C63.2703 60.8343 63.2149 61.0764 63.1537 61.333C63.0895 61.5897 63.0283 61.8172 62.967 62.0155L62.0075 65.2148H60.7418L59.7735 62.0155C59.7122 61.8172 59.651 61.5897 59.5868 61.333C59.5227 61.0764 59.4673 60.8343 59.4206 60.6039C59.3594 60.3327 59.3039 60.0586 59.2485 59.7815H59.231C59.2485 60.0877 59.266 60.3881 59.2864 60.6768C59.2981 60.9306 59.3098 61.196 59.3214 61.473C59.3331 61.7501 59.3389 61.9951 59.3389 62.2051V65.2148H57.9565V58.4895H57.9595Z" fill="white"/> <path d="M66.5308 58.4895H69.7126C70.4067 58.4895 70.9288 58.6441 71.2846 58.9503C71.6637 59.2828 71.8533 59.7086 71.8533 60.2335C71.8533 60.9101 71.4916 61.3564 70.7684 61.5809V61.6159C71.2029 61.718 71.5354 61.9134 71.7687 62.1992C72.002 62.485 72.1158 62.8379 72.1158 63.2521C72.1158 63.5787 72.0574 63.8616 71.9437 64.1007C71.83 64.3428 71.6666 64.547 71.4566 64.7161C71.0513 65.0486 70.4971 65.2119 69.7943 65.2119H66.5308V58.4866V58.4895ZM69.4939 61.193C69.7593 61.193 69.9722 61.1318 70.1326 61.0064C70.293 60.8839 70.3717 60.6943 70.3717 60.4406C70.3717 60.1869 70.2959 60.006 70.1413 59.8748C69.9868 59.7465 69.7768 59.6794 69.5143 59.6794H68.059V61.1901H69.4968L69.4939 61.193ZM69.631 64.0045C69.9313 64.0045 70.1705 63.9228 70.3455 63.7595C70.5088 63.6079 70.5905 63.4037 70.5905 63.1441C70.5905 62.8496 70.4971 62.6279 70.3105 62.485C70.1238 62.3392 69.8876 62.2692 69.6047 62.2692H68.059V64.0045H69.631Z" fill="white"/> <path d="M73.5273 58.4895H75.0643V61.0851H77.6045V58.4895H79.1415V65.2148H77.6045V62.3684H75.0643V65.2148H73.5273V58.4895Z" fill="white"/> </g> <defs> <clipPath id="clip0_238_238"> <rect width="89.1239" height="68" fill="white" transform="translate(0.437988)"/> </clipPath> </defs> </svg>'
  const closeIcon =
    '<?xml version="1.0" ?><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g fill="#bfb9b9"><path d="M48,0A48,48,0,1,0,96,48,48.0512,48.0512,0,0,0,48,0Zm0,84A36,36,0,1,1,84,48,36.0393,36.0393,0,0,1,48,84Z"/><path d="M64.2422,31.7578a5.9979,5.9979,0,0,0-8.4844,0L48,39.5156l-7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844,8.4844L39.5156,48l-7.7578,7.7578a5.9994,5.9994,0,1,0,8.4844,8.4844L48,56.4844l7.7578,7.7578a5.9994,5.9994,0,0,0,8.4844-8.4844L56.4844,48l7.7578-7.7578A5.9979,5.9979,0,0,0,64.2422,31.7578Z"/></g></svg>'

  /*
   *--------------------------------------------------------------------------
   * CONFIG OR SETTINGS - Customize the popup banner START
   *--------------------------------------------------------------------------
   */
  const config = {
    themeSettings: {
      primaryColor: '#B28A5B', // Primary Color of Popup Banner
      darkColor: '#3b3e4a', // Dark Theme Color
      lightColor: '#ffffff', // Light Theme Color
      themeMode: 'light', // Theme Mode (light|dark)
    },
    enableGoogleConsentMode: true, // Add support for Google consent mode v2 (https://cookiebannergenerator.com/implementing-google-consent-mode-v2-with-cookie-notice-pro-a-step-by-step-guide/)
    enableMinimize: true, // Enable minimized floating cookie icon to adjust preferences
    showCookieIcon: true, // Hide or show the cookie icon
    showSettingsBtn: true, // Hide or show the preference settings(true|false)
    showCloseIcon: false, // Hide or show the popup close icon(true|false)
    showDeclineBtn: true, // Hide or show the cookie decline button(true|false)
    fullWidth: false, // Full width popup works only when "displayPosition" is set to top/bottom
    allCheckboxesChecked: false, // The setting checkboxes should be checked by default initially or not(true|false)
    displayPosition: 'right', // Where popup should appear(top|right|bottom|left)
    settingsBtnLabel: '<span>Privatsphäre-Einstellungen individuell festlegen</span>', // Text of settings button
    delay: 2000, // After how much time should popup appear(2000 is equal to 2 seconds)
    expires: 365, // Expiry date of cookie(365 is equal to 365 days)
    title: 'Cookies', // Title of popup bannner
    description:
      '<span>Wir verwenden Cookies und ähnliche Technologien auf unserer Website und verarbeiten personenbezogene Daten von dir (z.B. IP-Adresse), um z.B. Inhalte und Anzeigen zu personalisieren, Medien von Drittanbietern einzubinden oder Zugriffe auf unsere Website zu analysieren. Die Datenverarbeitung kann auch erst in Folge gesetzter Cookies stattfinden. Wir teilen diese Daten mit Dritten, die wir in den Privatsphäre-Einstellungen benennen.</span><span>  Wir verwenden Cookies und ähnliche Technologien auf unserer Website und verarbeiten personenbezogene Daten von dir (z.B. IP-Adresse), um z.B. Inhalte und Anzeigen zu personalisieren, Medien von Drittanbietern einzubinden oder Zugriffe auf unsere Website zu analysieren. Die Datenverarbeitung kann auch erst in Folge gesetzter Cookies stattfinden. Wir teilen diese Daten mit Dritten, die wir in den Privatsphäre-Einstellungen benennen.</span>', // Message
    acceptBtnLabel: 'Alle akzeptieren', // Accept cookie button text
    declineInfoBtnLabel: 'Weiter ohne Einwilligung', // Decline cookie button text
    moreInfoBtnLink: '/privacy-policy/', // Learn more link(default: privacy policy page)
    moreInfoBtnLabel: '', // More info link text
    cookieTypesTitle: 'Akzeptierte Cookies auswählen', // Title of cookie preference options
    necessaryCookieTypeLabel: 'Notwendig', // Label text of Necessary cookie item
    floatingIconTooltip: 'Meine Einstellungen anpassen', // Tooltip of floating cookie icon (Minimized)
    necessaryCookieTypeDesc: 'Diese Cookies sind für das Funktionieren der Website erforderlich und können in unseren Systemen nicht ausgeschaltet werden.', // Hover text of necessary cookies
    onConsentAccept: () => {
      // It will inject scripts in head if cookie preferences menu(showSettingsBtn) is enabled
      console.log('Zustimmung angenommen!')
    },
    onConsentReject: () => {
      // This code will run on cookie reject/decline
      console.log('Zustimmung abgelehnt!')
    },
    cookieTypes: [
      // Cookie types, value and description (Cookie Preferences Selection)
      {
        type: 'Einstellungen',
        value: 'preferences', // WARNING: DO NOT EDIT THIS VALUE
        description:
          'Präferenz-Cookies ermöglichen einer Webseite sich an Informationen zu erinnern, die die Art beeinflussen, wie sich eine Webseite verhält oder aussieht, wie z. B. Ihre bevorzugte Sprache oder die Region in der Sie sich befinden.',
      },
      {
        type: 'Marketing',
        value: 'marketing', // WARNING: DO NOT EDIT THIS VALUE
        description:
          'Marketing-Cookies werden verwendet, um Besucher über Websites hinweg zu verfolgen. Ziel ist es, Anzeigen zu schalten, die für den einzelnen Nutzer relevant und ansprechend sind und damit für Publisher und Drittanbieter wertvoller sind.',
      },
      {
        type: 'Analyse',
        value: 'analytics', // WARNING: DO NOT EDIT THIS VALUE
        description:
          'Analyse-Cookies ermöglichen es uns, Besuche und Traffic-Quellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können. Sie helfen uns zu verstehen, welche Seiten beliebt oder unbeliebt sind und wie sich die Besucher auf der Website bewegen.',
      },
    ],
  }
  /*
   *--------------------------------------------------------------------------
   * CONFIG OR SETTINGS - Customize the popup banner END
   *--------------------------------------------------------------------------
   */

  const COOKIE_CONSENT = 'cnp_consent' // WARNING: DO NOT EDIT THIS VALUE
  const COOKIE_CONSENT_PREFS = 'cnp_prefs' // WARNING: DO NOT EDIT THIS VALUE
  const GOOGLE_CONSENT_MODE_AD_PREFS = 'cnp_gconsent_ad_prefs' // WARNING: DO NOT EDIT THIS VALUE
  const GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE = 'cnp_gconsent_analytics_storage' // WARNING: DO NOT EDIT THIS VALUE

  $.fn.cookieNoticePro = (event) => {
    typeof event === 'object' ? $.extend(true, config, event) : null
    changeRootVariables()
    let cookieConsentExists = cookieExists(COOKIE_CONSENT)
    let cookiePrefsValue = accessCookie(COOKIE_CONSENT_PREFS)

    // If consent is not accepted
    if (!cookieConsentExists || event == 'open') {
      $('#cookieNoticePro').remove()
      $('#cookieMinimizeIcon').remove()

      let cookieTypes =
        '<li><input type="checkbox" name="gdprPrefItem" value="necessary" checked="checked" disabled="disabled" data-compulsory="on"> <label title="' +
        config.necessaryCookieTypeDesc +
        '">' +
        config.necessaryCookieTypeLabel +
        '</label></li>'

      const preferences = JSON.parse(cookiePrefsValue)
      $.each(config.cookieTypes, (index, field) => {
        if (field.type !== '' && field.value !== '') {
          let cookieTypeDescription = ''
          if (field.description !== false) {
            cookieTypeDescription = ' title="' + field.description + '"'
          }
          cookieTypes +=
            '<li><input type="checkbox" id="gdprPrefItem' +
            field.value +
            '" name="gdprPrefItem" value="' +
            field.value +
            '" data-compulsory="on"> <label for="gdprPrefItem' +
            field.value +
            '"' +
            cookieTypeDescription +
            '>' +
            field.type +
            '</label></li>'
        }
      })

      let cookieNotice =
        '<div id="cookieNoticePro" class="' +
        config.themeSettings.themeMode +
        ' display-' +
        config.displayPosition +
        ' full-width-' +
        config.fullWidth +
        '"><div id="closeIcon">' +
        closeIcon +
        '</div><div class="title-wrap">' +
        cookieIcon +
        '<h4>' +
        config.title +
        '</h4></div><div class="content-wrap"><div class="msg-wrap"><p>' +
        config.description +
        ' <a style="color:' +
        config.themeSettings.primaryColor +
        ';" href="' +
        config.moreInfoBtnLink +
        '">' +
        config.moreInfoBtnLabel +
        '</a></p><div id="cookieSettings">' +
        settingsIcon +
        config.settingsBtnLabel +
        '</div><div id="cookieTypes" style="display:none;"><h5>' +
        config.cookieTypesTitle +
        '</h5><ul>' +
        cookieTypes +
        '</ul></div></div><div class="btn-wrap"><button id="cookieAccept" style="color:' +
        config.themeSettings.lightColor +
        ';background:' +
        config.themeSettings.primaryColor +
        ';border: 1px solid ' +
        config.themeSettings.primaryColor +
        ';" type="button">' +
        config.acceptBtnLabel +
        '</button><button id="cookieReject" style="color:' +
        config.themeSettings.primaryColor +
        ';border: 1px solid ' +
        config.themeSettings.primaryColor +
        ';" type="button">' +
        config.declineInfoBtnLabel +
        '</button></div>'

      setTimeout(
        () => {
          $('body').append(cookieNotice)
          $('#cookieNoticePro')
            .hide()
            .fadeIn('slow', () => {
              if (event == 'open') {
                $('#cookieSettings').trigger('click')
                $.each(preferences, (index, field) => {
                  $('input#gdprPrefItem' + field).prop('checked', true)
                })
              }
            })
          if (!config.showSettingsBtn) {
            $('#cookieNoticePro #cookieSettings').hide()
          }
          if (!config.showDeclineBtn) {
            $('#cookieNoticePro #cookieReject').hide()
          }
          if (!config.showCookieIcon) {
            $('#cookieNoticePro #cookieIcon').hide()
          }
          if (!config.showCloseIcon) {
            $('#cookieNoticePro #closeIcon').hide()
          }
        },
        event === 'open' ? 0 : config.delay,
      )
      $('body').on('click', '#cookieAccept', () => {
        hideCookieBanner(true, config.expires)
        $('input[name="gdprPrefItem"][data-compulsory="on"]').prop('checked', true)
        let prefs = []
        $.each($('input[name="gdprPrefItem"]').serializeArray(), (i, field) => {
          prefs.push(field.value)
        })
        createCookie(COOKIE_CONSENT_PREFS, encodeURIComponent(JSON.stringify(prefs)), {
          expires: daysToUTC(365),
          path: '/',
        })
        config.onConsentAccept.call(this)
        config.showSettingsBtn ? typeof injectScripts === 'function' && injectScripts() : null
        if (config.enableGoogleConsentMode) {
          googleConsentModeHandler()
        }
      })
      $('body').on('click', '#cookieSettings', () => {
        if (event === 'open') {
          $('input[name="gdprPrefItem"]:not(:disabled)').attr('data-compulsory', 'off').prop('checked', false)
          $('#cookieTypes').slideDown('fast', function () {
            $('#cookieSettings').prop('disabled', true)
          })
        } else {
          $('input[name="gdprPrefItem"]:not(:disabled)').attr('data-compulsory', 'off').prop('checked', config.allCheckboxesChecked)
          $('#cookieTypes').toggle('fast', function () {
            $('#cookieSettings').prop('disabled', false)
          })
        }
      })
      $('body').on('click', '#closeIcon', () => {
        $('#cookieNoticePro').remove()
      })
      $('body').on('click', '#cookieReject', () => {
        hideCookieBanner(false, config.expires)
        config.onConsentReject.call(this)
        if (config.enableGoogleConsentMode) {
          googleConsentModeHandler()
        }
        // Delete prefs cookie from brower on reject
        createCookie(COOKIE_CONSENT_PREFS, '', {
          expires: daysToUTC(-365),
          path: '/',
        })
      })
    }
    // If already consent is accepted, inject preferences
    else {
      config.showSettingsBtn ? typeof injectScripts === 'function' && injectScripts() : null
      if (config.enableMinimize) {
        minimizeCookieBanner()
      }
      if (config.enableGoogleConsentMode) {
        googleConsentModeHandler()
      }
    }
  }

  /**
   * Check if cookie exists
   * @param {string} cookieName
   */
  const cookieExists = (cookieName) => {
    if (document.cookie.indexOf(cookieName) > -1) {
      return true
    }
    return false
  }

  /**
   * Create the cookie and hide the banner
   * @param {string} value
   * @param {string} expiryDays
   */
  const hideCookieBanner = (value, expiryDays) => {
    createCookie(COOKIE_CONSENT, value, {
      expires: daysToUTC(expiryDays),
      path: '/',
    })
    $('#cookieNoticePro').fadeOut('fast', () => {
      $('body').off('click', '#cookieSettings')
      $('body').off('click', '#cookieReject')
      $('body').off('click', '#closeIcon')
      $('body').off('click', '#cookieAccept')
      $(this).remove()
    })
    if (config.enableMinimize) {
      minimizeCookieBanner()
    }
  }

  /**
   * Minimize the cookie banner and show a minimized icon.
   */
  const minimizeCookieBanner = () => {
    // Remove any existing minimize icon before appending a new one.
    $('#cookieMinimizeIcon').remove()

    // Minimize the banner and show an icon instead.
    let minimizeIcon = $(
      '<div id="cookieMinimizeIcon" class="zoomIn" >' +
        cookieIcon +
        '<div class="floating-text">' +
        config.floatingIconTooltip +
        '</div></div>',
    )
    $('body').append(minimizeIcon)

    // Define the click behavior for the minimize icon.
    $('#cookieMinimizeIcon').on('click', function () {
      if ($(this).hasClass('zoomIn')) {
        $(this).removeClass('zoomIn').addClass('zoomOut')
        setTimeout(() => {
          $.fn.cookieNoticePro('open') // Reopen the cookie notice
        }, 200) // Match the timeout to the animation duration
      } else {
        $(this).removeClass('zoomOut').addClass('zoomIn')
      }
    })
  }

  /**
   * Set Cookie
   * @param {string} name -  Cookie Name
   * @param {string} value - Cookie Value
   * @param {string} expiryDays - Expiry Date of cookie
   */
  const createCookie = (name, value, options = {}) => {
    document.cookie = `${name}=${value}${Object.keys(options).reduce((acc, key) => {
      return acc + `;${key.replace(/([A-Z])/g, ($1) => '-' + $1.toLowerCase())}=${options[key]}`
    }, '')}`
  }

  /**
   * Converts Days Into UTC String
   * @param {number} days - Name of the cookie
   * @return {string} UTC date string
   */
  const daysToUTC = (days) => {
    const newDate = new Date()
    newDate.setTime(newDate.getTime() + days * 24 * 60 * 60 * 1000)
    return newDate.toUTCString()
  }

  /**
   * Get Cookie By Name
   * @param {string} name - Name of the cookie
   * @return {string(number|Array)} Value of the cookie
   */
  const accessCookie = (name) => {
    const cookies = document.cookie.split(';').reduce((acc, cookieString) => {
      const [key, value] = cookieString.split('=').map((s) => s.trim())
      if (key && value) {
        acc[key] = decodeURIComponent(value)
      }
      return acc
    }, {})
    return name ? cookies[name] || false : cookies
  }

  /**
   * Updates Google Consent Mode based on user consent and preferences.
   */
  const googleConsentModeHandler = () => {
    if (!config.enableGoogleConsentMode) return
    const consent = JSON.parse(accessCookie(COOKIE_CONSENT))
    const preferences = JSON.parse(accessCookie(COOKIE_CONSENT_PREFS))
    const googleConsentAnalyticsStorage = JSON.parse(accessCookie(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE))
    const googleConsentAdPrefs = JSON.parse(accessCookie(GOOGLE_CONSENT_MODE_AD_PREFS))

    try {
      // if consent is accepted
      if (consent === true) {
        /** GOOGLE CONSENT ANALYTICS STORAGE */
        // if analytics is accepted and google consent analytics storage does not exist
        if (preferences.indexOf('analytics') > -1 && !cookieExists(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE)) {
          createCookie(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE, encodeURIComponent(true), {
            expires: daysToUTC(365),
            path: '/',
          })
          gtag('consent', 'update', {
            analytics_storage: 'granted',
          })
        }
        // if analytics is accepted and google consent analytics storage exist
        else if (preferences.indexOf('analytics') > -1 && cookieExists(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE)) {
          if (googleConsentAnalyticsStorage === true) {
            gtag('consent', 'update', {
              analytics_storage: 'granted',
            })
          }
          if (googleConsentAnalyticsStorage === false) {
            createCookie(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE, encodeURIComponent(true), {
              expires: daysToUTC(365),
              path: '/',
            })
            gtag('consent', 'update', {
              analytics_storage: 'granted',
            })
          }
        }
        //  if analytics is removed and google consent analytics storage exist
        else if (preferences.indexOf('analytics') === -1 && cookieExists(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE)) {
          if (googleConsentAnalyticsStorage === true) {
            createCookie(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE, encodeURIComponent(false), {
              expires: daysToUTC(365),
              path: '/',
            })
            gtag('consent', 'update', {
              analytics_storage: 'denied',
            })
          }
        }

        /** GOOGLE CONSENT AD PREFS */
        // if marketing is accepted and google consent ad prefs storage does not exist
        if (preferences.indexOf('marketing') > -1 && !cookieExists(GOOGLE_CONSENT_MODE_AD_PREFS)) {
          createCookie(GOOGLE_CONSENT_MODE_AD_PREFS, encodeURIComponent(true), {
            expires: daysToUTC(365),
            path: '/',
          })
          gtag('consent', 'update', {
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
          })
        }
        // if marketing is accepted and google consent ad prefs storage exist
        else if (preferences.indexOf('marketing') > -1 && cookieExists(GOOGLE_CONSENT_MODE_AD_PREFS)) {
          if (googleConsentAdPrefs === true) {
            gtag('consent', 'update', {
              ad_storage: 'granted',
              ad_user_data: 'granted',
              ad_personalization: 'granted',
            })
          }
          if (googleConsentAdPrefs === false) {
            createCookie(GOOGLE_CONSENT_MODE_AD_PREFS, encodeURIComponent(true), {
              expires: daysToUTC(365),
              path: '/',
            })
            gtag('consent', 'update', {
              ad_storage: 'granted',
              ad_user_data: 'granted',
              ad_personalization: 'granted',
            })
          }
        }
        //  if marketing is removed and google consent ad prefs storage exist
        else if (preferences.indexOf('marketing') === -1 && cookieExists(GOOGLE_CONSENT_MODE_AD_PREFS)) {
          if (googleConsentAdPrefs === true) {
            createCookie(GOOGLE_CONSENT_MODE_AD_PREFS, encodeURIComponent(false), {
              expires: daysToUTC(365),
              path: '/',
            })
            gtag('consent', 'update', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
            })
          }
        }
      } else {
        if (cookieExists(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE)) {
          if (googleConsentAnalyticsStorage === true) {
            createCookie(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE, '', {
              expires: daysToUTC(-365),
              path: '/',
            })
            gtag('consent', 'update', {
              analytics_storage: 'denied',
            })
          }
        }
        if (cookieExists(GOOGLE_CONSENT_MODE_AD_PREFS)) {
          if (googleConsentAdPrefs === true) {
            createCookie(GOOGLE_CONSENT_MODE_AD_PREFS, '', {
              expires: daysToUTC(-365),
              path: '/',
            })
            gtag('consent', 'update', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
            })
          }
        }
      }
    } catch (error) {
      console.warn('CookieNoticePro: Error initializing Google Consent Mode. Ensure gtag.js is correctly installed:', error)
    }
  }

  const changeRootVariables = () => {
    $(':root').css('--cookieNoticeProLight', config.themeSettings.lightColor)
    $(':root').css('--cookieNoticeProDark', config.themeSettings.darkColor)
  }

  return (window.cookieNoticePro = {
    init: (config) => {
      $.fn.cookieNoticePro(config)
    },
    /**
     * Reopens the cookie notice banner
     */
    reinit: () => {
      $.fn.cookieNoticePro('open')
    },

    /**
     * Returns true if consent is given else false
     */
    isAccepted: () => {
      let consent = accessCookie(COOKIE_CONSENT)
      return JSON.parse(consent)
    },

    /**
     * Returns the value of the cookieConsentPrefs cookie
     */
    getPreferences: () => {
      let preferences = accessCookie(COOKIE_CONSENT_PREFS)
      return JSON.parse(preferences)
    },

    /**
     * Check if a particular preference is accepted
     * @param {string} cookieName
     */
    isPreferenceAccepted: (cookieTypeValue) => {
      let consent = JSON.parse(accessCookie(COOKIE_CONSENT))
      let preferences = accessCookie(COOKIE_CONSENT_PREFS)
      preferences = JSON.parse(preferences)
      if (consent === false) {
        return false
      }
      if (preferences === false || preferences.indexOf(cookieTypeValue) === -1) {
        return false
      }
      return true
    },
  })
})(jQuery)
